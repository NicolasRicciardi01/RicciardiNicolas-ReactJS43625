import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import jsonPrductos from "./json/productos.json"
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {

    const [producto, setProducto] = useState([])
    const {id} = useParams();

    useEffect(() => {
        const promesa = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(jsonPrductos.find(producto => producto.id === parseInt(id)))
            }, 500);
        })

        promesa.then((respuesta) => {
            setProducto(respuesta)
        });
    }, [id]);

    return (
        <div className="container bg-light border mt-5">
            <ItemDetail producto={producto}/>
        </div>
    );
};

export default ItemDetailContainer;