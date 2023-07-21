import React from "react";
import '../estilos/imagen.css';
import '../estilos/contenedor.css'
import imagenEmpleados from '../imagenes/empleados.png'

export default function ArticleModConfig() {
    return (

        <article>
            <div className="card">

                <div className="card conten" style={{ maxWidth: "300px"}}>
                    <div className="image-container">
                        <img src={imagenEmpleados} className="img-modconfig"
                        alt="Empleados"></img>
                    </div>
                   
                        <div class="card-body">
                            <h5 className="card-title">Registrar Empleados</h5>
                        </div>
                </div>

            
                <div className="card conten" style={{ maxWidth: "300px"}}>
                    <div className="image-container">
                        <img src={imagenEmpleados} className="img-modconfig"
                        alt="Empleados"></img>
                    </div>
                   
                        <div class="card-body">
                            <h5 className="card-title">Registrar Empleados</h5>
                        </div>
                </div>
            

            </div>

        </article>

    );
}


