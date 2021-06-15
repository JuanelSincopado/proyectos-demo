import "firebase/auth";
import { useContext, useEffect, useState } from "react";
import { useAuth } from "reactfire";
import AuthContext from "../context/auth/AuthContext";

const useAutenticacion = () => {
    const [ready, setReady] = useState(false);

    const { setUsuarioAutenticado } = useContext(AuthContext)

    const firebase = useAuth();

    useEffect(() => {
        const sesion = firebase.onAuthStateChanged((usuario) => {
            if (usuario) {
                setUsuarioAutenticado(usuario);
                setReady(true);
            } else {
                setUsuarioAutenticado(null);
                setReady(true);
            }
        });

        return () => sesion();
    });

    return {
        ready,
    };
};

export default useAutenticacion;
