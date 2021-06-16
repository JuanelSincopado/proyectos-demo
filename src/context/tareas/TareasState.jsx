import "firebase/firestore";
import { useContext } from "react";
import { useFirestore } from "reactfire";
import MensajeContext from "../mensaje/mensajeContext";
import ProyectosContext from "../proyectos/ProyectosContext";
import TareasContext from "./TareasContext";

const TareasState = ({ children }) => {
    const firestore = useFirestore();
    
    const { proyectoAbierto } = useContext(ProyectosContext);
    const { setMensajeState } = useContext(MensajeContext);

    const crearTarea = async (tarea) => {
        try {
            await firestore
                .collection("proyectos")
                .doc(proyectoAbierto.NO_ID_FIELD)
                .collection("tareas")
                .add(tarea);
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
            console.log(error.message);
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

    const cambiarEstado = async (tarea) => {
        if (tarea.estado) {
            tarea.estado = false;
        } else {
            tarea.estado = true;
        }
        try {
            await firestore
                .collection("proyectos")
                .doc(proyectoAbierto.NO_ID_FIELD)
                .collection("tareas")
                .doc(tarea.NO_ID_FIELD)
                .update({
                    estado: tarea.estado,
                });
        } catch (error) {
            console.log(error.message);
        }
    };

    const eliminar = async (tarea) => {
        try {
            await firestore
                .collection("proyectos")
                .doc(proyectoAbierto.NO_ID_FIELD)
                .collection("tareas")
                .doc(tarea.NO_ID_FIELD)
                .delete();
            setMensajeState({
                mensaje: "Eliminado con éxito",
                tipo: "exito",
            });
            setTimeout(() => {
                setMensajeState({
                    mensaje: "",
                });
            }, 2000);
        } catch (error) {
            console.log(error.message);
            setMensajeState({
                mensaje: "Eror al eliminar Proyecto",
                tipo: "error",
            });
            setTimeout(() => {
                setMensajeState({
                    mensaje: "",
                });
            }, 2000);
        }
    };

    return (
        <TareasContext.Provider
            value={{
                crearTarea,
                cambiarEstado,
                eliminar,
            }}
        >
            {children}
        </TareasContext.Provider>
    );
};

export default TareasState;
