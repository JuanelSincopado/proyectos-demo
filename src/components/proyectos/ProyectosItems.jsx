import { useContext } from "react";
import ProyectosContext from "../../context/proyectos/ProyectosContext";

const ProyectosItems = ({ proyecto }) => {
    const { abrirProyecto } = useContext(ProyectosContext);

    return (
        <div
            className="proyectosItems__contenedor"
            onClick={() => abrirProyecto(proyecto)}
        >
            <img src={proyecto.urlFirebase} alt={proyecto.nombre} />

            <div className="proyectosItems__contenedorDatos">
                <p className="proyectosItems__titulo">{proyecto.nombre}</p>

            </div>
        </div>
    );
};

export default ProyectosItems;
