import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./layout/Navbar";
import Aside from "./layout/Aside";
import VerPersonal from "./users/VerEmpleados";
import VerProveedor from "./users/VerProveedor";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './Login/login';


import ProductosCompra from "./layout/ModuloCompras/layout/Productos/VistaProductos"
import VerCategoria from "./layout/ModuloCompras/layout/Productos/Categoria/VerCategoria"
import AddCategoria from "./layout/ModuloCompras/layout/Productos/Categoria/AddCategoria"
import EditarCategoria from "./layout/ModuloCompras/layout/Productos/Categoria/EditCategoria"
import VerMarca from "./layout/ModuloCompras/layout/Productos/Marca/VerMarca"
import RegistrarMarca from "./layout/ModuloCompras/layout/Productos/Marca/AddMarca"
import EditarMarca from "./layout/ModuloCompras/layout/Productos/Marca/EditMarca"
import VerModelo from "./layout/ModuloCompras/layout/Productos/Modelo/VerModelo"
import RegistrarModelo from "./layout/ModuloCompras/layout/Productos/Modelo/AddModelo"
import EditarModelo from "./layout/ModuloCompras/layout/Productos/Modelo/EditModelo"

import OCCompra from "./layout/ModuloCompras/layout/OrdenCompra/VistaOC"
import VerCompra from "./layout/ModuloCompras/layout/OrdenCompra/ComprasOC/VerOC"
import RegistrarCompra from "./layout/ModuloCompras/layout/OrdenCompra/ComprasOC/AddOC"
import EditarCompra from "./layout/ModuloCompras/layout/OrdenCompra/ComprasOC/EditOC"



import AddEmpleado from "./users/AddEmpleado";



import EditEmpleado from "./users/EditEmpleado";
import EditProveedor from "./users/EditProveedor"

import ModConfig from './layout/ModuloConfig/layout/ArticleModConfig'
import ModCompras from "./layout/ModuloCompras/layout/ArticleModCompras"



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
          <Route exact path="/modCompras" element={<ModCompras/>} />

          <Route exact path="/ProductosCompra" element={<ProductosCompra/>} />
          <Route exact path="/verCategoria" element={<VerCategoria/>} />
          <Route exact path="/registrarCategoria" element={<AddCategoria/>} />
          <Route exact path="/editcategoria/:id" element={<EditarCategoria/>} />
          
          <Route exact path="/verMarca" element={<VerMarca/>} />
          <Route exact path="/registrarMarca" element={<RegistrarMarca/>} />
          <Route exact path="/editmarca/:id" element={<EditarMarca/>} />

          <Route exact path="/verModelo" element={<VerModelo/>} />
          <Route exact path="/registrarModelo" element={<RegistrarModelo/>} />
          <Route exact path="/editmodelo/:id" element={<EditarModelo/>} />



          <Route exact path="/OCCompra" element={<OCCompra/>} />
          <Route exact path="/verCompra" element={<VerCompra/>} />
          <Route exact path="/registrarCompra" element={<RegistrarCompra/>} />
          <Route exact path="/editcompra/:id" element={<EditarCompra/>} />
          







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
