import React, { useEffect, useState } from "react";
import axiosInstance from "../BaseUrl";
import MoversNav from "./MoversNav";

function MoversViewRating() {
  const [value, setvalue] = useState([]);

  const id = localStorage.getItem("moversId");

  useEffect(() => {
    // const storedUser = localStorage.getItem("users");
    console.log(id);

    axiosInstance.post(`/viewMovrById/${id}`).then((res) => {
      console.log(res);
      setvalue(res.data.data.reviews);
    });
  }, []);
  return (
    <div>
      <MoversNav />
      <div className="container mt-5 mb-5">
        <div className="row">
            {value.length ? (
              value.map((e) => {
                return(
                    <div className="col-4">

                <div class="card">
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">{e}</li>
                  </ul>
                </div>
                </div>
)
              })
            ) : (
              <h1 style={{ padding: "50px", textAlign: "center" }}>
                No Reviews Found
              </h1>
            )}
        </div>
      </div>
    </div>
  );
}

export default MoversViewRating;
