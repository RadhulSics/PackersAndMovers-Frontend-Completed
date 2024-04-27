import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar/Sidebar";
import axiosInstance from "../BaseUrl";
import { Link,useNavigate } from "react-router-dom";

function AdminMov() {

  const navigate=useNavigate()

  useEffect(()=>{
    if(localStorage.getItem('admin')==null){
        navigate('/admin')
    }
},[])
  
  const [value, setValue] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    if (name.trim() !== "") {
      axiosInstance
        .post(`/searchMoversByName/${name}`)
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
      axiosInstance.post("/viewAllMovers").then((responce) => {
        console.log(responce);
        if (responce.data.status == 200) {
          setValue(responce.data.data);
        } else {
          setValue([]);
        }
      });
    }
  }, [name]);

  const handleRemove = (id) => {
    axiosInstance
      .post(`/deleteMoverById/${id}`)
      .then((res) => {
        console.log(res);
        if (res.data.status == 200) {
          alert("Removed");
          setValue((prevArray) => prevArray.filter((item) => item._id !== id));
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
  };

  return (
    <div>
      <Sidebar />

      {/* <div class="container py-5">
  <div class="row g-5">
  {value.length?value.map((a) => {
            return (
    <div class="col-lg-6">
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
                  <p class="m-2">
                    {a.city}<br />{a.district}<br />{a.pincode}
                  </p>
                  <div class="d-flex justify-content-between">
                    <button type="button" class="btn btn-danger" onClick={() => handleRemove(a._id)} >Remove</button>
                  </div>
                </div>
              </div>
           
        </div>
      </div>
    </div>
     );
    }) : <h1 style={{padding:'50px',textAlign:'center'}} >No mover found</h1>
} 
   
  </div>
</div> */}

      <div class="container">
        <input
          type="text"
          className="form-control bg-light border px-4 w-25 mb-5"
          placeholder="Search For Companies"
          style={{ height: "35px", marginTop: "50px" }}
          autoComplete="off"
          onChange={handleChange}
        />
        {value.length <= 0 ? (
          <h1 style={{ padding: "50px", textAlign: "center" }}>
            No Movers Found
          </h1>
        ) : (
          <div class=""> 
              <h1>Movers</h1>
            <div class="table-responsive">
              <table class="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">E-mail</th>
                    <th scope="col">Reg No</th>
                    <th scope="col">Contact</th>
                    <th scope="col">Rating</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {value.map((a) => {
                    return (
                      <tr>
                        <td>{a.name}</td>
                        <td>{a.email}</td>
                        <td>{a.regno}</td>
                       

                        <td>{a.contact}</td>
                        <td>{a.rating}/5</td>
                        <td>
                          <Link to={`/admin-view-single-mover/${a._id}`}>
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

export default AdminMov;
