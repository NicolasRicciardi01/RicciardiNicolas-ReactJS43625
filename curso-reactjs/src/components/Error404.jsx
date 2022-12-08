import React from 'react'

export const Error404 = () => {
return (
<div className="container my-5">
    <div className="row">
        <div className="col-md-12">
            <div className="alert alert-danger mx-1" role="alert">
                <h1>Error 404</h1>
                <hr />
                <h3>La página que estás buscando no existe</h3>
            </div>
        </div>
    </div>
</div>
)
}

export default Error404;