import { useContext } from "react";
import ProyectosContext from "../../context/proyectos/ProyectosContext";
import useTareas from "../../hooks/tareas/useTareas";
import BotonCrear from "../BotonCrear";

const CrearTareas = () => {
    const { tarea, handleOnChange, crear } = useTareas();

    const { proyectoAbierto } = useContext(ProyectosContext);

    return (
        <div className="crearTareas__contenedor">
            <a href="/proyectos" className="crearTareas__volver">
                <i className="fas fa-arrow-left"></i>
            </a>

            <h1 className="crearTareas__titulo">
                {proyectoAbierto && proyectoAbierto.nombre}
            </h1>

            <div className="crearTareas__formulario">
                <input
                    type="text"
                    className="crearTareas__input"
                    placeholder="Nombre de la Tarea"
                    spellCheck="false"
                    onChange={handleOnChange}
                    value={tarea}
                />

                <BotonCrear titulo="Crear tarea" funcion={crear} />
            </div>
        </div>
    );
};

export default CrearTareas;
