const Boton = ({ titulo, funcion, color }) => {
    return (
        <button className={`boton ${color}`} onClick={funcion}>
            {titulo}
        </button>
    );
};

export default Boton;
