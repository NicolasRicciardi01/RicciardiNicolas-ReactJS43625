import React from 'react';
import Item from "./Item";

const ItemList = ({productos}) => {
    return (
        <div className="row">
        {
            productos.map(producto =>
            <div className="col-md-4">
                <Item key={producto.id} producto={producto} />
            </div>
            )
        } 
        </div>
    )
}

export default ItemList;