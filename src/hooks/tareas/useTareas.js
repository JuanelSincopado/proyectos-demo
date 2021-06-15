import { useContext, useState } from "react";
import MensajeContext from "../../context/mensaje/mensajeContext";
import TareasContext from "../../context/tareas/TareasContext";

const useTareas = () => {
    const { setMensajeState } = useContext(MensajeContext);
    const { crearTarea } = useContext(TareasContext);

    const [tarea, setTarea] = useState("");

    const handleOnChange = (e) => {
        setTarea(e.target.value);
    };

    const crear = () => {
        if (tarea === "") {
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

        setTarea("");
    };

    return {
        tarea,
        handleOnChange,
        crear,
    };
};

export default useTareas;
