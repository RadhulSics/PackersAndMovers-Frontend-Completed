import React, { useEffect, useState } from "react";
import MoversNav from "./MoversNav";
import axiosInstance from "../BaseUrl";
import { Link, useNavigate } from "react-router-dom";

function MoverViewAllDrivers() {
  const [value, setValue] = useState([]);
  const id = localStorage.getItem("moversId");

  const navigate = useNavigate();
  const [name, setName] = useState("");

  useEffect(() => {
    if (name.trim() !== "") {
      axiosInstance
        .post(`/searchdriversByNameandMid/${name}/${id}`)
        .then((res) => {
          if (res.data.status == 200) {
            setValue(res.data.services);
          } else {
            setValue([]);
          }
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      axiosInstance.post(`/viewDriverByMId/${id}`).then((responce) => {
        console.log(responce);
        if (responce.data.status == 200) {
          setValue(responce.data.data);
        } else {
          setValue([]);
        }
      });
    }
  }, [name]);
  // useEffect(() => {
  //   axiosInstance.post(`/viewDriverByMId/${id}`).then((responce) => {
  //     console.log(responce);
  //     setValue(responce.data.data);
  //   });
  // }, []);

  const handleRemove = (id) => {
    axiosInstance.post(`/deleteDriverById/${id}`)
      .then((res) => {
        console.log(res);
        if(res.data.status==200){
            alert('Removed')
            setValue(prevArray => prevArray.filter(item => item._id !== id));
            // window.location.reload()
        }else{
            // alert.warning('Employee Already Exist')
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div>
      <MoversNav />
      {/* <div class="container py-5">
        <div class="row g-5">
          {value.length?value.map((a) => {
            return (
    <div class="col-lg-4">
      <div class="row">
        <div class="col-12">
          
              <div class="blog-item mb-5">
                <div class="bg-light overflow-hidden p-4">
                  <div class="d-flex mb-3">
                    <small class="me-3">
                      <i class="ri-mail-line m-2"></i>{a.email}
                    </small>
                    <small>
                      <i class="ri-phone-line m-2"></i>{a.contact}
                    </small>
                  </div>
                  <h5 class="text-uppercase m-2 mb-3">{a.name}</h5>
                  <p class="m-2" style={{fontSize:'large'}}>
                    Licence Number : {a.licenceNo}<br />
                  </p>
              
                  <div class="d-flex justify-content-between">
                    <button type="button" class="btn btn-warning mt-2" onClick={()=>{navigate(`/mover_edit_drivers/${a._id}`)}} >Edit</button>
                    <button type="button" class="btn btn-danger mt-2" onClick={()=>{handleRemove(a._id)} }>Remove</button>
                  </div>
                </div>
              </div>
           
        </div>
      </div>
    </div>
     );
    }) : <h1 style={{padding:'50px',textAlign:'center'}} >No Drivers Found</h1>
} 
        </div>
      </div> */}








      <div class="container">
        <input
          type="text"
          className="form-control bg-light border px-4 w-25 mb-5"
          placeholder="Search For Drivers"
          style={{ height: "35px", marginTop: "50px" }}
          autoComplete="off"
          onChange={handleChange}
        />
        {value.length <= 0 ? (
          <h1 style={{ padding: "50px", textAlign: "center" }}>
            No Drivers Found
          </h1>
        ) : (
          <div class=""> 
              <h1>Driver</h1>
            <div class="table-responsive">
              <table class="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">E-mail</th>
                    <th scope="col">Contact</th>
                    <th scope="col">Licence No</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {value.map((a) => {
                    return (
                      <tr>
                        <td>{a.name}</td>
                        <td>{a.email}</td>
                        <td>{a.contact}</td>
                        <td>{a.licenceNo}</td>

                        <td>
                        <button type="button" class="btn btn-warning mt-2" onClick={()=>{navigate(`/mover_edit_drivers/${a._id}`)}} >Edit</button>
                       &nbsp;&nbsp; <button type="button" class="btn btn-danger mt-2" onClick={()=>{handleRemove(a._id)} }>Remove</button>

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

export default MoverViewAllDrivers;
