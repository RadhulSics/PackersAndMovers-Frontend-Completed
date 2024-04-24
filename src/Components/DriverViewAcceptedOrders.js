import React, { useEffect, useState } from "react";
import axiosInstance from "../BaseUrl";
import { Link } from "react-router-dom";

function DriverViewAcceptedOrders() {
  const did = localStorage.getItem("driverId");
  const mid = localStorage.getItem("driverMoverId");
  const [value, setValue] = useState([]);

  useEffect(() => {
    axiosInstance
      .post(`/viewAcceptedOrders/${did}`)
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
      <div class="container py-5">
        <div class="row g-5">
          {value.length ? (
            value.map((a) => {
              return (
                <div class="col-lg-6">
                  <div class="row">
                    <div class="col-12">
                      <div class="blog-item mb-5">
                        <div class="bg-light overflow-hidden p-4">
                          <div class="d-flex mb-3">
                            <small class="me-3">
                              <i class="ri-calendar-todo-line m-2"></i>
                              {a.orderid.date.slice(0, 10)}
                            </small>
                            <small>
                              <i class="ri-time-line m-2"></i>
                              {a.orderid.time}
                            </small>
                          </div>
                          {/* <h5 class="text-uppercase m-2 mb-3">{a.name}</h5>
                  <p class="m-2" style={{fontSize:'large'}}>
                    City : {a.city}<br />District : {a.district}<br />
                  </p> */}
                          <div class="d-flex mb-3 m-2 justify-content-between">
                            <div>
                              <h6>
                                {" "}
                                From:
                                <br /> {a.orderid.fromhname}{" "}
                                {a.orderid.fromstreet} {a.orderid.fromlmark}{" "}
                                {a.orderid.fromcity} {a.orderid.fromdistrict}
                              </h6>
                            </div>
                            <div>
                              <h6>
                                {" "}
                                To:
                                <br /> {a.orderid.tohname} {a.orderid.tostreet}{" "}
                                {a.orderid.tolmark} {a.orderid.tocity}{" "}
                                {a.orderid.todistrict}
                              </h6>
                            </div>
                          </div>
                          <div class="d-flex mb-3 m-2 justify-content-between">
                            <div>House Type : {a.orderid.type}</div>
                            <div>Total distance : {a.orderid.distance} Km</div>
                          </div>

                          <div class="d-flex mb-3 m-2 justify-content-between">
                          <div>
                              No: of boxes - {a.orderid.boxes ? a.orderid.boxes : "Nil"}
                            </div>
                            <div>
                              Weight - {a.orderid.weight ? `${a.orderid.weight} Kg` : "Nil"}{" "}
                            </div>
                          </div>
                          <div class="d-flex mb-3 m-2 justify-content-between">
                          <div>
                              Godown Days -{" "}
                              {a.orderid.godownDays ? a.orderid.godownDays : "Nil"}
                            </div>                            <div>
                              Vehicle status -{" "}
                              {a.orderid.vehicle == true ? "Yes" : "No"}
                            </div>
                          </div>
                          <div class="d-flex mb-3 m-2 justify-content-between">
                            <div>
                              {" "}
                              {a.orderid.status
                                ? `Current Status - ${a.orderid.status}`
                                : ""}
                            </div>

                            <div>
                              {" "}
                              {a.orderid.loc
                                ? `Current Location - ${a.orderid.loc}`
                                : ""}
                            </div>
                          </div>

                          <div class="d-flex mb-3 m-2 justify-content-between">
                            <div>
                              <h4 class="text-success">
                                Amount - {a.orderid.rate}
                              </h4>
                            </div>
                          </div>

                          <div class="d-flex justify-content-between">
                            {/* <button className='btn btn-success' onClick={()=>{handleApprove(a._id)}} >Approve</button> */}
                            {/* <button className='btn btn-danger' onClick={()=>{handleRemove(a._id)}} >Reject</button> */}
                            <Link to={`/driver-add_location/${a._id}`}>
                              <button type="button" class="btn btn-warning">
                                Add Location / Status
                              </button>
                            </Link>
                            {/* onClick={() => handleRemove(a._id)} */}
                            {/* <Link to={`/packer_add_review/${a.mid}`} ><button type="button" class="btn btn-warning" >Add Rating</button></Link> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <h1 style={{ padding: "50px", textAlign: "center" }}>
              No Orders found
            </h1>
          )}
        </div>
      </div>
    </div>
  );
}

export default DriverViewAcceptedOrders;
