import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar/Sidebar";
import axiosInstance from "../BaseUrl";
import {Link, useNavigate} from 'react-router-dom'

function AdminMoverReq() {

  const navigate=useNavigate()

  useEffect(()=>{
    if(localStorage.getItem('admin')==null){
        navigate('/admin')
    }
},[])
  const [moverreq, setmoverreq] = useState([]);

  useEffect(() => {
    axiosInstance.post("/viewMoverRequests").then((responce) => {
      if (responce.data.msg == "No Data obtained ") {
        setmoverreq([]);
      } else {
        setmoverreq(responce.data.data);
      }
      console.log(responce);
    });
  }, []);

  const handleApprove = (id) => {
    axiosInstance
      .post(`/approveMover/${id}`)
      .then((res) => {
        console.log(res);
        if (res.data.status == 200) {
          alert("Approved");
          setmoverreq((prevArray) =>
            prevArray.filter((item) => item._id !== id)
          );
          // window.location.reload()
        } else {
          // alert.warning('Employee Already Exist')
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleReject = (id) => {
    axiosInstance
      .post(`/deleteMoverById/${id}`)
      .then((res) => {
        console.log(res);
        if (res.data.status == 200) {
          alert("Deleted");
          setmoverreq((prevArray) =>
            prevArray.filter((item) => item._id !== id)
          );
          // window.location.reload()
        } else {
          // alert.warning('Employee Already Exist')
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Sidebar />
      <div class="container">
      {moverreq.length <= 0 ? (
          <h1 style={{ padding: "50px", textAlign: "center" }}>
            No Request Found
          </h1>
        ):(
        <div class="mrgin">
          <div class="table-responsive">
            <table class="table table-hover">
              <thead>
                <tr>
                  <th scope="col">Company Name</th>
                  <th scope="col">Reg No</th>
                  <th scope="col">Email</th>
                  <th scope="col">Aadhaar</th>
                  <th scope="col">Contact</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  moverreq.map((a) => {
                    return (
                      <tr>
                        <td>{a.name}</td>
                        <td>{a.regno}</td>
                        <td>{a.email}</td>
                        <td>{a.aadhar}</td>
                        <td>{a.contact}</td>
                        <td>
                          <button
                            class="btn btn-success"
                            onClick={() => {
                              handleApprove(a._id);
                            }}
                          >
                            approve
                          </button>
                          <button
                            class="btn btn-danger mx-1"
                            onClick={() => {
                              handleReject(a._id);
                            }}
                          >
                            delete
                          </button>
                        </td>
                      </tr>
                    );
                  })
                 }
              </tbody>
            </table>
          </div>
        </div>
        )}

      </div>
    </div>
  );
}

export default AdminMoverReq;
