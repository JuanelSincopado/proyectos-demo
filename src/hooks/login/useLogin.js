import { useState } from "react";
import "firebase/auth";
import { useAuth } from "reactfire";

const useLogin = (props) => {
    const [user, setUser] = useState({
        correo: "",
        password: "",
    });
    const [error, setError] = useState("");

    const firebase = useAuth();

    const handleOnChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        });
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
            props.history.push("/proyectos");
        } catch (error) {
            console.log(error.message);
            setError(error.message);
            setTimeout(() => {
                setError("");
            }, 2000);
        }
    };

    return {
        error,
        handleOnChange,
        submit,
    };
};

export default useLogin;
