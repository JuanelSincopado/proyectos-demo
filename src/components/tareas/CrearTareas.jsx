import { useContext, useEffect } from "react";
import { useHistory } from "react-router";
import ProyectosContext from "../../context/proyectos/ProyectosContext";
import useTareas from "../../hooks/tareas/useTareas";
import BotonCrear from "../BotonCrear";

const CrearTareas = () => {
    const history = useHistory();

    const { proyectoAbierto } = useContext(ProyectosContext);

    const { tarea, handleOnChange, crear } = useTareas();

    useEffect(() => {
        if (!proyectoAbierto) {
            history.push("/proyectos");
        }
    });

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
