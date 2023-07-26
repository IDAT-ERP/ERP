import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./layout/Navbar";
import Aside from "./layout/Aside";
import VerPersonal from "./users/VerEmpleados";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddEmpleado from "./users/AddEmpleado";
import EditEmpleado from "./users/EditEmpleado";
import ModConfig from './layout/ModuloConfig/layout/ArticleModConfig'
import AddUsuario from "./users/AddUsuario";



function App() {
  return (
    <div className="App">
    <Router>
      <Navbar />

      <div className="contenedor">
        <Aside/>
      
    
      <div className="contenedor-sub">
        <Routes>
          <Route exact path="/modConfig" element={<ModConfig/>} />
          <Route exact path="/verPersonal" element={<VerPersonal />} />
          <Route exact path="/edituser/:id" element={<EditEmpleado />} />
          
          <Route exact path="/registroEmpleado" element={<AddEmpleado/>}/>
          <Route exact path="/registroUsuario" element={<AddUsuario/>}/>
          
        </Routes>
        </div>
      </div>

    </Router>
  </div>
);
}

export default App;
