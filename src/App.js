import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./layout/Navbar";
import Aside from "./layout/Aside";
import VerPersonal from "./users/VerEmpleados";
import VerProveedor from "./users/VerProveedor";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddEmpleado from "./users/AddEmpleado";

import EditEmpleado from "./users/EditEmpleado";
import EditProveedor from "./users/EditProveedor"

import ModConfig from './layout/ModuloConfig/layout/ArticleModConfig'

import AddProveedor from './users/AddProveedor';
import AddClientes from './users/AddClientes';

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

          <Route exact path="/registroProveedor" element={<AddProveedor/>}/>
          <Route exact path="/editProveedor/:id" element={<EditProveedor />} />
          <Route exact path="/verProveedor" element={<VerProveedor />} />
          <Route exact path="/registroClientes" element={<AddClientes/>}/>
        </Routes>
        </div>
      </div>

    </Router>
  </div>
);
}

export default App;
