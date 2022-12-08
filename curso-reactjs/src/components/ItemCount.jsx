import React, {useState} from "react";

const ItemCount = ({stock}) => {

    const [count, setCount] = useState(1);

    const lowCount = () => {
        if(count > 1) {
            setCount(count - 1);
        }
    }

    const incCount = () => {
        if(count < stock) {
            setCount(count + 1)
        }
    }

    const Add = () => {
        if(stock > 0) {
            alert(count + " productos agregados al carrito")
        }
    }

    return (
        <div className="container">
            <div className="btn-group mx-2" role="group" aria-label="Basic outlined example">
                <button type="button" className="btn btn-outline-primary" onClick={lowCount}>-</button>
                <button type="button" className="btn">{count}</button>
                <button type="button" className="btn btn-outline-primary" onClick={incCount}>+</button>
            </div>
            <button type="button" className="btn btn-success" onClick={Add}>Agregar al carrito</button>
        </div>
    )
};

export default ItemCount;