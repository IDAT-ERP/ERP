import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function VerCompra() {
  
  const [users, setUsers] = useState([]);

  //const { id } = useParams();

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8080/ModCompras/verComprasSeries");
    setUsers(result.data);
  };


  const deleteUser = async (id,emp) => {

    const pregunta=window.confirm(`¿Está seguro que desea eliminar el numero de serie de la OC ${emp} ?`);
    
    if (pregunta) {
      await axios.delete(`http://localhost:8080/ModCompras/compraSerie/${id}`);
    loadUsers();
    }else{
      
    }
    
  };


  return (
    <div className="container">
       <Link className="btn btn-outline-primary mx-2" to={"/registrarComprasSeries"}>
      Agregar
      </Link>

      <Link className="btn btn-outline-danger mx-2" to={"/OCCompra"}>
      Regresar
      </Link>

      <div className="py-4">
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">S.N</th>
              <th scope="col">N° OC</th>
              <th scope="col">N° Serie del Producto</th>
              <th scope="col">OPCIONES</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{user.detalle.compras.nombre}{/* */}</td>
                <td>{user.nombre}</td>
                <td>
                  <Link
                    className="btn btn-primary mx-2"
                    to={`/viewcompra/${user.id}`}
                  >
                    View
                  </Link>
                  <Link
                    className="btn btn-outline-primary mx-2"
                    to={`/editcompraserie/${user.id}`}
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => deleteUser(user.id,user.detalle.compras.nombre)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
              
            ))}
          </tbody>
        </table>
      </div>
     
      
    </div>
  );
}
