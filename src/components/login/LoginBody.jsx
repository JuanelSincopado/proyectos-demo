import useLogin from "../../hooks/login/useLogin";
import Login from "./Login";
import RecuperarPassword from "./RecuperarPassword";
import Mensaje from "../Mensaje";

const LoginBody = () => {
    const {
        error,
        abrirVentanaEmergente,
        recuperarPassword,
        handleOnChange,
        submit,
        setAbrirVentanaEmergente,
    } = useLogin();

    return (
        <div className="relavito">
            <Login
                error={error}
                handleOnChange={handleOnChange}
                submit={submit}
                setAbrirVentanaEmergente={setAbrirVentanaEmergente}
            />

            <RecuperarPassword
                abrirVentanaEmergente={abrirVentanaEmergente}
                handleOnChange={handleOnChange}
                recuperarPassword={recuperarPassword}
                setAbrirVentanaEmergente={setAbrirVentanaEmergente}
            />

            <Mensaje />
        </div>
    );
};

export default LoginBody;
