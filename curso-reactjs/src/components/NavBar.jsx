import React from "react";
import { Link, NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return(
        <header>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand mx-2" to={"/"} ><img src="images/ss.png" alt="" width="88" /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to={"/"}>Inicio</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" to={"/categoria/servicio"}>Servicios</Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle active" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Productos
                                    </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <NavLink className="dropdown-item" to={"/categoria/zapatillas"}>Zapatillas</NavLink>
                                    </li>
                                    <li>
                                        <NavLink className="dropdown-item" to={"/categoria/limpieza"}>Productos de limpieza</NavLink>
                                    </li>
                                    <li><hr className="dropdown-divider"/></li>
                                    <li>
                                        <NavLink className="dropdown-item" href="#">Otros</NavLink>
                                    </li>
                                </ul>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link disabled">"Si las cuidas, duran para siempre"</a>
                                </li>
                            </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="" aria-label="Search"/>
                            <button className="btn btn-outline-success" type="submit">Buscar</button>
                        </form>
                        <div className="col-md-6 d-flex align-items-center justify-content-end">
                            <CartWidget />
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
};

export default NavBar;