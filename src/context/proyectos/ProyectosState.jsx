import { useContext, useState } from "react";
import "firebase/firestore";
import { useFirestore } from "reactfire";
import { useHistory } from "react-router-dom";
import ProyectosContext from "./ProyectosContext";
import MensajeContext from "../mensaje/mensajeContext";

const ProyectosState = ({ children }) => {
    const fireStore = useFirestore();
    const history = useHistory();

    const { setMensajeState } = useContext(MensajeContext)

    const [proyectoAbierto, setProyectoAbierto] = useState(null);
    
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
            console.log(error);
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

    return (
        <ProyectosContext.Provider
            value={{
                proyectoAbierto,
                crearProyecto,
                setProyectoAbierto,
                abrirProyecto,
            }}
        >
            {children}
        </ProyectosContext.Provider>
    );
};

export default ProyectosState;
