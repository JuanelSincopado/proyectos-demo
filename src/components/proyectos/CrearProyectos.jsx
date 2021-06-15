import useCrearProyectos from "../../hooks/proyectos/useCrearProyectos";
import BotonCrear from "../BotonCrear";

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

            <input
                type="text"
                className="crearProyectos__input"
                placeholder="Nombre del proyecto"
                spellCheck="false"
                name="nombre"
                value={proyecto.nombre}
                onChange={handleOnchange}
            />

            {barProgress > 0 && barProgress < 100 ? (
                <p className="crearProyectos__subiendoImagen" >Subiendo Imagen...</p>
            ) : (
                <BotonCrear titulo="Crear Proyecto" funcion={crear} />
            )}
        </div>
    );
};

export default CrearProyectos;
