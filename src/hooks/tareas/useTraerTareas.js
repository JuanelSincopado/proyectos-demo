import { useContext } from "react";
import { useFirestore, useFirestoreCollectionData } from "reactfire";
import ProyectosContext from "../../context/proyectos/ProyectosContext";

const useTraerTareas = () => {
    const firestore = useFirestore();

    const { proyectoAbierto } = useContext(ProyectosContext);

    const dataRef = firestore.collection('proyectos').doc(proyectoAbierto.NO_ID_FIELD).collection('tareas')

    const { status, data } = useFirestoreCollectionData(dataRef)

    return {
        status,
        data
    };
};

export default useTraerTareas;
