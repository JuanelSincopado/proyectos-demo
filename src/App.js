import { BrowserRouter as Router, Switch } from "react-router-dom";
import CrearCuenta from "./components/login/Crear-cuenta";
import Proyectos from "./components/proyectos/Proyectos";
import Tareas from "./components/tareas/Tareas";
import { FirebaseAppProvider } from "reactfire";
import firebaseConfig from "./firebaseConfig";
import RutaPrivada from "./components/RutaPrivada";
import Root from "./components/Root";
import RutaPublica from "./components/RutaPublica";
import MensajeState from "./context/mensaje/mensajeState";
import ProyectosState from "./context/proyectos/ProyectosState";
import TareasState from "./context/tareas/TareasState";
import AuthState from "./context/auth/AuthState";
import LoginBody from "./components/login/LoginBody";

function App() {
    return (
        <Router>
            <FirebaseAppProvider firebaseConfig={firebaseConfig}>
                <AuthState>
                    <Root>
                        <MensajeState>
                            <ProyectosState>
                                <TareasState>
                                    <Switch>
                                        <RutaPublica
                                            exact
                                            path="/"
                                            component={LoginBody}
                                        />
                                        <RutaPublica
                                            exact
                                            path="/crear-cuenta"
                                            component={CrearCuenta}
                                        />
                                        <RutaPrivada
                                            exact
                                            path="/proyectos"
                                            component={Proyectos}
                                        />
                                        <RutaPrivada
                                            exact
                                            path="/tareas"
                                            component={Tareas}
                                            tipo='tareas'
                                        />
                                    </Switch>
                                </TareasState>
                            </ProyectosState>
                        </MensajeState>
                    </Root>
                </AuthState>
            </FirebaseAppProvider>
        </Router>
    );
}

export default App;
