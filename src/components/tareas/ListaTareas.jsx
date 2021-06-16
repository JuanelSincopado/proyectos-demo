import useTraerTareas from "../../hooks/tareas/useTraerTareas";
import TarjetaTarea from "./TarjetaTarea";
import Spinner from "../Spinner";

const ListaTareas = () => {
    const { status, data } = useTraerTareas();

    if (status === "success") {
        return (
            <div className="listaTareas__contenedor">
                {data.map((tarea) => (
                    <TarjetaTarea tarea={tarea} key={tarea.NO_ID_FIELD} />
                ))}
            </div>
        );
    }
    return <Spinner />;
};

export default ListaTareas;
