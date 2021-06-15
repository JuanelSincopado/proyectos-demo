import { useContext, useEffect } from "react";
import { useHistory } from "react-router";
import ProyectosContext from "../../context/proyectos/ProyectosContext";
import CrearTareas from "./CrearTareas";
import ListaTareas from "./ListaTareas";
import Mensaje from "../Mensaje";
import "./tareas.css";

const Tareas = () => {
    const history = useHistory();

    const { proyectoAbierto } = useContext(ProyectosContext);

    useEffect(() => {
        if (!proyectoAbierto) {
            history.push("/proyectos");
        }
    });

    return (
        <div className="tareas">
            <CrearTareas />

            <ListaTareas />

            <Mensaje />
        </div>
    );
};

export default Tareas;
