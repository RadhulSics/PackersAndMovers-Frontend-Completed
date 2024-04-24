import React, { useEffect, useState } from "react";
import PackersNav from "./PackersNav/PackersNav";
import img from "../Images/payment.jpg";
import { toast } from "react-toastify";
import axiosInstance from "../BaseUrl";
import { useNavigate, useParams } from "react-router-dom";
import { useFormik } from "formik";
import { BookingSchema } from "./Schemas/Schemas";

function MoversPatment() {
  const [bookingDetails, setbookingDetails] = useState({});
  const [cardNumber, setCardNumber] = useState("");
  const navigate=useNavigate();

  const id = useParams();

  useEffect(() => {
    axiosInstance
      .post(`/viewBooking/${id.id}`)
      .then((res) => {
        console.log(res);
        setbookingDetails(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const onSubmit = (e) => {
    // e.preventDefault();

      const mover_id = localStorage.getItem("moversId");

      axiosInstance
        .post(`/updatePayment/${id.id}`, values)
        .then((res) => {
          console.log(res);
          if (res.data.status === 200) {
            toast.success("Order placed");
            navigate('/packers-orders')
          } else {
            toast.error("Failed");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        cardHolderName: "",
        cardNo: "",
        cvv: "",
        month: "",
        year: "",
        aadhar:""
      },
      validationSchema: BookingSchema,
      onSubmit,
    });

  // const navigate=useNavigate();

  // const doAdd = (e) => {
  //   e.preventDefault();

  //   const values = { paymenttype: "card", paymentStatus: true };
  //   console.log(values);
  //   const mover_id = localStorage.getItem("moversId");

  //   axiosInstance
  //     .post(`/updatePayment/${id}`, values)
  //     .then((res) => {
  //       console.log(res);
  //       if (res.data.status == 200) {
  //         toast.success("Successfully Added");
  //       } else {
  //         toast.error("Failed");
  //       }
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  return (
    <div>
      <PackersNav />
      <div
        class="container-fluid bg-testimonial py-5 "
        style={{ minHeight: "800px" }}
      >
        <div class="container py-5 align-items-center">
          <div class="row justify-content-center align-items-center">
            <div class="col-lg-7">
              <div class="owl-carousel testimonial-carousel bg-white p-5">
                <div class="testimonial-item text-center">
                  {/* <div class="position-relative mb-4">
                                <img class="img-fluid mx-auto" src="img/testimonial-1.jpg" alt=""/>
                                <div class="position-absolute top-100 start-50 translate-middle d-flex align-items-center  bg-white" style={{width:'45px',height:'45px'}}>
                                </div>
                            </div> */}
                  {/* <form onSubmit={onSubmit}>
                    <div class="col-12">
                      <h2>Total Amount : {bookingDetails.rate}</h2>
                      <input
                        type="number"
                        className="form-control bg-dark text-light border-0 px-4"
                        placeholder="Card number"
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                        required
                      />{" "}
                    </div>
                    <p class="mt-2">Enter your 16 digit card number</p>
                    <button type="submit" class="btn btn-success">
                      Pay
                    </button>
                  </form> */}
                  <form onSubmit={(e)=>{handleSubmit(e)}}>
                  <div class="row g-3">
                  <h2>Total Amount : {bookingDetails.rate}</h2>
                    <div class="col-md-6">
                      <div class="form-floating">
                        <input
                          type="text"
                          class="form-control"
                          value={values.cardHolderName}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          id="cardHolderName"
                          placeholder="Your Name"
                          required
                        />

                        <label for="name">Card Holder Name</label>
                      </div>
                      {errors.cardHolderName && touched.cardHolderName && (
                      <span className="err">{errors.cardHolderName}</span>
                    )}
                    </div>
                    

                    <div class="col-md-6">
                      <div class="form-floating">
                        <input
                          type="number"
                          class="form-control"
                          value={values.cardNo}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          id="cardNo"
                          placeholder="Your Name"
                          required
                        />

                        <label for="cardNo">Card Number</label>
                      </div>
                      {errors.cardNo && touched.cardNo && (
                        <span className="err">{errors.cardNo}</span>
                      )}
                    </div>
                    <div class="col-md-6">
                      <div class="form-floating">
                        <input
                          type="number"
                          class="form-control"
                          value={values.cvv}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          id="cvv"
                          placeholder="Your Name"
                          required
                        />

                        <label for="email">CVV</label>
                      </div>
                      {errors.cvv && touched.cvv && (
                        <span className="err">{errors.cvv}</span>
                      )}
                    </div>

                    <div class="col-md-6">
                      <div class="form-floating">
                        {/* <input type="number" class="form-control"  id="contact" placeholder="Expiry"/> */}
                        <div class="form-group">
                          <div class="row">
                            <div class="col-4">
                              <label for="email">Expiry</label>
                            </div>
                            <div class="col-4">
                              <label for="email">Month</label>
                              <select
                                class="form-control"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                name="month"
                                id="month"
                                required
                              >
                                <option>Month</option>
                                <option value="January">January</option>
                                <option value="February">February</option>
                                <option value="March">March</option>
                                <option value="April">April</option>
                                <option value="May">May</option>
                                <option value="June">June</option>
                                <option value="July">July</option>
                                <option value="August">August</option>
                                <option value="September">September</option>
                                <option value="October">October</option>
                                <option value="November">November</option>
                                <option value="December">December</option>
                              </select>
                            </div>
                            <div class="col-4">
                              <label for="email">Year</label>
                              <select
                                class="form-control"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                name="year"
                                id="year"
                                required
                              >
                                <option>Year</option>
                                <option value="2023">2023</option>
                                <option value="2024">2024</option>
                                <option value="2025">2025</option>
                                <option value="2026">2026</option>
                                <option value="2027">2027</option>
                                <option value="2028">2028</option>
                                <option value="2029">2029</option>
                                <option value="2030">2030</option>
                                <option value="2031">2031</option>
                                <option value="2032">2032</option>
                                <option value="2033">2033</option>
                                <option value="2034">2034</option>
                                <option value="2035">2035</option>
                                <option value="2036">2036</option>
                                <option value="2037">2037</option>
                                <option value="2038">2038</option>
                                <option value="2039">2039</option>
                                <option value="2040">2040</option>
                                <option value="2041">2041</option>
                                <option value="2042">2042</option>
                                <option value="2043">2043</option>
                                <option value="2044">2044</option>
                                <option value="2045">2045</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* <div class="col-md-12">
                      <div class="form-floating">
                        <input
                          type="password"
                          class="form-control"
                          id="password"
                          placeholder="Password"
                        />
                        <label for="email">Your Password</label>
                      </div>
                    </div>

                    <div class="col-md-6">
                      <div class="form-floating">
                        <input
                          type="text"
                          class="form-control"
                          id="city"
                          placeholder="Your City"
                        />
                        <label for="email">Your City</label>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-floating">
                        <input
                          type="text"
                          class="form-control"
                          id="country"
                          placeholder="Your Country"
                        />
                        <label for="email">Your Country</label>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-floating">
                        <input
                          type="number"
                          class="form-control"
                          id="pincode"
                          placeholder="Your Pincode"
                        />
                        <label for="email">Your Pincode</label>
                      </div>
                    </div> */}

                    <div class="col-12">
                      <button
                        class="btn btn-primary w-100 py-3"
                        style={{ backgroundColor: "#FEA116", border: "none" }}
                        type="submit"
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoversPatment;
