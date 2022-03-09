import React, { useState } from "react";
import { NavLink } from "react-router-dom";
const Navbar=()=>{

    const[show,setShow]=useState(false);
  return(
    <>
    <section className="navbar-bg">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container">
    <a className="navbar-brand" href="#">VishalPay</a>
    <button className="navbar-toggler" onClick={()=>setShow(!show)} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className={`collapse navbar-collapse ${show?"show":" "}`}>
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/Service">Services</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/About">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/Contact">Contact</NavLink>
        </li>
      </ul>
      <form className="d-flex">
        <button className="btn  btn-style btn-style-border" type="submit">Login</button>
        <button className="btn btn-style btn-style-border" type="submit">Sign Up</button>
      </form>
    </div>
  </div>
</nav>
</section>
    </>
  )
}
export default Navbar;