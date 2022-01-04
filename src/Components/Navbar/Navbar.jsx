import React from "react";
import "./navbar.css"
// import {Link} from "react-router-dom"
// import Footer from "../Footer/Footer";
// import Checkout from "../Checkout/Checkout";
import { Link, useNavigate } from "react-router-dom";

export default function NewPath() {
  const navigate = useNavigate();
  const handelUseNavigate = () => {
    localStorage.getItem("uerLogin")
      ? navigate("/")
      : navigate("/OurCourse ");
  };
  return <Navbar handelUseNavigate={handelUseNavigate} />;
}
function Navbar(props) {
    let isLoggedIn =
    localStorage.getItem("uerLogin") ;
    const logOut = () => {
    localStorage.removeItem("uerLogin");
    localStorage.removeItem("TitleCourse");
    localStorage.removeItem("timeOfCourse"); 
    props.handelUseNavigate();
    console.log("log")


};

    return(
            <>
            
    <nav className="navbar navbar-expand-lg navbar-light">
    <div className="container-fluid">
            <Link to="/" className="navbar-brand">EDU</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
    </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                {!isLoggedIn ? (<>
            <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/" >Home</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/programs">Programs & Courses </Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/Aboutus">About us</Link>
            </li>
            <Link to="/login"><button className="loginButton">Login</button></Link></> ) : (
            <div>
            <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/" >Home</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/programs">Programs & Courses </Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/Aboutus">About us</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/Profile">Profile</Link>
            </li>
            <Link  className="loginButton" to="/" onClick={logOut}>Logout</Link>
            </div>
            )}
            </ul>
        </div>
        </div>
        </nav>
        </>
    )
}

