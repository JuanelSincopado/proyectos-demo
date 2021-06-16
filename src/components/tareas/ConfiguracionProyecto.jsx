import { useContext } from "react";
import ProyectosContext from "../../context/proyectos/ProyectosContext";
import useConfiguracion from "../../hooks/configuracion/useConfiguracion";
import Input from "../Input";
import Boton from "../Boton";

const ConfiguracionProyecto = () => {
    const {
        panelConfiguracion,
        proyectoAbierto,
        setPanelConfiguracion,
        editarProyecto,
        eliminarProyecto,
    } = useContext(ProyectosContext);

    const { handleOnchange } = useConfiguracion();

    return (
        <div
            className={
                panelConfiguracion
                    ? "configuracionProyecto__contenedor-activo"
                    : "configuracionProyecto__contenedor"
            }
        >
            <button
                className="configuracionProyecto__volver"
                onClick={() => setPanelConfiguracion(!panelConfiguracion)}
            >
                <i className="fas fa-arrow-left"></i>
            </button>
            <h1 className="configuracionProyecto__titulo">Configuración</h1>

            <Input
                placeholder="Cambiar Nombre"
                className="Input Input-editar"
                value={proyectoAbierto.nombre}
                funcion={handleOnchange}
                name="nombre"
            />

            <Boton
                titulo="Cambiar Nombre"
                color="boton-editar"
                funcion={() => editarProyecto(proyectoAbierto)}
            />

            <div className="configuracionProyecto__eliminar">
                <p>¿Desea eliminar el Proyecto?</p>
                <Boton
                    titulo="Eliminar Proyecto"
                    color="boton-eliminar"
                    funcion={eliminarProyecto}
                />
            </div>
        </div>
    );
};

export default ConfiguracionProyecto;
