import React, { useEffect } from 'react'
import MoversNav from './MoversNav'
import { useNavigate, useParams } from 'react-router-dom'
import PackersNav from './PackersNav/PackersNav';
import axiosInstance from '../BaseUrl';
import { luggageSchema } from './Schemas/Schemas';
import { toast } from 'react-toastify';
import { useFormik } from 'formik';

function MoversAddLuggage() {

    const mid=useParams();
    const pid=localStorage.getItem('packerId')

    const navigate=useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();
      
        axiosInstance.post('/addLuggage',values)
        .then((res)=>{
          console.log(res);
          if(res.data.status==200){
            // toast.success('Order placed')
            // localStorage.setItem('moversId',res.data.data._id)
            navigate(`/movers-payments/${res.data.data._id}`)
          }else if(res.data.status==500){
            toast.error(res.data.msg)
          }
        })
        .catch((err)=>{
          console.log(err);
          toast.error(' failed')
        })
    
      console.log(values);
    };
  
    const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
      useFormik({
        initialValues: {
            pid:pid,
            mid:mid.id,
            fromcity:'',
            fromlmark:'',
            fromstreet:'',
            fromdistrict:'',
            fromhname:'',
            tocity:'',
            tolmark:'',
            todistrict:'',
            tostreet:'',
            tohname:'',
            boxes:'',
            vehicle:'',
            weight:'',
            distance:'',
            comments:'',
            date:'',
            time:'',
            type:'',
            rate:'',
            godownDays:''
        },
        validationSchema: luggageSchema,
        onSubmit,
      });

    //   useEffect(()=>[
    //     console.log(pid),
    //     console.log(mid)
    //   ])

    console.log(values);


  return (
    <div>
      <PackersNav/>

      <div class="container-fluid pt-5">
        <div class="container">
        <form onSubmit={(onSubmit)} >
        <div class="col-lg-6">
                <select class="form-select form-control bg-light border-0 px-4"  style={{height:'55px'}} name='type' id='type' onChange={handleChange} onBlur={handleBlur} >
                    <option selected disabled>Household type</option>
                    <option value="1rk">1rk</option>
                    <option value="2bhk">2bhk</option>
                    <option value="3bhk">3bhk</option>
                    <option value="3bhk+">3bhk+</option>
                </select>
        </div>
        {errors.type && touched.type && (<p className="error">{errors.type}</p>)}

        <div class="row g-5">
        
            
                <div class="col-lg-6">
                    <label><h4>FROM</h4></label>
                        <div class="row g-3">
                        
                            <div class="col-12">
                                <input type="text" class="form-control bg-light border-0 px-4" placeholder="House Name" name='fromhname' id='fromhname' onChange={handleChange} onBlur={handleBlur} style={{height:'55px'}} />
                            </div>
                            {errors.fromhname && touched.fromhname && (<p className="error">{errors.fromhname}</p>)}

                            <div class="col-6">
                                <input type="text" class="form-control bg-light border-0 px-4" placeholder="District" name='fromdistrict' id='fromdistrict' onChange={handleChange} onBlur={handleBlur} style={{height:'55px'}} />
                            </div>
                            {errors.fromdistrict && touched.fromdistrict && (<p className="error">{errors.fromdistrict}</p>)}

                            <div class="col-6">
                                <input type="text" class="form-control bg-light border-0 px-4" placeholder="City" name='fromcity' id='fromcity' onChange={handleChange} onBlur={handleBlur} style={{height:'55px'}} />
                            </div>
                            {errors.fromcity && touched.fromcity && (<p className="error">{errors.fromcity}</p>)}

                            <div class="col-6">
                                <input type="text" class="form-control bg-light border-0 px-4" placeholder="Street" name='fromstreet' id='fromstreet' onChange={handleChange} onBlur={handleBlur} style={{height:'55px'}} required />
                            </div>
                            {/* {errors.fromstreet && touched.fromstreet && (<p className="error">{errors.fromstreet}</p>)} */}

                            <div class="col-6">
                                <input type="text" class="form-control bg-light border-0 px-4" placeholder="Landmark" name='fromlmark' id='fromlmark' onChange={handleChange} onBlur={handleBlur} style={{height:'55px'}} required />
                            </div>
                            {/* {errors.fromlmark && touched.fromlmark && (<p className="error">{errors.fromlmark}</p>)} */}

                            <label><h4>TO</h4></label>
                            <div class="col-12">
                                <input type="text" class="form-control bg-light border-0 px-4" placeholder="House Name" name='tohname' id='tohname' onChange={handleChange} onBlur={handleBlur} style={{height:'55px'}} />
                            </div>
                            {errors.tohname && touched.tohname && (<p className="error">{errors.tohname}</p>)}

                            <div class="col-6">
                                <input type="text" class="form-control bg-light border-0 px-4" placeholder="District" name='todistrict' id='todistrict' onChange={handleChange} onBlur={handleBlur} style={{height:'55px'}} />
                            </div>
                            {errors.todistrict && touched.todistrict && (<p className="error">{errors.todistrict}</p>)}

                            <div class="col-6">
                                <input type="text" class="form-control bg-light border-0 px-4" placeholder="City" name='tocity' id='tocity' onChange={handleChange} onBlur={handleBlur} style={{height:'55px'}} />
                            </div>
                            {errors.tocity && touched.tocity && (<p className="error">{errors.tocity}</p>)}

                            <div class="col-6">
                                <input type="text" class="form-control bg-light border-0 px-4" placeholder="Street" name='tostreet' id='tostreet' onChange={handleChange} onBlur={handleBlur} style={{height:'55px'}} required />
                            </div>
                            {/* {errors.tostreet && touched.tostreet && (<p className="error">{errors.tostreet}</p>)} */}

                            <div class="col-6">
                                <input type="text" class="form-control bg-light border-0 px-4" placeholder="Landmark" name='tolmark' id='tolmark' onChange={handleChange} onBlur={handleBlur} style={{height:'55px'}} required />
                            </div>
                            {/* {errors.tolmark && touched.tolmark && (<p className="error">{errors.tolmark}</p>)} */}
                        </div>
                    
                </div>
                <div class="col-lg-6">

                        <div class="row g-3">
                            
                            <div class="col-6">
                                <label style={{height:'55px'}}>Do you have any any vehicle to shift?</label>
                            </div>
                            <div class="col-6">
                                <input class="form-check-input" type="radio" name="vehicle" id="vehicle" onChange={handleChange} onBlur={handleBlur} value={true} style={{marginRight:'8px'}}  />
                                <label class="form-check-label" for="flexRadioDefault1" style={{marginRight:'8px'}}>
                                        Yes
                                </label>
                                <input class="form-check-input" type="radio" name="vehicle" id="vehicle" onChange={handleChange} onBlur={handleBlur} value={false} style={{marginRight:'8px'}}/>
                                <label class="form-check-label" for="flexRadioDefault1">
                                        No
                                </label>
                            </div>
                            <div class="col-6">
                                <label>Do you want any godown facility? If yes how many days do you want.</label>
                            </div>
                            <div class="col-6">
                                <input type="number" class="form-control bg-light border-0 px-4" placeholder='eg: 3' name='godownDays' id='godownDays' min="0" onChange={handleChange} onBlur={handleBlur} style={{height:'55px'}} />
                            </div>
                            <div class="col-6">
                                <label>Do you have any extra boxes? If yes enter the number of boxes</label>
                            </div>
                            <div class="col-6">
                                <input type="number" class="form-control bg-light border-0 px-4" placeholder='eg: 2' name='boxes' id='boxes' min="0" onChange={handleChange} onBlur={handleBlur} style={{height:'55px'}} />
                            </div>
                            <div class="col-6">
                                <label>Enter the weight of the boxes (in kg).</label>
                            </div>
                            <div class="col-6">
                                <input type="number" class="form-control bg-light border-0 px-4" placeholder='eg: 5' name='weight' id='weight' min="0" onChange={handleChange} onBlur={handleBlur} style={{height:'55px'}} />
                            </div>
                            
                            <div class="col-6">
                                <label>Select date</label>
                            </div>
                            
                            <div class="col-6">
                                <input type="date" class="form-control bg-light border-0 px-4" placeholder='eg: 5' name='date' id='date' onChange={handleChange} onBlur={handleBlur} style={{height:'55px'}} />

                            </div>
                            {errors.date && touched.date && (<p className="error">{errors.date}</p>)}

                            <div class="col-6">
                                <label>Select time</label>
                            </div>
                            <div class="col-6">
                                <input type="time" class="form-control bg-light border-0 px-4" placeholder='eg: 5' name='time' id='time' onChange={handleChange} onBlur={handleBlur} style={{height:'55px'}} />
                            </div>
                            {errors.time && touched.time && (<p className="error">{errors.time}</p>)}

                            <div class="col-6">
                                <input type="number" class="form-control bg-light border-0 px-4" placeholder='Total distance in km' name='distance' id='distance' min="1" onChange={handleChange} onBlur={handleBlur} style={{height:'55px'}} />
                            </div>
                            {errors.distance && touched.distance && (<p className="error">{errors.distance}</p>)}

                            <div class="col-6">
                                <input type="text" class="form-control bg-light border-0 px-4" placeholder='Comments' name='comments' id='comments' onChange={handleChange} onBlur={handleBlur} style={{height:'55px'}} />
                            </div>
                            {/* <div class="col-12">
                                <textarea class="form-control bg-light border-0 px-4 py-3" rows="8" placeholder="Message"></textarea>
                            </div> */}
                            {/* <div class="col-12">
                                <button class="btn btn-primary w-100 py-3" type="submit">Send Message</button>
                            </div> */}
                        </div>
                    
                </div>
                <div class="col-12">
                                <button class="btn btn-primary w-100 py-3" type="submit">Book</button>
                            </div>
            </div>

            </form>
        </div>
    </div>

     

    </div>
  )
}

export default MoversAddLuggage
