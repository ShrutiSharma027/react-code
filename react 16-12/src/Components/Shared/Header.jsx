import { NavLink } from "react-router-dom";

export const Header=()=>{
    return  <header>
    <div className="container-fluid overflow-hidden">
        <div className="row">
            <div className="col-md-5">
                <h1><NavLink className="navbar-brand" to="Easy_Cash.html">
                    <i className="fa-solid fa-building-columns text-primary" aria-hidden="true"></i> Easy Cash</NavLink>
                </h1>
            </div>
            <div className="col-md-5">
                <ul className="nav justify-content-end">
                    <li className="nav-item">
                        <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/about">About</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/contact">Contact</NavLink>
                    </li>
                </ul>
            </div>
            <div className="col-md-2">
                <div className="btn btn-primary btn-lg float-end">Get Started </div>

            </div>
        </div>
    </div>
</header>
}