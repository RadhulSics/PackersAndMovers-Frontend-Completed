import axios from "axios";
import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import img from "../../Images/packerdetail.jpg";
import axiosInstance from "../../BaseUrl";
import { Link,useNavigate } from "react-router-dom";

function AdminPackers() {

  const navigate=useNavigate()

  useEffect(()=>{
    if(localStorage.getItem('admin')==null){
        navigate('/admin')
    }
},[])
  const [packersDetails, setpackersDetails] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log(name);
     if (name.trim() !== "") {
    axiosInstance
      .post(`/searchPackersByName/${name}`)
      .then((res) => {
        if (res.data.status == 200) {
          setpackersDetails(res.data.services);
          console.log("sea",res.data.services);
        } else {
          setpackersDetails([]);
        }
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
 
    axiosInstance.post("/viewPackers").then((responce) => {
      console.log(responce);
      if(responce.data.msg=='No Data obtained '){
        setpackersDetails([])
      }else if(responce.data.status==200){
        setpackersDetails(responce.data.data);
      }
      
    });}

  }, [name]);

  const handleRemove = (id) => {
    axiosInstance
      .post(`/deletePackerById/${id}`)
      .then((res) => {
        console.log(res);
        if (res.data.status == 200) {
          alert("Removed");
          setpackersDetails((prevArray) =>
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
  const handleChange = (e) => {
    setName(e.target.value);
    console.log(name);
  };
  return (
    <div>
      <Sidebar />

     

      <div class="container">
      <input
          type="text"
          className="form-control bg-light border px-4 w-25 mb-5"
          placeholder="Search For Customers"
          style={{ height: "35px", marginTop: "50px" }}
          autoComplete="off"
          onChange={handleChange}
        />
        {packersDetails.length <= 0 ? (
          <h1 style={{ padding: "50px", textAlign: "center" }}>
            No Customers Found
          </h1>
        ) : (
          <div class="mrgin">
            <h1>Customers</h1>
            <div class="table-responsive">
              <table class="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">E-mail</th>
                    <th scope="col">Contact</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {packersDetails.map((a) => {
                    return (
                      <tr>
                        <td>{a.name}</td>
                        <td>{a.email}</td>
                        <td>{a.contact}</td>
                        <td>
                          <Link to={`/admin-view-single-packer/${a._id}`}>
                            <button class="btn btn-success ">View</button>
                          </Link>
                          <button
                            type="button"
                            class="btn btn-danger mx-1"
                            onClick={() => handleRemove(a._id)}
                          >
                            Remove
                          </button>
                        </td>
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

export default AdminPackers;
