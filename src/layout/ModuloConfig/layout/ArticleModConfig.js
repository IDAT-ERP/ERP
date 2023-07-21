import React from "react";
import '../estilos/imagen.css';
import '../estilos/contenedor.css'
import imagenEmpleados from '../imagenes/empleados.png'
import { Link } from "react-router-dom";

export default function ArticleModConfig() {
    return (

        <article>
            <div className="card componente-container">

                <div className="container conten">

                    <div className="card ">
                        <Link className="btn card-modConf">


                            <div className="image-container">
                                <img src={imagenEmpleados} className="img-modconfig"
                                    alt="Empleados"></img>
                            </div>

                            <div class="card-body">
                                <span className="texto">Registrar Empleados</span>
                            </div>

                        </Link>
                    </div>




                    <div className="card ">
                        <Link className="btn card-modConf">


                            <div className="image-container">
                                <img src={imagenEmpleados} className="img-modconfig"
                                    alt="Empleados"></img>
                            </div>

                            <div class="card-body">
                                <span className="texto">Asignar Usuario</span>
                            </div>

                        </Link>
                    </div>


                </div>
            </div>

        </article>

    );
}


