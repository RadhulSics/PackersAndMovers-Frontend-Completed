import React, { useState } from 'react'
import Navs from './Nav/Navs'
import img from '../Images/moverKg.png'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axiosInstance from '../BaseUrl';

function MoversAddDetails() {

    const [ratePerKm, setkmCharge] = useState("");
    const [ratePerKg, setkgcharge] = useState("");
    const [minRate, setmincharge] = useState("");
    const [comments, setcomments] = useState("");
    const navigate=useNavigate();

    const doAdd = (e) => {
        e.preventDefault();

        const values={ratePerKm: ratePerKm, ratePerKg: ratePerKg, minRate:minRate, comments:comments}
        console.log(values);
        const mover_id=localStorage.getItem('moversId')

        axiosInstance.post(`/addRate/${mover_id}`,values)
        .then((res)=>{
            console.log(res);
            if(res.data.status==200){
                toast.success('Successfully Added')
                navigate('/movers-login')
            }else{
                toast.error('Failed')
            }
        })
        .catch((err)=>{
            console.log(err);
        })

      };

  return (
    <div>
        <Navs/>
        <div className="container-fluid py-5">
        <div className="container"  >
        <div className="border-start border-5 border-primary ps-5 mb-5">
                        <h6 className="text-primary text-uppercase">Movers</h6>
                        <h1 className="display-5 text-uppercase mb-0">Add details</h1>
                    </div>
            <div className="row gx-5">
                <div className="col-lg-5 mb-5 mb-lg-0" style={{minHeight:'400px'}} >
                    <div className="position-relative h-100">
                    
                        <img className="position-absolute w-100 h-100 rounded" src={img} style={{objectFit:'cover', height:'400px', width:'100px'}} alt='' />
                    </div>
                </div>
                <div className="col-lg-7" style={{paddingTop:'2rem'}}>
                <form onSubmit={doAdd} >
                        <div className="row g-3">
                            
                            <div className="col-6" style={{marginBottom:'1rem'}} >
                                <input type="text" className="form-control bg-light border-0 px-4" placeholder="Charge per KM" style={{height:'55px'}} value={ratePerKm} onChange={(e)=>{setkmCharge(e.target.value)}} required />
                            </div>
                            <div className="col-6" style={{marginBottom:'1rem'}}>
                                <input type="text" className="form-control bg-light border-0 px-4" placeholder="Charge per KG" style={{height:'55px'}} value={ratePerKg} onChange={(e)=>{setkgcharge(e.target.value)}} required/>
                            </div>
                            <div className="col-12" style={{marginBottom:'1rem'}}>
                                <input type="text" className="form-control bg-light border-0 px-4" placeholder="Min charge per KM" style={{height:'55px'}} value={minRate} onChange={(e)=>{setmincharge(e.target.value)}} required/>
                            </div>
                            <div className="col-12" style={{marginBottom:'1rem'}}>
                            <textarea className="form-control bg-light border-0 px-4" rows="4" cols="50" placeholder="Comments"  value={comments} onChange={(e)=>{setcomments(e.target.value)}} />
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

export default MoversAddDetails
