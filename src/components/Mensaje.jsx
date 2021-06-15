import { useContext } from "react";
import MensajeContext from "../context/mensaje/mensajeContext";

const Mensaje = () => {
    const { mensajeState } = useContext(MensajeContext);

    return (
        <div
            className={
                !mensajeState.mensaje
                    ? "mensaje__contenedor-noMensaje"
                    : "mensaje__contenedor"
            }
        >
            <p>{mensajeState.mensaje}</p>{" "}
            {mensajeState.tipo === "exito" ? (
                <i className="fas fa-check mensaje__contenedor-exito"></i>
            ) : (
                <i className="fas fa-times mensaje__contenedor-error"></i>
            )}
        </div>
    );
};

export default Mensaje;
