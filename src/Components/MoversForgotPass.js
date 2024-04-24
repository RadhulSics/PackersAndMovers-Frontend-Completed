import React from 'react'
import Navs from './Nav/Navs'
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../BaseUrl';
import { useFormik } from 'formik';
import { forgotPasswordScheme } from './Schemas/Schemas';
import { toast } from 'react-toastify';
import loginimg from '../Images/packlogin.jpg'

function MoversForgotPass() {

    const navigate=useNavigate();

    const onSubmit=(e)=>{
        e.preventDefault();

        axiosInstance.post("/forgotPwdMover",values)
        .then((response)=>{
            console.log(response);
            
            if (response.status===200) {
                toast.success("Updated Successfully")
                navigate("/movers-login")
            }else{
                alert("Failed... Check your email")
            }
        })
        .catch((err)=>{
            console.log('error',err);
            toast.error("Failed... Check your email")  
              })

    }

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
        initialValues: {
            email: "",
            password: "",
          },
          validationSchema: forgotPasswordScheme,
          onSubmit,
          
    })

  return (
    <div>
        <Navs/>
      <div className="container-fluid py-5">
        <div className="container"  >
        <div className="border-start border-5 border-primary ps-5 mb-5">
                        <h6 className="text-primary text-uppercase">Movers</h6>
                        <h1 className="display-5 text-uppercase mb-0">Forgot Password</h1>
                    </div>
            <div className="row gx-5">
                <div className="col-lg-5 mb-5 mb-lg-0" style={{minHeight:'400px'}} >
                    <div className="position-relative h-100">
                    
                        <img className="position-absolute w-100 h-100 rounded" src={loginimg} style={{objectFit:'cover', height:'400px', width:'100px'}} alt='' />
                    </div>
                </div>
                <div className="col-lg-7" style={{paddingTop:'2rem'}}>
                <form onSubmit={(e)=>{handleSubmit(e)}} >
                        <div className="row g-3">
                            
                            <div className="col-12" style={{marginBottom:'1rem'}} >
                                <input type="email" className="form-control bg-light border-0 px-4" placeholder="Your Email" style={{height:'55px'}} value={values.email} onChange={handleChange} onBlur={handleBlur} id="email" />
                                {errors.email && touched.email && (<span className="error">{errors.email}</span>)}

                            </div>
                            <div className="col-12" style={{marginBottom:'1rem'}}>
                                <input type="password" className="form-control bg-light border-0 px-4" placeholder="New password" style={{height:'55px'}} value={values.password} onChange={handleChange} onBlur={handleBlur} id="password" />
                                {errors.password && touched.password && (<p className="error">{errors.password}</p>)}

                            </div>
                            
                            <div className="col-12">
                                <button className="btn btn-primary w-100 py-3" type="submit">Login</button>
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

export default MoversForgotPass
