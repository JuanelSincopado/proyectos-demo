import { useContext, useState } from "react";
import "firebase/firestore";
import { useFirestore } from "reactfire";
import { useHistory } from "react-router-dom";
import ProyectosContext from "./ProyectosContext";
import MensajeContext from "../mensaje/mensajeContext";

const ProyectosState = ({ children }) => {
    const fireStore = useFirestore();
    const history = useHistory();

    const { setMensajeState } = useContext(MensajeContext);

    const [proyectoAbierto, setProyectoAbierto] = useState(null);
    const [panelConfiguracion, setPanelConfiguracion] = useState(false);

    const crearProyecto = async (proyecto) => {
        try {
            await fireStore.collection("proyectos").add(proyecto);
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
                mensaje: "Eror al crear Proyecto",
                tipo: "error",
            });
            setTimeout(() => {
                setMensajeState({
                    mensaje: "",
                });
            }, 2000);
        }
    };

    const abrirProyecto = (proyecto) => {
        setProyectoAbierto(proyecto);
        history.push("/tareas");
    };

    const editarProyecto = async (proyecto) => {
        try {
            await fireStore
                .collection("proyectos")
                .doc(proyectoAbierto.NO_ID_FIELD)
                .update({
                    nombre: proyecto.nombre,
                });
            setMensajeState({
                mensaje: "Se guardaron los cambios",
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
                mensaje: "Eror al guardar cambios",
                tipo: "error",
            });
            setTimeout(() => {
                setMensajeState({
                    mensaje: "",
                });
            }, 2000);
        }
    };

    const eliminarProyecto = async () => {
        try {
            await fireStore
                .collection("proyectos")
                .doc(proyectoAbierto.NO_ID_FIELD)
                .delete();
            history.push("/");
            setProyectoAbierto(null)
            setPanelConfiguracion(false)
            setMensajeState({
                mensaje: "Se eliminó con éxito",
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
                mensaje: "Eror al guardar cambios",
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
        <ProyectosContext.Provider
            value={{
                proyectoAbierto,
                panelConfiguracion,
                crearProyecto,
                setProyectoAbierto,
                abrirProyecto,
                setPanelConfiguracion,
                editarProyecto,
                eliminarProyecto,
            }}
        >
            {children}
        </ProyectosContext.Provider>
    );
};

export default ProyectosState;
