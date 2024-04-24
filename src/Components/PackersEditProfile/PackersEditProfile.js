import React, { useEffect, useState } from 'react';
import img from '../../Images/profileEdit.jpg';
import PackersNav from '../PackersNav/PackersNav';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axiosInstance from '../../BaseUrl';

function PackersEditProfile() {
    const [value, setValue] = useState({});
    const [phoneNumberValid, setPhoneNumberValid] = useState(true);
    const [pincodeValid, setPincodeValid] = useState(true);
    const navigate = useNavigate();

    const id = localStorage.getItem("packerId");

    useEffect(() => {
        axiosInstance.post(`/viewPackerById/${id}`)
            .then((res) => {
                setValue(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [id]);

    const updatefcn = (e) => {
        e.preventDefault();

        if (!phoneNumberValid) {
            toast.warning('Phone number must be exactly 10 digits');
            return;
        }

        if (!pincodeValid) {
          toast.warning('Pincode must be exactly 6 digits');
            return;
        }

        axiosInstance.post(`/editPackerById/${id}`, value)
            .then((response) => {
                if (response.data.status === 200) {
                    toast.success('Profile Updated');
                    navigate('/packers-profile');
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const changefn = (e) => {
        setValue({ ...value, [e.target.name]: e.target.value });
    };

    const handlePhoneNumberChange = (e) => {
        const phoneNumber = e.target.value.replace(/\D/g, ''); // Remove non-digit characters
        setPhoneNumberValid(phoneNumber.length === 10);
        setValue({ ...value, contact: phoneNumber });
    };

    const handlePincodeChange = (e) => {
        const pincode = e.target.value.replace(/\D/g, ''); // Remove non-digit characters
        setPincodeValid(pincode.length === 6);
        setValue({ ...value, pincode });
    };

    return (
        <div>
            <PackersNav />
            <div className="container-fluid py-5">
                <div className="container">
                    <div className="border-start border-5 border-primary ps-5 mb-5">
                        <h6 className="text-primary text-uppercase">update</h6>
                        <h1 className="display-5 text-uppercase mb-0">Edit Profile</h1>
                    </div>
                    <div className="row gx-5">
                        <div className="col-lg-5 mb-5 mb-lg-0" style={{ minHeight: '400px' }}>
                            <div className="position-relative h-100">
                                <img className="position-absolute w-100 h-100 rounded" src={img} style={{ objectFit: 'contain', height: '400px', width: '100px' }} alt='' />
                            </div>
                        </div>
                        <div className="col-lg-7" style={{ paddingTop: '2rem' }}>
                            <form onSubmit={updatefcn}>
                                <div className="row g-3">
                                    <div className="col-6">
                                        <input type="text" className="form-control bg-light border-0 px-4" placeholder="Your Name" style={{ height: '55px' }} value={value.name} name="name" onChange={changefn} id='name' />
                                    </div>
                                    <div className="col-6" style={{ marginBottom: '1rem' }} >
                                        <input type="email" className="form-control bg-light border-0 px-4" placeholder="Your Email" style={{ height: '55px' }} value={value.email} name="email" onChange={changefn} id='email' />
                                    </div>
                                    <div className="col-6" style={{ marginBottom: '1rem' }} >
                                        <input type="text" className="form-control bg-light border-0 px-4" style={{ height: '55px' }} value={value.gender} name="gender" onChange={changefn} id='gender' disabled />
                                    </div>
                                    <div className="col-6" style={{ marginBottom: '1rem' }} >
                                        <input type="text" className="form-control bg-light border-0 px-4" placeholder="Phonenumber" style={{ height: '55px' }} value={value.contact} name="contact" onChange={handlePhoneNumberChange} id='contact' />
                                    </div>
                                    <div className="col-6" style={{ marginBottom: '1rem' }} >
                                        <input type="number" className="form-control bg-light border-0 px-4" placeholder="Pincode" style={{ height: '55px' }} value={value.pincode} name="pincode" onChange={handlePincodeChange} id='pincode' />
                                    </div>
                                    <div className="col-6">
                                        <input type='text' className="form-control bg-light border-0 px-4 py-3" placeholder="City" style={{ height: '55px' }} value={value.city} name="city" onChange={changefn} id='city' />
                                    </div>
                                    <div className="col-6">
                                        <input type='text' className="form-control bg-light border-0 px-4 py-3" placeholder="District" style={{ height: '55px' }} value={value.district} name="district" onChange={changefn} id='district' />
                                    </div>
                                    <div className="col-12">
                                        <button className="btn btn-primary w-100 py-3" type="submit">Update Profile</button>
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

export default PackersEditProfile;
