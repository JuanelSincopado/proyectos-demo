import Mensaje from "../Mensaje";
import CrearProyectos from "./CrearProyectos";
import ListaProyectos from "./ListaProyectos";
import Navbar from "./Navbar";
import "./proyectos.css";

const Proyectos = () => {

    return (
        <div className="relavito">
            <Navbar />

            <CrearProyectos />

            <ListaProyectos />

            <Mensaje />
        </div>
    );
};

export default Proyectos;
