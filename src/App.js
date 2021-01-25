import theme from "./theme/muiTheme";
import Inicio from "./components/pages/Inicio/Inicio";
import Nosotros from "./components/pages/Nosotros/Nosotros";
import Socios from "./components/pages/Socios/Socios";
import Servicios from "./components/pages/Servicios/Servicios";
import Contacto from "./components/pages/Contacto/Contacto";
import Login from "./components/pages/Login/Login";
import Registro from "./components/pages/Registro/Registro";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import NavBar from "./components/common/NavBar/NavBar";
import Footer from "./components/common/Footer/Footer";
import "./App.css";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="page-container">
        <div className="content-wrap">
          <Router>
            <NavBar />
            <Switch>
              <Route exact path="/" component={Inicio} />
              <Route path="/nosotros" component={Nosotros} />
              <Route path="/socios" component={Socios} />
              <Route path="/servicios" component={Servicios} />
              <Route path="/contacto" component={Contacto} />
              <Route path="/login" component={Login} />
              <Route path="/registro" component={Registro} />
            </Switch>
          </Router>
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
