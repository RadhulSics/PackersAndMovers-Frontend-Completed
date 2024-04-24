import React, { useEffect, useState } from "react";
import MoversNav from "./MoversNav";
import axiosInstance from "../BaseUrl";

function MoverViewComplaints() {
  const id = localStorage.getItem("moversId");
  const [value, setvalues] = useState([]);

  useEffect(() => {
    console.log(id);
    axiosInstance
      .post(`/viewComplaintByMId/${id}`)
      .then((res) => {
        console.log(res);
        setvalues(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <MoversNav />
      <div class="container">
        {value.length <= 0 ? (
          <h1 style={{ padding: "50px", textAlign: "center" }}>
            No Complaints Found
          </h1>
        ) : (
          <div class="mrgin">
            <div class="table-responsive">
              <table class="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">Customer Name</th>
                    <th scope="col">E-mail</th>
                    <th scope="col">Contact</th>
                    <th scope="col">Complaint</th>
                    {/* <th scope="col">Status</th> */}
                  </tr>
                </thead>
                <tbody>
                  {value.map((a) => {
                    return (
                      <tr>
                        <td>{a.pid.name}</td>
                        <td>{a.pid.email}</td>
                        <td>{a.pid.contact}</td>
                        <td>{a.complaint}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default MoverViewComplaints;
