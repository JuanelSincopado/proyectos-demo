import { useContext } from "react";
import { useAuth } from "reactfire";
import "firebase/auth";
import { useHistory } from "react-router-dom";
import AuthContext from "../../context/auth/AuthContext";

const Navbar = () => {
    const history = useHistory();

    const { usuarioAutenticado } = useContext(AuthContext);

    const firebase = useAuth();

    const cerrarSesion = () => {
        firebase.signOut();
        history.push("/");
    };

    return (
        <div className="navbar__contenedor">
            <p className="navbar__nombreUsuario">
                <i className="fas fa-user"></i>{" "}
                {usuarioAutenticado.displayName}
            </p>

            <button className="navbar__boton" onClick={cerrarSesion}>
                Cerrar Sesión <i className="fas fa-sign-out-alt"></i>
            </button>
        </div>
    );
};

export default Navbar;
