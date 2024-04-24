import React, { useEffect, useState } from 'react'
import img from '../Images/moverKg.png'
import { useNavigate, useParams } from 'react-router-dom';
import axiosInstance from '../BaseUrl';
import { toast } from 'react-toastify';
import MoversNav from './MoversNav';


function MoversEditRates() {

    const [value,setValue] = useState({});
  const navigate=useNavigate();


const id =useParams();
const mover_id=localStorage.getItem('moversId')

  useEffect(() => {


    axiosInstance.post(`/viewRateByMover/${mover_id}`)
    .then((res)=>{
    console.log(res);
    setValue(res.data.data[0])
    
  })
  }, []);

  const updatefcn=(e)=>{
    e.preventDefault();

    axiosInstance.post(`/editRateById/${mover_id}`,value)
    .then((response)=>{
      console.log(response);
      if (response.data.status==200) {
        toast.success('Rate Updated')
        navigate('/movers-view-rates')
      }else{
        toast.error('Updation Failed')
      }

    })
    .catch((err)=>{
      console.log(err);
    })
  }

  const changefn = (e)=>{
setValue({...value, [e.target.name]:e.target.value})
  }

  return (
    <div>
        <MoversNav/>
        {/* {
            value.map((value)=>{
                return( */}
                   <div className="container-fluid py-5">
        <div className="container"  >
        <div className="border-start border-5 border-primary ps-5 mb-5">
                        <h6 className="text-primary text-uppercase">Movers</h6>
                        <h1 className="display-5 text-uppercase mb-0">Edit details</h1>
                    </div>
            <div className="row gx-5">
                <div className="col-lg-5 mb-5 mb-lg-0" style={{minHeight:'400px'}} >
                    <div className="position-relative h-100">
                    
                        <img className="position-absolute w-100 h-100 rounded" src={img} style={{objectFit:'cover', height:'400px', width:'100px'}} alt='' />
                    </div>
                </div>
                <div className="col-lg-7" style={{paddingTop:'2rem'}}>
                <form onSubmit={updatefcn} >
                        <div className="row g-3">
                            
                            <div className="col-6" style={{marginBottom:'1rem'}} >
                                <input type="text" className="form-control bg-light border-0 px-4" placeholder="Charge per KM" value={value.ratePerKm} name="ratePerKm" onChange={changefn} id="ratePerKm" style={{height:'55px'}}  />
                            </div>
                            <div className="col-6" style={{marginBottom:'1rem'}}>
                                <input type="text" className="form-control bg-light border-0 px-4" placeholder="Charge per KG" value={value.ratePerKg} name="ratePerKg" onChange={changefn} id="ratePerKg" style={{height:'55px'}}  />
                            </div>
                            <div className="col-12" style={{marginBottom:'1rem'}}>
                                <input type="text" className="form-control bg-light border-0 px-4" placeholder="Min charge per KM" value={value.minRate} name="minRate" onChange={changefn} id="minRate" style={{height:'55px'}} />
                            </div>
                            <div className="col-12" style={{marginBottom:'1rem'}}>
                            <textarea className="form-control bg-light border-0 px-4" rows="4" cols="50" placeholder="Comments" value={value.comments} name="comments" onChange={changefn} id="comments" />
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
                {/* )
            })
        } */}
      
    </div>
  )
}

export default MoversEditRates
