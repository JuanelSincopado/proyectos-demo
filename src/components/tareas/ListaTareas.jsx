import { useContext } from "react";
import ProyectosContext from "../../context/proyectos/ProyectosContext";
import TarjetaTarea from "./TarjetaTarea";

const ListaTareas = () => {
    const { proyectoAbierto } = useContext(ProyectosContext);

    return (
        <div className="listaTareas__contenedor">
            {proyectoAbierto && proyectoAbierto.tareas.map((tarea) => (
                <TarjetaTarea key={tarea} tarea={tarea} />
            ))}
        </div>
    );
};

export default ListaTareas;
