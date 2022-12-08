import React from "react";
import ItemCount from "./ItemCount";

const ItemDetail = ({producto}) => {
    return (
        <div className="row">
            <div className="col-md-4">
                <img src={producto.img} alt={producto.nombre} className="img-fluid" />
            </div>
            <div className="col-md-4">
                <div className="d-grid gap-3 mx-2">
                    <h1>{producto.nombre}</h1>
                    <p>{producto.descripcion}</p>
                    <p><b>${producto.precio}</b></p>
                    <ItemCount stock={producto.stock}/>
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;