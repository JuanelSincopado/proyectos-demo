import { useContext, useState } from "react";
import "firebase/auth";
import { useAuth } from "reactfire";
import { useHistory } from "react-router-dom";
import MensajeContext from "../../context/mensaje/mensajeContext";

const useLogin = () => {
    const history = useHistory();

    const { setMensajeState } = useContext(MensajeContext);

    const [user, setUser] = useState({
        correo: "",
        password: "",
    });
    const [correoRecuperar, setCorreoRecuperar] = useState("");
    const [abrirVentanaEmergente, setAbrirVentanaEmergente] = useState(false);
    const [error, setError] = useState("");

    const firebase = useAuth();

    const handleOnChange = (campo, value) => {
        switch (campo) {
            case "correo":
                setUser({
                    ...user,
                    correo: value,
                });
                break;
            case "password":
                setUser({
                    ...user,
                    password: value,
                });
                break;
            case "correoRecuperacion":
                setCorreoRecuperar(value);
                break;
            default:
                break;
        }
    };

    const submit = () => {
        if (user.correo.trim() === "" || user.password.trim() === "") {
            setError("Los campos son bligatorios");
            setTimeout(() => {
                setError("");
            }, 2000);
            return;
        }

        iniciarSesion();
    };

    const iniciarSesion = async () => {
        try {
            await firebase.signInWithEmailAndPassword(
                user.correo,
                user.password
            );
            history.push("/proyectos");
        } catch (error) {
            console.log(error.message);
            setError(error.message);
            setTimeout(() => {
                setError("");
            }, 2000);
        }
    };

    const recuperarPassword = async () => {
        if (correoRecuperar === "") {
            setMensajeState({
                mensaje: "El nombre es obligatorio",
                tipo: "error",
            });
            setTimeout(() => {
                setMensajeState({
                    mensaje: "",
                });
            }, 2000);
            return;
        }

        try {
            await firebase.sendPasswordResetEmail(correoRecuperar);
            setMensajeState({
                mensaje: "Se envió un mensaje a tu correo",
                tipo: "exito",
            });
            setTimeout(() => {
                setMensajeState({
                    mensaje: "",
                });
            }, 2000);
            setCorreoRecuperar("");
            setAbrirVentanaEmergente(false);
        } catch (error) {
            console.log(error.message);
            setMensajeState({
                mensaje: "error al enviar correo",
                tipo: "error",
            });
            setTimeout(() => {
                setMensajeState({
                    mensaje: "",
                });
            }, 2000);
        }
    };

    return {
        abrirVentanaEmergente,
        error,
        handleOnChange,
        submit,
        recuperarPassword,
        setAbrirVentanaEmergente,
    };
};

export default useLogin;
