import { useContext, useState } from "react";
import MensajeContext from "../../context/mensaje/mensajeContext";
import TareasContext from "../../context/tareas/TareasContext";

const useTareas = () => {
    const { setMensajeState } = useContext(MensajeContext);
    const { crearTarea } = useContext(TareasContext);

    const [tarea, setTarea] = useState({
        nombre: "",
        estado: false,
    });

    const handleOnChange = (e) => {
        setTarea({
            ...tarea,
            nombre: e.target.value,
        });
    };

    const crear = () => {
        if (tarea.nombre === "") {
            setMensajeState({
                mensaje: "El campo es obligatorio",
                tipo: "error",
            });
            setTimeout(() => {
                setMensajeState({
                    mensaje: "",
                });
            }, 2000);
            return;
        }

        crearTarea(tarea);

        setTarea({
            nombre: "",
        });
    };

    return {
        tarea,
        handleOnChange,
        crear,
    };
};

export default useTareas;
