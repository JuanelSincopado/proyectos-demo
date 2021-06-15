import { useContext } from "react";
import { useFirestore, useFirestoreCollectionData } from "reactfire";
import AuthContext from "../../context/auth/AuthContext";

const useTraerProyecto = () => {
    const firestore = useFirestore();

    const { usuarioAutenticado } = useContext(AuthContext)

    const dataRef = firestore
        .collection("proyectos")
        .where(
            "creador",
            "==",
            usuarioAutenticado !== null ? usuarioAutenticado.displayName : null
        );

    const { status, data } = useFirestoreCollectionData(dataRef);

    return {
        status,
        data,
    };
};

export default useTraerProyecto;
