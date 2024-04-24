import React, { useEffect, useState } from 'react'
import Sidebar from '../Sidebar/Sidebar'
import '../AdminPanel/AdminPanel.css'
import axiosInstance from '../../BaseUrl';
import { Link, useNavigate } from 'react-router-dom';

function AdminPanel() {


  const navigate=useNavigate()

  useEffect(()=>{
    if(localStorage.getItem('admin')==null){
        navigate('/admin')
    }
},[])

  const [packersDetails, setpackersDetails] = useState([]);
  const [value, setValue] = useState([]);
  const [drivers, setDrivers] = useState([]);
  const [moverreq, setmoverreq] = useState([]);


  useEffect(() => {
    axiosInstance.post("/viewPackers").then((responce) => {
      console.log(responce);
      if(responce.data.msg=='No Data obtained '){
        setpackersDetails([])
      }else if(responce.data.status==200){
        setpackersDetails(responce.data.data);
      }    });

    axiosInstance.post("/viewAllMovers").then((responce) => {
      console.log(responce);
      if(responce.data.msg=='No Data obtained '){
        setValue([])
      }else if(responce.data.status==200){
        setValue(responce.data.data);
      }    });

    axiosInstance.post("/viewDrivers").then((responce) => {
      console.log(responce);
      if(responce.data.msg=='No Data obtained '){
        setDrivers([])
      }else if(responce.data.status==200){
        setDrivers(responce.data.data);
      }
    });

    axiosInstance.post("/viewMoverRequests").then((responce) => {
      if (responce.data.msg == "No Data obtained ") {
        setmoverreq([]);
      } else {
        setmoverreq(responce.data.data);
      }
      console.log(responce);
    });

  }, []);

  return (
    <div>
      <Sidebar/>
      <section className='home' >
          <div className="row gx-5 m-5">
            <h1>Welcome Admin</h1>
          {moverreq.length?<div className="col-lg-4 mb-5 mt-5 mb-lg-0">
            <Link to={'/admin-mover-req'} ><div className='user__box'>
                <h5>New Requests</h5>
                <span>{moverreq.length}</span>
              </div></Link>
            </div>:''}
            <div className="col-lg-4 mb-5 mt-5 mb-lg-0">
              <Link to={'/admin-packers'} ><div className='revenue__box'>
                <h5>Total Customers</h5>
                <span>{packersDetails.length}</span>
              </div></Link>
            </div>
            <div className="col-lg-4 mb-5 mt-5 mb-lg-0">
            <Link to={'/admin-movers'} ><div className='order__box'>
                <h5>Total Movers</h5>
                <span>{value.length}</span>
              </div></Link>
            </div>
            <div className="col-lg-4 mb-5 mt-5 mb-lg-0">
            <Link to={'/admin-drivers'} ><div className='products__box'>
                <h5>Total Drivers</h5>
                <span>{drivers.length}</span>
              </div></Link>
            </div>

            

          </div>
      </section>
    </div>
  )
}

export default AdminPanel
