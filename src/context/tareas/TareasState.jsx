import "firebase/firestore";
import { useContext } from "react";
import { useFirestore } from "reactfire";
import MensajeContext from "../mensaje/mensajeContext";
import ProyectosContext from "../proyectos/ProyectosContext";
import TareasContext from "./TareasContext";

const TareasState = ({ children }) => {
    const firestore = useFirestore();
    const FieldValue = useFirestore.FieldValue;

    const { proyectoAbierto, setProyectoAbierto } =
        useContext(ProyectosContext);
    const { setMensajeState } = useContext(MensajeContext);

    const crearTarea = async (tarea) => {
        const { tareas } = proyectoAbierto;

        setProyectoAbierto({
            ...proyectoAbierto,
            tareas: [...tareas, tarea],
        });

        try {
            await firestore
                .collection("proyectos")
                .doc(proyectoAbierto.NO_ID_FIELD)
                .update({
                    tareas: FieldValue.arrayUnion(tarea),
                });
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

    const eliminar = async (tarea) => {

        const resultado = proyectoAbierto.tareas.filter(item => item !== tarea)

        setProyectoAbierto({
            ...proyectoAbierto,
            tareas: resultado
        })

        try {
            await firestore
                .collection("proyectos")
                .doc(proyectoAbierto.NO_ID_FIELD)
                .update({
                    tareas: FieldValue.arrayRemove(tarea),
                });

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
                eliminar,
            }}
        >
            {children}
        </TareasContext.Provider>
    );
};

export default TareasState;
