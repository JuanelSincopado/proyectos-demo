import { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import AuthContext from "../context/auth/AuthContext";

const RutaPublica = ({ component: Component, ...props }) => {
    const { usuarioAutenticado } = useContext(AuthContext);

    return (
        <Route
            {...props}
            render={(props) =>
                usuarioAutenticado ? (
                    <Redirect to="/proyectos" />
                ) : (
                    <Component {...props} />
                )
            }
        />
    );
};

export default RutaPublica;
