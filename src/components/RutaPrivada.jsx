import { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import AuthContext from "../context/auth/AuthContext";
import ProyectosContext from "../context/proyectos/ProyectosContext";

const RutaPrivada = ({ component: Component, tipo, ...props }) => {
    const { usuarioAutenticado } = useContext(AuthContext);
    const { proyectoAbierto } = useContext(ProyectosContext)

    if (tipo === 'tareas') {
        return(
            <Route
                {...props}
                render={(props) =>
                    !usuarioAutenticado || !proyectoAbierto ? (
                        <Redirect to="/" />
                    ) : (
                        <Component {...props} />
                    )
                }
            />
        )
    }

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
