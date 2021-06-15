import useTraerProyecto from "../../hooks/proyectos/useTraerProyectos";
import Spinner from "../Spinner";
import ProyectosItems from "./ProyectosItems";

const ListaProyectos = () => {
    const { status, data } = useTraerProyecto();

    if (status === "success") {
        return (
            <div className="listaProyectos__contenedor">
                {data.map((proyecto) => (
                    <ProyectosItems
                        key={proyecto.NO_ID_FIELD}
                        proyecto={proyecto}
                    />
                ))}
            </div>
        );
    } else {
        return (
            <Spinner />
        );
    }
};

export default ListaProyectos;
