import "firebase/auth";
import { useState } from "react";
import { useAuth } from "reactfire";

const useRegistrar = (props) => {
    const [error, setError] = useState("");
    const [user, setUser] = useState({
        correo: "",
        name: "",
        password: "",
        repeatPassword: "",
    });

    const handleOnChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        });
    };

    const submit = () => {
        if (user.correo.trim() === "" || user.password.trim() === "") {
            setError("Llene todos los campos");
            setTimeout(() => {
                setError("");
            }, 2000);
            return;
        } else if (user.repeatPassword.trim() !== user.password.trim()) {
            setError("No coinciden las claves");
            setTimeout(() => {
                setError("");
            }, 2000);
            return;
        }

        registrarUsuario();
    };

    const firebase = useAuth();

    const registrarUsuario = async () => {
        try {
            const resultado = await firebase.createUserWithEmailAndPassword(
                user.correo,
                user.password
            );

            await resultado.user.updateProfile({
                displayName: user.name,
            });

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

export default useRegistrar;
