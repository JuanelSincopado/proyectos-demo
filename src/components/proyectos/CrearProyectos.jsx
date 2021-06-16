import useCrearProyectos from "../../hooks/proyectos/useCrearProyectos";
import Boton from "../Boton";
import Input from "../Input";

const CrearProyectos = () => {
    const { proyecto, barProgress, handleOnchange, handleOnChangeImg, crear } =
        useCrearProyectos();

    return (
        <div className="crearProyectos__contenedor">
            <h1 className="crearProyectos__titulo">Crear Proyectos</h1>

            <div className="crearProyectos__formulario-img">
                <input type="file" onChange={handleOnChangeImg} />
                <img
                    src={proyecto.urlFirebase}
                    alt={proyecto.nombre}
                    id="img"
                />
            </div>

            {barProgress !== 0 && (
                <p className="crearProyectos__barProgress">{barProgress}%</p>
            )}

            <Input
                className='Input'
                placeholder="Crear Proyecto"
                name="nombre"
                value={proyecto.nombre}
                funcion={handleOnchange}
            />

            {barProgress > 0 && barProgress < 100 ? (
                <p className="crearProyectos__subiendoImagen">
                    Subiendo Imagen...
                </p>
            ) : (
                <Boton titulo="Crear Proyecto" color='boton-crear' funcion={crear} />
            )}
        </div>
    );
};

export default CrearProyectos;
