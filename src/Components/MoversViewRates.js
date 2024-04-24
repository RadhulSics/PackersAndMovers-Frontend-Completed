import React, { useEffect, useState } from 'react'
import MoversNav from './MoversNav'
import img from '../Images/rateM.jpg'
import axiosInstance from '../BaseUrl';
import { useNavigate } from 'react-router-dom';

function MoversViewRates() {

    const [details, setdetails] = useState([]);
    const navigate=useNavigate();


  useEffect(()=>{
    // const storedUser = localStorage.getItem("users");
    const mover_id=localStorage.getItem("moversId")
    console.log(mover_id);



  axiosInstance.post(`/viewRateByMover/${mover_id}`)
  .then((res)=>{
    console.log(res);
    setdetails(res.data.data)
    
  })

  },[])

  return (
    <div>
      <MoversNav/>
      
        <div class="container-fluid py-5">
        <div class="container">
            <div class="row gx-5">
                <div class="col-lg-5 mb-5 mb-lg-0" style={{minHeight:'500px'}}>
                    <div class="position-relative h-100">
                        <img class="position-absolute w-100 h-100 rounded" src={img} style={{objectFit:'cover'}}/>
                    </div>
                </div>
                <div class="col-lg-7 mt-5">

                {
                    details?details.map((a)=>{
                        return(<>
                            <div class="border-start border-5 border-primary ps-5 mb-5">
                        <h6 class="text-primary text-uppercase">Rates</h6>
                        {/* <h1 class="display-5 text-uppercase mb-0">We Keep Your Pets Happy All Time</h1> */}
                    </div>
                    <h1 class="text-body mb-4">Charge per KM : Rs {a.ratePerKm}<br/>Charge per KG : Rs {a.ratePerKg}<br/>Min charge per Km : Rs {a.minRate}<br/></h1>
                    <p>Comments : {a.comments}</p>
                    <button class=" btn btn-primary  text-uppercase" onClick={()=>{navigate(`/movers-edit-rates/${a._id}`)}} >Edit<i class="bi bi-chevron-right"></i></button>

                        </>)
                    }):<p>hi</p>
                }

                    
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default MoversViewRates
