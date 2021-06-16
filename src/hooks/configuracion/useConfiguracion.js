import { useContext } from "react";
import ProyectosContext from "../../context/proyectos/ProyectosContext";

const useConfiguracion = () => {

    const { proyectoAbierto, setProyectoAbierto } = useContext(ProyectosContext);

    const handleOnchange = e => {
        setProyectoAbierto({
            ...proyectoAbierto,
            [e.target.name]: e.target.value
        })
    }

    return {
        handleOnchange
    };
}
 
export default useConfiguracion;