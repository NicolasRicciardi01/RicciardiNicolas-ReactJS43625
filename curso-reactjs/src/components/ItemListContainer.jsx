import React from "react";

const ItemListContainer = ({greeting}) => {
    return(
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="alert alert-success text-center m-1" role="alert">
                            {greeting}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemListContainer;