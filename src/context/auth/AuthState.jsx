import { useState } from "react";
import AuthContext from "./AuthContext";

const AuthState = ({children}) => {

    const [usuarioAutenticado, setUsuarioAutenticado] = useState(null);

    return ( 
        <AuthContext.Provider value={{
            usuarioAutenticado,
            setUsuarioAutenticado
        }} >
            {children}
        </AuthContext.Provider>
     );
}
 
export default AuthState;