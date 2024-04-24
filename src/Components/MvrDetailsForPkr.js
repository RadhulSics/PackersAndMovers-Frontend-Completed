import React, { useEffect, useState } from "react";
import PackersNav from "./PackersNav/PackersNav";
import { useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../BaseUrl";
import star from "./Assets/star.json";
import Lottie from "lottie-react";

function MvrDetailsForPkr() {
  const id = useParams();
  const navigate = useNavigate();

  const [value, setValue] = useState({ reviews: [] });
  const [rates, setRates] = useState([]);

  useEffect(() => {
    axiosInstance.post(`/viewMovrById/${id.id}`).then((responce) => {
      console.log(responce);
      setValue(responce.data.data);
    });

    axiosInstance.post(`/viewRateByMover/${id.id}`).then((responce) => {
      console.log(responce);
      setRates(responce.data.data);
    });
  }, []);

  return (
    <div>
      <PackersNav />
      <div class="container-fluid py-5">
        <div class="container">
          <div class="row g-5">
            <div class="col-lg-6">
              <div class="bg-light text-center">
                <div class="text-center bg-dark p-4 mb-2 text-white">
                  <h2 class="text-uppercase">{value.name}</h2>
                  <h6 class="text-uppercase ">The Best Choice</h6>
                </div>
                <div class="text-center p-4">
                  <div class="d-flex align-items-center justify-content-between mb-1">
                    <span>Company Name </span>
                    <h6 class="bi bi-check2 fs-4 text-primary">{value.name}</h6>
                  </div>
                  <div class="d-flex align-items-center justify-content-between mb-1">
                    <span>Registration</span>
                    <h6 class="bi bi-check2 fs-4 text-primary">
                      {value.regno}
                    </h6>
                  </div>
                  <div class="d-flex align-items-center justify-content-between mb-1">
                    <span>E-mail </span>
                    <h6 class="bi bi-check2 fs-4 text-primary">
                      {value.email}
                    </h6>
                  </div>
                  <div class="d-flex align-items-center justify-content-between mb-1">
                    <span>Contact </span>
                    <h6 class="bi bi-x fs-4 text-primary">{value.contact}</h6>
                  </div>
                  <div class="d-flex align-items-center justify-content-between mb-1">
                    <span>City </span>
                    <h6 class="bi bi-x fs-4 text-primary">{value.city}</h6>
                  </div>
                  <div class="d-flex align-items-center justify-content-between mb-1">
                    <span>District </span>
                    <h6 class="bi bi-x fs-4 text-primary">{value.district}</h6>
                  </div>
                  <div class="d-flex align-items-center justify-content-between mb-1">
                    <span>Rating </span>
                    <h6 class="bi bi-x fs-4 text-primary">
                      {value.rating ? value.rating.toFixed(1) + "/5" : "N/A"}
                    </h6>
                  </div>
                  <div class="d-flex align-items-center justify-content-between mb-1">
                    <span>1rk Rate </span>
                    <h6 class="bi bi-x fs-4 text-primary">₹ 2000</h6>
                  </div>
                  <div class="d-flex align-items-center justify-content-between mb-1">
                    <span>2bhk Rate </span>
                    <h6 class="bi bi-x fs-4 text-primary">₹ 3000</h6>
                  </div>
                  <div class="d-flex align-items-center justify-content-between mb-1">
                    <span>3bhk Rate </span>
                    <h6 class="bi bi-x fs-4 text-primary">₹ 4000</h6>
                  </div>
                  <div class="d-flex align-items-center justify-content-between mb-1">
                    <span>3bhk+ Rate </span>
                    <h6 class="bi bi-x fs-4 text-primary">₹ 5000</h6>
                  </div>
                  {rates.length
                    ? rates.map((a) => {
                        return (
                          <>
                            <div class="d-flex align-items-center justify-content-between mb-1">
                              <span>Minimum Charge </span>
                              <h6 class="bi bi-x fs-4 text-primary">
                                ₹ {a.minRate}
                              </h6>
                            </div>
                            <div class="d-flex align-items-center justify-content-between mb-1">
                              <span>Rate per Kg </span>
                              <h6 class="bi bi-x fs-4 text-primary">
                                ₹ {a.ratePerKg}
                              </h6>
                            </div>
                            <div class="d-flex align-items-center justify-content-between mb-1">
                              <span>Rate per Km </span>
                              <h6 class="bi bi-x fs-4 text-primary">
                                ₹ {a.ratePerKm}
                              </h6>
                            </div>
                          </>
                        );
                      })
                    : ""}

                  <div style={{ marginTop: "15px" }}>
                    <button
                      class="btn btn-primary"
                      onClick={() => {
                        navigate(`/movers-book-packer/${value._id}`);
                      }}
                    >
                      Book now
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="bg-light text-center pt-5">
                <h2 class="text-uppercase">Reviews</h2>
                <h6 class="text-body mb-5">By customers</h6>
                <div class="text-center bg-dark p-4 mb-2 text-white">
                  <div>
                    <div class="mb-5">
                      {/* <h3 class="text-uppercase border-start border-5 border-primary ps-3 mb-4">3 Comments</h3> */}
                      <div class="d-flex mb-4">
                        {/* <img src="img/user.jpg" class="img-fluid" style="width: 45px; height: 45px;"> */}
                        <div class="ps-3" style={{ width: "440px" }}>
                          {/* <h6><a href="">John Doe</a> <small><i>01 Jan 2045</i></small></h6> */}

                          {value.reviews.map((a) => {
                            return (
                              <>
                                <i class="ri-arrow-right-s-fill"></i> {a}
                                <t />
                              </>
                            );
                          })}

                          {/* <button class="btn btn-sm btn-light">Reply</button> */}
                        </div>
                      </div>
                      {/*  */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div class="container-fluid py-5">
        <div class="container">
            
            <div class="row g-5">
                <div class="col-lg-12" >
                    <div class="bg-light text-center pt-5 mt-lg-5">
                        <h2 class="text-uppercase">{value.name}</h2>
                        <h6 class="text-body mb-5">The Best Choice</h6>
                        <div class="text-center bg-primary p-4 mb-2">
                           
                            
                            <div>
                                <span>Company Name : {value.name}</span>
                            </div>
                            <div>
                                <span>Registration : {value.regno}</span>
                            </div>
                            <div>
                                <span>E-mail : {value.email}</span>
                            </div>
                            <div>
                                <span>Contact : {value.contact}</span>
                            </div>
                            <div>
                                <span>City : {value.city}</span>
                            </div>
                            <div>
                                <span>District : {value.district}</span>
                            </div>
                            <div>
                                <span>Rating : {value.rating} / 5</span>
                            </div>
                            <div style={{marginTop:'15px'}} >
                                <button class='btn btn-light' >Book now</button>
                            </div>
                           

                        </div>
                        
                    </div>
                </div>
                
            </div>
        </div>
    </div> */}
    </div>
  );
}

export default MvrDetailsForPkr;
