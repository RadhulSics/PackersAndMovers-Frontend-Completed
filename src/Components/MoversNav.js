import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosInstance from "../BaseUrl";

function MoversNav() {

  const id = localStorage.getItem("moversId");
  const [value, setValue] = useState([]);

  useEffect(() => {
    console.log(id);
    axiosInstance
      .post(`/showBookingReqs/${id}`)
      .then((res) => {
        console.log(res);
        setValue(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-white navbar-light shadow-sm py-3 py-lg-0 px-3 px-lg-0">
        <a href="" className="navbar-brand ms-lg-5">
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
            <Link to="/movers-home" className="nav-item nav-link ">
              Home
            </Link>
            <Link to="/movers-view-rates" className="nav-item nav-link ">
              Rates
            </Link>
            <div className="nav-item dropdown">
              <Link
                href=""
                class="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Orders{value.length?<sup className="order_notification" >({value.length})</sup>:''}
              </Link>
              <div className="dropdown-menu m-0">
                <Link to="/movers-order-req" className="dropdown-item">
                  New Orders
                </Link>
                <Link to="/movers-view-orders" className="dropdown-item">
                  View Orders
                </Link>
              </div>
            </div>
            <div className="nav-item dropdown">
              <Link
                href=""
                class="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Drivers
              </Link>
              <div className="dropdown-menu m-0">
                <Link to="/mover_add_driver" className="dropdown-item">
                  Add Drivers
                </Link>
                <Link to="/mover_view_drivers" className="dropdown-item">
                  View Drivers
                </Link>
              </div>
            </div>
            
            <Link to="/movers-view-complaints" className="nav-item nav-link ">
              Complaints
            </Link>
            <Link to="/movers-profile" className="nav-item nav-link ">
              Profile
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default MoversNav;
