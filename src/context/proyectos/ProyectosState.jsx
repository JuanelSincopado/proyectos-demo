import { useState } from "react";
import ProyectosContext from "./ProyectosContext";
import { useHistory } from "react-router-dom";

const ProyectosState = ({ children }) => {

    const history = useHistory();

    const [proyectoAbierto, setProyectoAbierto] = useState(null);

    const abrirProyecto = proyecto => {
        setProyectoAbierto(proyecto)

        history.push('/tareas');
    }

    return (
        <ProyectosContext.Provider
            value={{
                proyectoAbierto,
                abrirProyecto
            }}
        >
            {children}
        </ProyectosContext.Provider>
    );
};

export default ProyectosState;
