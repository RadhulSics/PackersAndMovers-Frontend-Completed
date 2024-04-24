import React, { useEffect, useState } from 'react'
import Sidebar from '../Sidebar/Sidebar'
import axiosInstance from '../../BaseUrl';
import { Link, useNavigate } from "react-router-dom";


function AdminOrders() {

  const navigate=useNavigate()

  useEffect(()=>{
    if(localStorage.getItem('admin')==null){
        navigate('/admin')
    }
},[])

  const [value,setvalues]=useState([])

  useEffect(() => {
    axiosInstance
      .post('/viewAllComplaint')
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
      <Sidebar/>
      {/* <div className="mrgin">
        <table class="table table-hover ">
          <thead>
            <tr>
              <th scope="col">Customer Name</th>
              <th scope="col">Company Name</th>
              <th scope="col">Date</th>
              <th scope="col">Time</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td scope="row">qwerty</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td scope="row">asdfgh</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td scope="row">zxcvbn</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
              <td>@fat</td>
            </tr>
            
          </tbody>
        </table>
      </div> */}
      <div class="container">
  <div class="mrgin">
    <div class="table-responsive">
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">Customer Name</th>
            <th scope="col">Customer E-mail</th>
            <th scope="col">Customer Contact</th>
            <th scope="col">Complaint</th>
            <th scope="col">Company Name</th>
            <th scope="col">Company E-mail</th>
            <th scope="col">Company Contact</th>
          </tr>
        </thead>
        <tbody>
          {
            value.length?value.map((a)=>{
              return(
                <tr>
            <td >{a.pid.name}</td>
            <td>{a.pid.email}</td>
            <td>{a.pid.contact}</td>
            <td>{a.complaint}</td>
            <td >{a.mid.name}</td>
            <td>{a.mid.email}</td>
            <td>{a.mid.contact}</td>
          </tr>
              )
            }):<h1 style={{ padding: "50px", textAlign: "center" }} >No Complaints Found</h1>
          }
          
         
        </tbody>
      </table>
    </div>
  </div>
</div>
 
    </div>
  )
}

export default AdminOrders

