import { useContext, useEffect, useState } from "react";
import "firebase/storage";
import { useStorage } from "reactfire";
import MensajeContext from "../../context/mensaje/mensajeContext";
import AuthContext from "../../context/auth/AuthContext";
import ProyectosContext from "../../context/proyectos/ProyectosContext";
import { urlImageDefault } from "../../urlImage";

const useCrearProyectos = () => {
    const storage = useStorage();

    const { setMensajeState } = useContext(MensajeContext);
    const { usuarioAutenticado } = useContext(AuthContext);
    const { crearProyecto } = useContext(ProyectosContext);

    const [urlImg, setUrlImg] = useState(urlImageDefault);
    const [proyecto, setProyecto] = useState({
        nombre: "",
        urlFirebase: urlImg,
        creador: usuarioAutenticado.displayName,
    });
    const [barProgress, setBarProgress] = useState(0);

    useEffect(() => {
        setProyecto((p) => {
            return { ...p, urlFirebase: urlImg };
        });
    }, [urlImg]);

    const handleOnchange = (e) => {
        setProyecto({
            ...proyecto,
            [e.target.name]: e.target.value,
        });
    };

    const handleOnChangeImg = (e) => {
        const value = e.target.files[0];
        if (value) {
            const ref = storage.ref("images/" + value.name);

            const subir = ref.put(value);

            subir.on(
                "state_changed",
                function progress(snapshot) {
                    setBarProgress(
                        Math.trunc(
                            (snapshot.bytesTransferred / snapshot.totalBytes) *
                                100
                        )
                    );
                },
                function error(error) {
                    console.log(error);
                    setMensajeState({
                        mensaje: "Error al subir Imagen",
                        tipo: "error",
                    });
                    setTimeout(() => {
                        setMensajeState({
                            mensaje: "",
                        });
                    }, 2000);
                },
                function complete() {
                    subir.snapshot.ref.getDownloadURL().then((url) => {
                        setUrlImg(url);
                    });
                }
            );

            const reader = new FileReader();
            reader.onload = function (e) {
                const img = document.getElementById("img");
                img.src = e.target.result;
            };
            reader.readAsDataURL(value);
        }
    };

    const crear = async () => {
        if (proyecto.nombre === "") {
            setMensajeState({
                mensaje: "El nombre es obligatorio",
                tipo: "error",
            });
            setTimeout(() => {
                setMensajeState({
                    mensaje: "",
                });
            }, 2000);
            return;
        }

        crearProyecto(proyecto);

        setUrlImg(urlImageDefault);

        setProyecto({
            ...proyecto,
            nombre: "",
        });
        setBarProgress(0);
    };

    return {
        proyecto,
        barProgress,
        handleOnchange,
        handleOnChangeImg,
        crear,
    };
};

export default useCrearProyectos;
