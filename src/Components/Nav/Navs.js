import React from "react";
import { Link } from "react-router-dom";

function Navs() {
  return (
    <div>
      <nav className=" navbar navbar-expand-lg bg-white navbar-light shadow-sm py-3 py-lg-0 px-3 px-lg-0">
        <a href="index.html" className="container navbar-brand ms-lg-5">
          <h1 className="m-0 text-uppercase text-dark">
            <i className="bi bi-shop fs-1 text-primary me-3"></i>Let's Go
          </h1>
        </a>
        {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
        </button> */}
        <button
          type="button"
          class="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div className="container collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto py-0">
            <Link to="/" className="nav-item nav-link">
              Home
            </Link>
            <Link to="/about" className="nav-item nav-link">
              About
            </Link>
            <Link to="/services" className="nav-item nav-link">
              Service
            </Link>
            <div className="nav-item dropdown">
              <Link
                href=""
                class="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Login
              </Link>
              <div className="dropdown-menu m-0">
                <Link to="/packers-login" className="dropdown-item">
                  User
                </Link>
                <Link to="/movers-login" className="dropdown-item">
                  Mover
                </Link>
                <Link to="/driver-login" className="dropdown-item">
                  Driver
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navs;
