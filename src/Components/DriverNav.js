import React from "react";
import { Link } from "react-router-dom";

function DriverNav() {
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
            <Link to="/driver_home" className="nav-item nav-link">
              Home
            </Link>
            <Link to="/driver_about" className="nav-item nav-link">
              About
            </Link>
            <Link to="/driver_services" className="nav-item nav-link">
              Service
            </Link>
            <div className="nav-item dropdown">
              <Link
                href=""
                class="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Orders
              </Link>
              <div className="dropdown-menu m-0">
                <Link to="/driver-order-req" className="dropdown-item">
                  New Orders
                </Link>
                <Link to="/driver-view-orders" className="dropdown-item">
                  View Orders
                </Link>
              </div>
            </div>
            <Link to="/" className="nav-item nav-link">
              Logout
            </Link>
            {/* <Link to='/movers-login' className="nav-item nav-link " style={{marginRight:'5px'}}>Movers</Link> */}
            {/* <div className="nav-item dropdown">
                    <a href="" class="nav-link dropdown-toggle" data-bs-t oggle="dropdown">Pages</a>
                    <div className="dropdown-menu m-0">
                        <a href="price.html" className="dropdown-item">Pricing Plan</a>
                        <a href="team.html" className="dropdown-item">The Team</a>
                        <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                        <a href="blog.html" className="dropdown-item">Blog Grid</a>
                        <a href="detail.html" className="dropdown-item">Blog Detail</a>
                    </div>
                </div> */}
            {/* <Link to='/contact' className="nav-item nav-link nav-contact bg-primary text-white px-5 ms-lg-5">Contact <i className="bi bi-arrow-right"></i></Link> */}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default DriverNav;
