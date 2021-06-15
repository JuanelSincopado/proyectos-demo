import useLogin from "../../hooks/login/useLogin";
import "./login.css";

const Login = (props) => {
    const { error, handleOnChange, submit } = useLogin(props);

    return (
        <div className="login__contenedor">
            <div className="login__formulario">
                <p className="login__p">Iniciar Sesión</p>
                <input
                    type="email"
                    className="login__input"
                    placeholder="Correo"
                    name="correo"
                    onChange={handleOnChange}
                />
                <input
                    type="password"
                    className="login__input"
                    placeholder="Contraseña"
                    name="password"
                    onChange={handleOnChange}
                />
                <div className="login__contenedorOlvideClave">
                    <button className="login__boton">
                        olvidé mi contraseña
                    </button>
                </div>
                <input
                    type="submit"
                    value="Iniciar Sesión"
                    className="login__submit"
                    onClick={submit}
                />

                {error && <p className="login__error">{error}</p>}

                <div className="login__ContenedorCrearCuenta">
                    <a
                        className="login__boton login__boton-crearCuenta"
                        href="/crear-cuenta"
                    >
                        Crear Cuenta
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Login;
