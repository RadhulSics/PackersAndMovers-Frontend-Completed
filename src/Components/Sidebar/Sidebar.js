import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Sidebar() {

  const navigate=useNavigate()

  useEffect(()=>{
    if(localStorage.getItem('admin')==null){
        navigate('/admin')
    }
},[])

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-white navbar-light shadow-sm py-3 py-lg-0 px-3 px-lg-0">
        <a href="index.html" className="navbar-brand ms-lg-5">
          <h1 className="m-0 text-uppercase text-dark">
            <i className="bi bi-shop fs-1 text-primary me-3"></i>Let's Go
          </h1>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto py-0 pr">
            <Link to="/admin-dashboard" className="nav-item nav-link ">
              Home
            </Link>
            <Link to="/admin-packers" className="nav-item nav-link">
              Customers
            </Link>
            <Link to="/admin-movers" className="nav-item nav-link">
              Movers
            </Link>
            <Link to="/admin-drivers" className="nav-item nav-link">
              Drivers
            </Link>
            <Link to="/admin-mover-req" className="nav-item nav-link">
              Mover Requests
            </Link>
           
            <Link to="/admin-view-complaints" className="nav-item nav-link">
              Complaints
            </Link>
            <Link to="/" className="nav-item nav-link" onClick={()=>{localStorage.clear()}}>
              Logout
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Sidebar;
