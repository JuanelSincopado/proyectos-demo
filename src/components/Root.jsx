import useAutenticacion from "../hooks/useAutenticacion";
import Spinner from "./Spinner";

const Root = ({ children }) => {
    const { ready } = useAutenticacion();

    if (!ready) {
        return (
            <Spinner />
        );
    }

    return children;
};

export default Root;
