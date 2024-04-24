import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import axiosInstance from '../BaseUrl';
import PackersNav from './PackersNav/PackersNav';
import Lottie from "lottie-react";
import img from "./Assets/rating.json";


function PackerAddComplaints() {
    const id = useParams();
    const pid=localStorage.getItem('packerId')
  console.log(id.id);
  const [complaint, setcomplaint] = useState({pid:pid, mid:id.id, complaint:''});
  const navigate = useNavigate();

  const doSubmit = (e) => {
    e.preventDefault();
   
    axiosInstance
      .post("/registerComplaint", complaint)
      .then((res) => {
        console.log(res);
        if (res.data.status == 200) {
          toast.success("Complaint Added");
          navigate('/packers-home')
        } 
      })
      .catch((err) => {
        console.log(err);
        toast.error("Login failed");
      });
      
  };
  return (
    <div>
            <PackersNav />
            <div className="container-fluid py-5">
        <div className="container">
          <div className="border-start border-5 border-primary ps-5 mb-5">
            <h6 className="text-primary text-uppercase">Add </h6>
            <h1 className="display-5 text-uppercase mb-0">Complaints</h1>
          </div>
          <div className="row gx-5">
            <div
              className="col-lg-5 mb-5 mb-lg-0"
              style={{ minHeight: "400px" }}
            >
              <div className="position-relative h-100">
                <Lottie animationData={img} />
              </div>
            </div>
            <div className="col-lg-7" style={{ paddingTop: "2rem" }}>
              <form onSubmit={doSubmit} >
                <div className="row g-3">
                 
                  <div className="col-10" style={{ marginBottom: "1rem" }}>
                    <textarea
                      type="text"
                      className="form-control bg-light border-0 px-4"
                      placeholder="Add Complaints"
                      style={{ height: "75px" }}
                      onChange={(e)=>{setcomplaint({...complaint,complaint:e.target.value})}}

                    />
                  </div>
                  
                  

                  <div className="col-12">
                                <button className="btn btn-primary w-100 py-3" type="submit">add</button>
                            </div>
                  
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default PackerAddComplaints
