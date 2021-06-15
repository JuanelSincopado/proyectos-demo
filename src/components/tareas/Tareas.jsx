import CrearTareas from "./CrearTareas";
import ListaTareas from "./ListaTareas";
import Mensaje from "../Mensaje";
import "./tareas.css";

const Tareas = () => {
    return (
        <div className="tareas">
            <CrearTareas />

            <ListaTareas />

            <Mensaje />
        </div>
    );
};

export default Tareas;
