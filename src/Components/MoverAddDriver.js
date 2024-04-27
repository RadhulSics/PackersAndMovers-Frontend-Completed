import React from 'react'
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../BaseUrl';
import { useFormik } from 'formik';
import { driverRegSchema } from './Schemas/Schemas';
import signimg from '../Images/packsign.jpg'
import { toast } from 'react-toastify';
import MoversNav from './MoversNav';


function MoverAddDriver() {

    const navigate = useNavigate();


    const onSubmit = (e) => {
        axiosInstance.post("/registerDriver",values)
    .then((response)=>{
        console.log("success",response)
        
        // alert("success")
        if (response.data.status===200) {
            navigate('/mover_view_drivers')
            toast.success('Profile created')
        }else if(response.data.status==405){
            toast.warning(response.data.msg)
        }
        else{
            toast.error('Registration Failed')

        }
    })
    .catch((error)=>{
        console.log("err",error)
        // alert("err")
        toast.error('Registration Failed')

    })
        console.log(values);
      };

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
        initialValues: {
            name: "",
            email: "",
            gender: "",
            contact: "",
            password: "",
            licenceNo: "",
            mid:localStorage.getItem("moversId"),
          },
          validationSchema: driverRegSchema,
          onSubmit,
    })

    console.log(values);

  return (
    <div>
        <MoversNav/>
       <div className="container-fluid py-5">
        <div className="container"  >
        <div className="border-start border-5 border-primary ps-5 mb-5">
                        <h6 className="text-primary text-uppercase">Mover</h6>
                        <h1 className="display-5 text-uppercase mb-0">Add Driver</h1>
                    </div>
            <div className="row gx-5">
                <div className="col-lg-5 mb-5 mb-lg-0" style={{minHeight:'400px'}} >
                    <div className="position-relative h-100">
                        <img className="position-absolute w-100 h-100 rounded" src={signimg} style={{objectFit:'contain', height:'400px', width:'100px'}} alt='' />
                    </div>
                </div>
                <div className="col-lg-7" style={{paddingTop:'2rem'}}>
                <form onSubmit={(e)=>{handleSubmit(e)}} >
                        <div className="row g-3">
                            <div className="col-6">
                                <input type="text" className="form-control bg-light border-0 px-4" placeholder="Your Name" style={{height:'55px'}} value={values.name} onChange={handleChange} onBlur={handleBlur} id='name' />
                                {errors.name && touched.name && (<p className="error">{errors.name}</p>)}
                            </div>
                            <div className="col-6" style={{marginBottom:'1rem'}} >
                                <input type="email" className="form-control bg-light border-0 px-4" placeholder="Your Email" style={{height:'55px'}} value={values.email} onChange={handleChange} onBlur={handleBlur} id='email'/>
                                {errors.email && touched.email && (<p className="error">{errors.email}</p>)}

                            </div>
                            <div className="col-6" style={{marginBottom:'1rem'}} >
                                <select className="form-control bg-light border-0 px-4" style={{height:'55px'}} name='gender' onChange={handleChange} onBlur={handleBlur}>
                                <option>Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                </select>
                                {errors.gender && touched.gender && (<p className="error">{errors.gender}</p>)}

                            </div>
                            <div className="col-6" style={{marginBottom:'1rem'}} >
                                <input type="number" className="form-control bg-light border-0 px-4" placeholder="Phonenumber" style={{height:'55px'}} value={values.contact} onChange={handleChange} onBlur={handleBlur} id='contact' min={1}/>
                                {errors.contact && touched.contact && (<p className="error">{errors.contact}</p>)}

                            </div>
                            <div className="col-6" style={{marginBottom:'1rem'}}>
                                <input type="password" className="form-control bg-light border-0 px-4" placeholder="Password" style={{height:'55px'}} value={values.password} onChange={handleChange} onBlur={handleBlur} id='password'/>
                                {errors.password && touched.password && (<p className="error">{errors.password}</p>)}

                            </div>
                            
                            <div className="col-6">
                                <input type='text' className="form-control bg-light border-0 px-4 py-3" placeholder="Licence Number" style={{height:'55px'}} value={values.licenceNo} onChange={handleChange} onBlur={handleBlur} id='licenceNo'/>
                                {errors.licenceNo && touched.licenceNo && (<p className="error">{errors.licenceNo}</p>)}

                            </div>
                            {/* <div className="col-6">
                                <input type='text' className="form-control bg-light border-0 px-4 py-3" placeholder="District" style={{height:'55px'}} value={values.district} onChange={handleChange} onBlur={handleBlur} id='district'/>
                                {errors.district && touched.district && (<p className="error">{errors.district}</p>)}

                            </div>
                            <div className="col-6">
                                <input type='number' className="form-control bg-light border-0 px-4 py-3" placeholder="Pincode" style={{height:'55px'}} value={values.pincode} onChange={handleChange} onBlur={handleBlur} id='pincode'/>
                                {errors.pincode && touched.pincode && (<p className="error">{errors.pincode}</p>)}

                            </div> */}
                            <div className="col-12">
                                <button className="btn btn-primary w-100 py-3" type="submit">Submit</button>
                                {/* <p className='mt-4 text-center' >Already have an account? <Link to='/packers-login' className='text_dec' >Login</Link> </p> */}
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

export default MoverAddDriver
