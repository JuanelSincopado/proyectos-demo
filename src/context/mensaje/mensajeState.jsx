import { useState } from "react";
import MensajeContext from "./mensajeContext";

const MensajeState = ({children}) => {

    const [mensajeState, setMensajeState] = useState({
        mensaje: '',
        tipo: 'exito'
    })

    return ( 
        <MensajeContext.Provider value={{
            mensajeState,
            setMensajeState
        }}>
            {children}
        </MensajeContext.Provider>
     );
}
 
export default MensajeState;