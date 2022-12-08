import React from "react";
import { Link } from "react-router-dom";

const Item = ({producto}) => {
    return (
        <div className="col-md-10">
            <Link to={"/item/" + producto.id} className="text-dark text-decoration-none">
                <div className="card text-bg-secondary text-center mb-3">
                    <img src={producto.img} className="card-img-top" alt={producto.nombre} />
                    <hr />
                    <div className="card-body">
                        <p className="card-text">{producto.nombre}</p>
                        <p className="card-text">${producto.precio}</p>
                    </div>
                </div>
            </Link>
        </div>
        
    )
}

export default Item;