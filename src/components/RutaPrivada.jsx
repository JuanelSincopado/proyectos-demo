import { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import AuthContext from "../context/auth/AuthContext";

const RutaPrivada = ({ component: Component, ...props }) => {
    const { usuarioAutenticado } = useContext(AuthContext);

    return (
        <Route
            {...props}
            render={(props) =>
                !usuarioAutenticado ? (
                    <Redirect to="/" />
                ) : (
                    <Component {...props} />
                )
            }
        />
    );
};

export default RutaPrivada;
