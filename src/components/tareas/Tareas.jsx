import CrearTareas from "./CrearTareas";
import ListaTareas from "./ListaTareas";
import Mensaje from "../Mensaje";
import ConfiguracionProyecto from "./ConfiguracionProyecto";
import "./tareas.css";

const Tareas = () => {
    return (
        <div className="relavito">
            <CrearTareas />

            <ListaTareas />

            <ConfiguracionProyecto />

            <Mensaje />
        </div>
    );
};

export default Tareas;
