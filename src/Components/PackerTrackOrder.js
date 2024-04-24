import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./PackerTrackOrder.css";
import axiosInstance from "../BaseUrl";

function PackerTrackOrder() {
  const { id } = useParams();
  console.log(id);

  const [value, setValue] = useState({});
  const [location, setLocation] = useState([]);

  useEffect(() => {
    axiosInstance
      .post(`/getLocUpdatesById/${id}`)
      .then((res) => {
        console.log(res);
        setValue(res.data.data);
        setLocation(res.data.data.location);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <body class="order-tracking-body">
        <div class="order-tracking-container container">
          <article class="order-tracking-card row">
            <h1 class="order-tracking-card-header mb-5">
              {" "}
              My Orders / Tracking{" "}
            </h1>
            {value == null ? (
              <div><h4>Your order has been confirmed</h4></div>
            ) : (
              <div className="row">
                <div className="col-6">
                  <div class="order-tracking-card-body">
                    <div class="container">
                      {location.map((a) => {
                        return (
                          <div>
                            <div class="track_line"></div>
                            <div class="d-flex">
                              <div class="track_circle"></div>
                              <div class="">
                                {a.status} {a.loc}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <article class="order-tracking-card">
                    <div class="order-tracking-card-body row">
                      {value.status == "Pickedup" ? (
                        <div class="col">
                          <strong>
                            <h1>Congratulations!!</h1> Your courier has been successfully
                            pickedup by our team
                          </strong>{" "}
                          <br />
                          {value.arrivaldate}{" "}
                        </div>
                      ) : value.status == "Arrived at" ? (
                        <div class="col">
                          <strong>
                          <h1>Congratulations!!</h1> Your courier has been successfully
                            arrived at {location[location.length - 1].loc}
                          </strong>{" "}
                          <br />
                          {value.arrivaldate}{" "}
                        </div>
                      ) : value.status == "Delivered" ? (
                        <div class="col">
                          <strong>
                          <h1>Congratulations!!</h1> Your courier has been successfully
                            delivered
                          </strong>{" "}
                          <br />
                          {value.arrivaldate}{" "}
                        </div>
                      ) : (
                        <div class="col">
                          <strong>
                          <h1>Congratulations!!</h1> Your courier has been successfully
                            pickedup by our team
                          </strong>{" "}
                          <br />
                          {value.arrivaldate}{" "}
                        </div>
                      )}
                    </div>
                  </article>
                </div>
              </div>
            )}
          </article>
        </div>
      </body>
    </div>
  );
}

export default PackerTrackOrder;
