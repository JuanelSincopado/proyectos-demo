import { useContext } from "react";
import ProyectosContext from "../../context/proyectos/ProyectosContext";
import useTareas from "../../hooks/tareas/useTareas";
import Input from "../Input";
import Boton from "../Boton";

const CrearTareas = () => {
    const { tarea, handleOnChange, crear } = useTareas();

    const { proyectoAbierto, panelConfiguracion, setPanelConfiguracion } =
        useContext(ProyectosContext);

    return (
        <div className="crearTareas__contenedor">
            <div className="crearTareas__navbar">
                <a href="/proyectos" className="crearTareas__volver">
                    <i className="fas fa-arrow-left"></i>
                </a>

                <button
                    className="crearTareas__configuracion"
                    onClick={() => setPanelConfiguracion(!panelConfiguracion)}
                >
                    <i className="fas fa-cog"></i>
                </button>
            </div>

            <p className="crearTareas__proyecto">Proyecto:</p>

            <h1 className="crearTareas__titulo">
                {proyectoAbierto && proyectoAbierto.nombre}
            </h1>

            <div className="crearTareas__formulario">
                <Input
                    className="Input"
                    placeholder="Nombre de la Tarea"
                    funcion={handleOnChange}
                    value={tarea.nombre}
                />

                <Boton titulo="Crear tarea" color='boton-crear' funcion={crear} />
            </div>
        </div>
    );
};

export default CrearTareas;
