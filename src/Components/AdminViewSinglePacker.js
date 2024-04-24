import React, { useEffect, useState } from "react";
import axiosInstance from "../BaseUrl";
import img from "../Images/profile.jpg";
import { Link, useParams,useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";

function AdminViewSinglePacker() {

  const navigate=useNavigate()

  useEffect(()=>{
    if(localStorage.getItem('admin')==null){
        navigate('/admin')
    }
},[])
  const [packer, setpacker] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axiosInstance.post(`/viewPackerById/${id}`).then((res) => {
      setpacker(res.data.data);
    });
  }, []);

  return (
    <div>
      <Sidebar />
      <div className="container emp-profile">
        <form method="post">
          <div className="row align-items-center">
            <div className="border-start border-5 border-primary ps-5 ">
              {/* <h6 className="text-primary text-uppercase">Profile</h6> */}
              {/* <h1 className="display-5 text-uppercase mb-0">Your Profile</h1> */}
            </div>
            <div className="col-md-6">
              <img src={img} style={{ height: "500px" }} alt="" />
            </div>
            <div className="col-md-6 ">
              <div className="profile-head" style={{border:'1px solid black',padding:'30px 40px',borderRadius:'10px'}} key={packer._id}>
                <h5>{packer.name}</h5>
                <h6>{packer.email}</h6>
                <p className="proile-rating">
                  {/* RANKINGS : <span>8/10</span> */}
                </p>
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item">
                    <p
                      className="nav-link active"
                      id="home-tab"
                      data-toggle="tab"
                      href="#home"
                      role="tab"
                      aria-controls="home"
                      aria-selected="true"
                    >
                      Details
                    </p>
                  </li>
                  <li className="nav-item"></li>
                </ul>
                <div className="row">
                  <div className="col-md-6">
                    <label>Name</label>
                  </div>
                  <div className="col-md-6">
                    <p>{packer.name}</p>
                  </div>
                </div>
                {/* <div className="row">
                    <div className="col-md-6">
                      <label>E-mail</label>
                    </div>
                    <div className="col-md-6">
                      <p>{packer.email}</p>
                    </div>
                  </div> */}
                <div className="row">
                  <div className="col-md-6">
                    <label>Contact</label>
                  </div>
                  <div className="col-md-6">
                    <p>{packer.contact}</p>
                  </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                      <label>Gender</label>
                    </div>
                    <div className="col-md-6">
                      <p>{packer.gender ? packer.gender : " - "}</p>
                    </div>
                  </div>
                <div className="row">
                  <div className="col-md-6">
                    <label>City</label>
                  </div>
                  <div className="col-md-6">
                    <p>{packer.city}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label>District</label>
                  </div>
                  <div className="col-md-6">
                    <p>{packer.district}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label>Pincode</label>
                  </div>
                  <div className="col-md-6">
                    <p>{packer.pincode}</p>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="col-md-2" >
              <Link to='/packers-edit-profile' >
              <button
                type="button"
                className="btn btn-primary" style={{marginRight:'3px'}}
              >Edit</button></Link>
              <Link to='/' ><button
                type="button"
                className="btn btn-danger"
                onClick={()=>{localStorage.clear()}}
              >Logout</button></Link>
            </div> */}
          </div>
        </form>
      </div>
    </div>
  );
}

export default AdminViewSinglePacker;
