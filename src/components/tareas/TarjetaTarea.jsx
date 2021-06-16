import { useContext } from "react";
import TareasContext from "../../context/tareas/TareasContext";

const TarjetaTarea = ({ tarea }) => {
    const { cambiarEstado, eliminar } = useContext(TareasContext);

    return (
        <div className="tarjetaTarea__contenedor">
            <p className="tarjetaTarea__nombre">{tarea.nombre}</p>

            <div className="tarjetaTarea__botones">
                {tarea.estado ? (
                    <button
                        className="tarjetaTarea__estado tarjetaTarea__estado-completo"
                        onClick={() => cambiarEstado(tarea)}
                    >
                        completo
                    </button>
                ) : (
                    <button
                        className="tarjetaTarea__estado tarjetaTarea__estado-incompleto"
                        onClick={() => cambiarEstado(tarea)}
                    >
                        incompleto
                    </button>
                )}

                <button
                    className="tarjetaTarea__eliminar"
                    title="Eliminar"
                    onClick={() => eliminar(tarea)}
                >
                    <i className="far fa-trash-alt"></i>
                </button>
            </div>
        </div>
    );
};

export default TarjetaTarea;
