const RecuperarPassword = ({
    abrirVentanaEmergente,
    handleOnChange,
    recuperarPassword,
    setAbrirVentanaEmergente,
}) => {
    return (
        <div
            className={
                abrirVentanaEmergente
                    ? "recuperarPassword__contenedor-activo"
                    : "recuperarPassword__contenedor"
            }
        >
            <div className="recuperarPassword__formulario">
                <div className="recuperarPassword__volver">
                    <button onClick={() => setAbrirVentanaEmergente(false)}>
                        <i className="fas fa-times"></i>
                    </button>
                </div>

                <p className="recuperarPassword__p">Recuperar Contraseña</p>

                <input
                    type="mail"
                    className="recuperarContraseña__input"
                    placeholder="Ingrese su correo"
                    onChange={(e) =>
                        handleOnChange("correoRecuperacion", e.target.value)
                    }
                />

                <button
                    className="recuperarContraseña__boton"
                    onClick={recuperarPassword}
                >
                    Recuperar contraseña
                </button>
            </div>
        </div>
    );
};

export default RecuperarPassword;
