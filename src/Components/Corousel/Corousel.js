import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosInstance from "../../BaseUrl";

function Corousel({ status }) {
  const [value, setvalue] = useState({});
  const [user, setuser] = useState({});
  const [driver, setDriver] = useState({});

  const id = localStorage.getItem("moversId");
  const uid = localStorage.getItem("packerId");
  const did = localStorage.getItem("driverId");

  useEffect(() => {
    // const storedUser = localStorage.getItem("users");
    console.log(id);

    axiosInstance.post(`/viewMovrById/${id}`).then((res) => {
      console.log(res);
      setvalue(res.data.data);
    });

    axiosInstance.post(`/viewPackerById/${uid}`).then((res) => {
      console.log(res);
      setuser(res.data.data);
    });

    axiosInstance.post(`/viewDriverById/${did}`).then((res) => {
      console.log(res);
      setDriver(res.data.data);
    });
  }, []);
  
  return (
    <div>
      <div className="container-fluid bg-primary py-5 mb-5 hero-header">
        <div className="container py-5">
          <div className="row justify-content-start">
            <div className="col-lg-8 text-center text-lg-start">
              {status == "mover" ? (
                <h1
                  className="display-1 text-uppercase  mb-lg-4"
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    fontSize: "50px",
                  }}
                >
                  <span style={{ color: "#0d6efd" }}> </span>
                  {value.name}
                </h1>
              ) : status == "user" ? (
                <h1
                  className="display-1 text-uppercase  mb-lg-4"
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    fontSize: "50px",
                  }}
                >
                  <span ><small>Welcome</small> </span>
                  {user.name}
                </h1>
              ) :status == "driver" ? (
                <h1
                  className="display-1 text-uppercase  mb-lg-4"
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    fontSize: "50px",
                  }}
                >
                  <span ><small>Welcome</small> </span>
                  {driver.name}
                </h1>
              ): (
                <h1
                  className="display-1 text-uppercase  mb-lg-4"
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    fontSize: "50px",
                  }}
                >
                  <span style={{ color: "#0d6efd" }}>Move Smart,</span> Move
                  Swift: Your Logistics Revolution Starts Here!
                </h1>
              )}

              <h1 className="text-uppercase text-white mb-lg-4">
                Your Reliable Moving Solutions!
              </h1>
              <p className="fs-4 text-white mb-lg-4">
                Welcome to Let's Go, your go-to destination for streamlined
                goods movement. We connect businesses with transporters,
                creating a transparent platform for efficient transactions. With
                user-friendly features, we simplify the process, allowing
                businesses to post loads and receive competitive bids. Whether
                you're a business owner or a transporter, join us in
                revolutionizing logistics across India.
              </p>
              {/* <div className="d-flex align-items-center justify-content-center justify-content-lg-start pt-5">
                <Link
                  to="/about"
                  className="btn btn-outline-light border-2 py-md-3 px-md-5 me-5"
                >
                  Read More
                </Link>
                
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Corousel;
