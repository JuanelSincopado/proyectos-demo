import { useContext } from "react";
import TareasContext from "../../context/tareas/TareasContext";

const TarjetaTarea = ({ tarea }) => {

    const { eliminar } = useContext(TareasContext);

    return (
        <div className="tarjetaTarea__contenedor">
            <p className="tarjetaTarea__nombre">{tarea}</p>

            <button
                className="tarjetaTarea__eliminar"
                title="Eliminar"
                onClick={() => eliminar(tarea)}
            >
                <i className="far fa-trash-alt"></i>
            </button>
        </div>
    );
};

export default TarjetaTarea;
