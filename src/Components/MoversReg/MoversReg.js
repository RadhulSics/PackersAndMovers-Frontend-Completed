import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import signimg from "../../Images/packsign.jpg";
import Navs from "../Nav/Navs";
import { moversRegSchema } from "../Schemas/Schemas";
import axios from "axios";
import { toast } from "react-toastify";
import axiosInstance from "../../BaseUrl";

function MoversReg() {

  const navigate=useNavigate();

  let keralaDistricts = [
    {id:0,
      name:'Select District'
    },
    {
      id: 1,
      name: "Thiruvananthapuram",
      cities: [
        { name: "Trivandrum", pincode: "695001" },
        { name: "Kovalam", pincode: "695527" },
        { name: "Neyyattinkara", pincode: "695121" },
        // Add more cities and pin codes as needed
      ],
    },
    {
      id: 2,
      name: "Kollam",
      cities: [
        { name: "Kollam", pincode: "691001" },
        { name: "Punalur", pincode: "691305" },
        { name: "Karunagappally", pincode: "690518" },
        // Add more cities and pin codes as needed
      ],
    },
    {
      id: 3,
      name: "Pathanamthitta",
      cities: [
        { name: "Pathanamthitta", pincode: "689645" },
        { name: "Adoor", pincode: "691523" },
        { name: "Thiruvalla", pincode: "689101" },
        // Add more cities and pin codes as needed
      ],
    },
    {
      id: 4,
      name: "Alappuzha",
      cities: [
        { name: "Alappuzha", pincode: "688011" },
        { name: "Chengannur", pincode: "689121" },
        { name: "Ambalappuzha", pincode: "688561" },
        // Add more cities and pin codes as needed
      ],
    },
    {
      id: 5,
      name: "Kottayam",
      cities: [
        { name: "Kottayam", pincode: "686001" },
        { name: "Changanassery", pincode: "686101" },
        { name: "Pala", pincode: "686575" },
        // Add more cities and pin codes as needed
      ],
    },
    {
      id: 6,
      name: "Idukki",
      cities: [
        { name: "Idukki", pincode: "685602" },
        { name: "Thodupuzha", pincode: "685584" },
        { name: "Munnar", pincode: "685612" },
        // Add more cities and pin codes as needed
      ],
    },
    {
      id: 7,
      name: "Ernakulam",
      cities: [
        { name: "Kochi", pincode: "682011" },
        { name: "Kothamangalam", pincode: "686691" },
        { name: "Aluva", pincode: "683101" },
        // Add more cities and pin codes as needed
      ],
    },
    {
      id: 8,
      name: "Thrissur",
      cities: [
        { name: "Thrissur", pincode: "680001" },
        { name: "Chalakudy", pincode: "680307" },
        { name: "Kodungallur", pincode: "680664" },
        // Add more cities and pin codes as needed
      ],
    },
    {
      id: 9,
      name: "Palakkad",
      cities: [
        { name: "Palakkad", pincode: "678001" },
        { name: "Ottapalam", pincode: "679101" },
        { name: "Chittur", pincode: "678101" },
        // Add more cities and pin codes as needed
      ],
    },
    {
      id: 10,
      name: "Malappuram",
      cities: [
        { name: "Malappuram", pincode: "676505" },
        { name: "Manjeri", pincode: "676121" },
        { name: "Tirur", pincode: "676101" },
        // Add more cities and pin codes as needed
      ],
    },
    {
      id: 11,
      name: "Kozhikode",
      cities: [
        { name: "Kozhikode", pincode: "673001" },
        { name: "Vadakara", pincode: "673101" },
        { name: "Balussery", pincode: "673612" },
        // Add more cities and pin codes as needed
      ],
    },
    {
      id: 12,
      name: "Wayanad",
      cities: [
        { name: "Kalpetta", pincode: "673121" },
        { name: "Sulthan Bathery", pincode: "673592" },
        { name: "Mananthavady", pincode: "670645" },
        // Add more cities and pin codes as needed
      ],
    },
    {
      id: 13,
      name: "Kannur",
      cities: [
        { name: "Kannur", pincode: "670001" },
        { name: "Thalassery", pincode: "670101" },
        { name: "Payyannur", pincode: "670307" },
        // Add more cities and pin codes as needed
      ],
    },
    {
      id: 14,
      name: "Kasargod",
      cities: [
        { name: "Kasargod", pincode: "671121" },
        { name: "Kanhangad", pincode: "671315" },
        { name: "Manjeshwar", pincode: "671323" },
        // Add more cities and pin codes as needed
      ],
    },
  ];


  const onSubmit = () => {

    const updatedValues = {
      ...values,
      city: selectedCityName,
      district: selectedDistrict,
      pincode: selectedCityPincode,
    };

    console.log(updatedValues);
    
    
      axiosInstance.post('/registerMover',updatedValues)
      .then((res)=>{
        console.log(res);
        if(res.data.status==200){
          toast.success('Movers signup completed')
          localStorage.setItem('moversId',res.data.data._id)
          navigate('/movers-details')
        }else if(res.data.status==401){
          toast.error(res.data.msg)
        }else if(res.data.status==405){
          toast.warning(res.data.msg)
      }
        else{
          toast.error('Registration failed')
        }
      })
      .catch((err)=>{
        console.log(err);
        toast.error('Registration failed')
      })
  
  };

  const [selectedDistrict, setSelectedDistrict] = useState(null);
  const [selectedCity, setSelectedCity] = useState([]);
  const [selectedCityName, setSelectedCityName] = useState(null);
  const [selectedCityPincode, setSelectedCityPincode] = useState(null);

  const handleDistrictChange = (e) => {
    const districtId = e.target.value;

    setSelectedDistrict(districtId);



    // Find the selected district
    const selectedDistrictData = keralaDistricts.find(
      (district) => district.name === districtId
    );

    console.log("selectedDistrictData", selectedDistrictData);

    // Set the cities for the selected district
    setSelectedCity(selectedDistrictData.cities?selectedDistrictData.cities:[]);
    console.log("city", selectedCity);
  };
  useEffect(() => {
    console.log("city", selectedCity);
  });

  const handleCityChange = (e) => {
    const cityName = e.target.value;
    setSelectedCityName(cityName);

    // Find the selected city
    const selectedCityData = selectedCity.find(
      (city) => city.name === cityName
    );

    // Set the pincode for the selected city
    setSelectedCityPincode(selectedCityData.pincode);
  };



  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        name:'',
        regno:'',
        aadhar:'',
        city:'',
        district:'',
        contact:'',
        email:'',
        password:'',
        pincode:'',
      },
      validationSchema: moversRegSchema,
      onSubmit,
    });

  return (
    <div>
      <Navs/>
      <div className="container-fluid py-5">
        <div className="container">
          <div className="border-start border-5 border-primary ps-5 mb-5">
            <h6 className="text-primary text-uppercase">Movers</h6>
            <h1 className="display-5 text-uppercase mb-0">Sign Up</h1>
          </div>
          <div className="row gx-5">
            <div
              className="col-lg-5 mb-5 mb-lg-0"
              style={{ minHeight: "400px" }}
            >
              <div className="position-relative h-100">
                <img
                  className="position-absolute w-100 h-100 rounded"
                  src={signimg}
                  style={{
                    objectFit: "contain",
                    height: "400px",
                    width: "100px",
                  }}
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-7" style={{ paddingTop: "2rem" }}>
              <form onSubmit={(e)=>{handleSubmit(e)}}>
                <div className="row g-3">
                  <div className="col-12">
                    <input
                      type="text"
                      className="form-control bg-light border-0 px-4"
                      placeholder="Company Name"
                      style={{ height: "55px" }}
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      id="name"
                    />
                    {errors.name && touched.name && (
                      <p className="error">{errors.name}</p>
                    )}
                  </div>
                  <div className="col-6">
                    <input
                      type="text"
                      className="form-control bg-light border-0 px-4"
                      placeholder="Reg No"
                      style={{ height: "55px" }}
                      value={values.regno}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      id="regno"
                    />
                    {errors.regno && touched.regno && (
                      <p className="error">{errors.regno}</p>
                    )}
                  </div>
                  <div className="col-6">
                    <input
                      type="email"
                      className="form-control bg-light border-0 px-4"
                      placeholder="Email"
                      style={{ height: "55px" }}
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      id="email"
                    />
                    {errors.email && touched.email && (
                      <p className="error">{errors.email}</p>
                    )}
                  </div>
                  <div className="col-6" style={{ marginBottom: "1rem" }}>
                    <input
                      type="text"
                      className="form-control bg-light border-0 px-4"
                      placeholder="Aadhar number of owner"
                      style={{ height: "55px" }}
                      value={values.aadhar}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      id="aadhar"
                    />
                    {errors.aadhar && touched.aadhar && (
                      <p className="error">{errors.aadhar}</p>
                    )}
                  </div>
                  <div className="col-6">
                    <input
                      type="number"
                      className="form-control bg-light border-0 px-4"
                      placeholder="Contact"
                      style={{ height: "55px" }}
                      value={values.contact}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      id="contact"
                      min={1}
                    />
                    {errors.contact && touched.contact && (
                      <p className="error">{errors.contact}</p>
                    )}
                  </div>

                  <div className="col-6">
                    {/* <input type='text' className="form-control bg-light border-0 px-4 py-3" placeholder="District" style={{height:'55px'}} value={values.district} onChange={handleChange} onBlur={handleBlur} id='district'/>
                                {errors.district && touched.district && (<p className="error">{errors.district}</p>)} */}
                    <select onChange={handleDistrictChange} name="district" required className="form-control bg-light border-0 px-4">
                      {keralaDistricts.map((district) => (
                        <option key={district.id} value={district.name}>
                          {district.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="col-6">
                    {/* <input type='text' className="form-control bg-light border-0 px-4 py-3" placeholder="District" style={{height:'55px'}} value={values.district} onChange={handleChange} onBlur={handleBlur} id='district'/>
                                {errors.district && touched.district && (<p className="error">{errors.district}</p>)} */}
                    <select onChange={handleCityChange} name="city" required className="form-control bg-light border-0 px-4">
                    <option>Select City</option>

                      {selectedCity.length ? (
                        selectedCity.map((district) => {
                          return (
                            <option key={district.id} value={district.name}>
                              {district.name}
                            </option>
                          );
                        })
                      ) : (
                        ''
                      )}
                    </select>
                  </div>
                  
                  <div className="col-6">
                    <input
                      type="text"
                      className="form-control bg-light border-0 px-4 py-3"
                      placeholder="Pincode"
                      style={{ height: "55px" }}
                      value={selectedCityPincode}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      id="pincode"
                      disabled
                    />
                  </div>
                  {/* <div className="col-6" style={{ marginBottom: "1rem" }}>
                    <select
                      className="form-control bg-light border-0 px-4"
                      style={{ height: "55px" }}
                      name="godown"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    >
                      <option>Godown facility</option>
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                    </select>
                    {errors.godown && touched.godown && (
                      <p className="error">{errors.godown}</p>
                    )}
                  </div> */}
                  <div className="col-6" style={{ marginBottom: "1rem" }}>
                    <input
                      type="password"
                      className="form-control bg-light border-0 px-4"
                      placeholder="Password"
                      style={{ height: "55px" }}
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      id="password"
                    />
                    {errors.password && touched.password && (
                      <p className="error">{errors.password}</p>
                    )}
                  </div>
                  {/* <div className="col-11" style={{ marginBottom: "1rem" }}>
                    <input
                      type="text"
                      className="form-control bg-light border-0 px-4"
                      placeholder="Coverage area"
                      style={{ height: "55px" }}
                      value={values.area}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      id="area"
                    />
                  </div>
                  <div className="col-1">
                    <button
                      type="button"
                      className="add_btn"
                      onClick={(e) => {
                        setCoverage(false);
                        const newIteam = [...item, values.area];
                        setItems(newIteam);
                        console.log(item);
                        setCoverage(true);
                      }}
                    >
                      <span>
                        <i className="ri-add-circle-line span_btn"></i>
                      </span>
                    </button>
                  </div>
                  {errors.area && touched.area && (
                    <p className="error">{errors.area}</p>
                  )}
                  <div>
                    <div className="container text-center">
                      <div className="row">
                        {coverage &&
                      item.map((data, index) => { return (
                        <div className="col "><p class='area_des'>{data}</p ></div>
                      )})}
                      </div>
                    </div>
                    
                  </div> */}
                  <div className="col-12">
                    <button className="btn btn-primary w-100 py-3" type="submit">
                      Sign Up
                    </button>
                    <p className="mt-4 text-center">
                      Already have an account?{" "}
                      <Link to="/movers-login" className="text_dec">
                        Login
                      </Link>
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoversReg;
