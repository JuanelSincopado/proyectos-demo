import useRegistrar from "../../hooks/login/useRegistrar";

const CrearCuenta = (props) => {
    const { error, handleOnChange, submit } = useRegistrar(props);

    return (
        <div className="login__contenedor">
            <div className="login__formulario">
                <p className="login__p">Crear Cuenta</p>
                <input
                    type="email"
                    className="login__input"
                    placeholder="Correo"
                    name="correo"
                    onChange={handleOnChange}
                />
                <input
                    type="text"
                    className="login__input"
                    placeholder="Nombre de Usuario"
                    name="name"
                    onChange={handleOnChange}
                />
                <input
                    type="password"
                    className="login__input"
                    placeholder="Contraseña"
                    name="password"
                    onChange={handleOnChange}
                />
                <input
                    type="password"
                    className="login__input"
                    placeholder="Confirmar Contraseña"
                    name="repeatPassword"
                    onChange={handleOnChange}
                />

                <input
                    type="submit"
                    value="Crear cuenta"
                    className="login__submit"
                    onClick={submit}
                />
                {error && <p className="login__error">{error}</p>}
                <div className="login__ContenedorCrearCuenta">
                    <a className="login__boton" href="/">
                        Ya tengo una cuenta
                    </a>
                </div>
            </div>
        </div>
    );
};

export default CrearCuenta;
