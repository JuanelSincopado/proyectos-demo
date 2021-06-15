import { useContext, useEffect, useState } from "react";
import "firebase/firestore";
import "firebase/storage";
import { useFirestore, useStorage } from "reactfire";
import MensajeContext from "../../context/mensaje/mensajeContext";
import AuthContext from "../../context/auth/AuthContext";

const useCrearProyectos = () => {
    const fireStore = useFirestore();
    const storage = useStorage();

    const { setMensajeState } = useContext(MensajeContext);
    const { usuarioAutenticado } = useContext(AuthContext);

    const urlImageDefault =
        "https://firebasestorage.googleapis.com/v0/b/proyecto-demo-684b8.appspot.com/o/proyecto.jpg?alt=media&token=8603e6bf-49b6-460b-ac23-fc926bc6d4d2";

    const [proyecto, setProyecto] = useState({
        nombre: "",
        urlFirebase: urlImageDefault,
        creador: "",
    });

    useEffect(() => {
        setProyecto({
            ...proyecto,
            creador:
                usuarioAutenticado !== null
                    ? usuarioAutenticado.displayName
                    : "",
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [usuarioAutenticado]);

    const [barProgress, setBarProgress] = useState(0);

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
                        setProyecto({
                            ...proyecto,
                            urlFirebase: url,
                        });
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

    const crearProyecto = async () => {
        if (proyecto.nombre.trim() === "") {
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

        try {
            await fireStore.collection("proyectos").add(proyecto);
            setProyecto({
                ...proyecto,
                nombre: "",
                urlFirebase: urlImageDefault,
            });
            setBarProgress(0);
            setMensajeState({
                mensaje: "Subido con éxito",
                tipo: "exito",
            });
            setTimeout(() => {
                setMensajeState({
                    mensaje: "",
                });
            }, 2000);
        } catch (error) {
            console.log(error);
            setMensajeState({
                mensaje: "Eror al subir Proyecto",
                tipo: "error",
            });
            setTimeout(() => {
                setMensajeState({
                    mensaje: "",
                });
            }, 2000);
        }
    };

    const proyectoSeleccionado = (proyectoSelect) => {
        
    }

    return {
        proyecto,
        barProgress,
        handleOnchange,
        handleOnChangeImg,
        crearProyecto,
        proyectoSeleccionado
    };
};

export default useCrearProyectos;
