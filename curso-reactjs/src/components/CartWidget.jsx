import React from "react";

const CartWidget = () => {
    return (
        <button type="button" className="btn btn-light position-relative bg-dark">
            <img src="images/cart.png" alt="Carrito" width="30" />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">1</span>
        </button>
    )
}

export default CartWidget;