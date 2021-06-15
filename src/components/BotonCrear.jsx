const BotonCrear = ({ titulo, funcion }) => {
    return (
        <button className="botonCrear" onClick={funcion}>
            {titulo}
        </button>
    );
};

export default BotonCrear;
