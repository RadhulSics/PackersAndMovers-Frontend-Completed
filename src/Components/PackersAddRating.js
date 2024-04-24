import React, { useState } from "react";
import PackersNav from "./PackersNav/PackersNav";
import { useNavigate, useParams } from "react-router-dom";
import Lottie from "lottie-react";
import img from "./Assets/rating.json";
import axiosInstance from "../BaseUrl";
import { toast } from "react-toastify";

function PackersAddRating() {
  const id = useParams();
  console.log(id.id);
  const [rating, setrating] = useState({rating:"", id:id.id});
  const [review, setreviews] = useState({review:'',id:id.id});
  const navigate = useNavigate();

  const doSubmit = (e) => {
    e.preventDefault();
    console.log(rating);
    console.log(review);
    axiosInstance
      .post("/addReview", review)
      .then((res) => {
        console.log(res);
        if (res.status == 200) {
          toast.success("Added Reviews");
        } 
      })
      .catch((err) => {
        console.log(err);
        toast.error("failed");
      });
      axiosInstance
      .post("/addRating", rating)
      .then((res) => {
        console.log(res);
        if (res.status == 200) {
          toast.success("Rating");
        } 
      })
      .catch((err) => {
        console.log(err);
        toast.error("Login failed");
      });
  };

  return (
    <div>
      <PackersNav />
      <div className="container-fluid py-5">
        <div className="container">
          <div className="border-start border-5 border-primary ps-5 mb-5">
            <h6 className="text-primary text-uppercase">Add Rating &</h6>
            <h1 className="display-5 text-uppercase mb-0">Review</h1>
          </div>
          <div className="row gx-5">
            <div
              className="col-lg-5 mb-5 mb-lg-0"
              style={{ minHeight: "400px" }}
            >
              <div className="position-relative h-100">
                <Lottie animationData={img} />
                {/* <img className="position-absolute w-100 h-100 rounded" src={loginimg} style={{objectFit:'cover', height:'400px', width:'100px'}} alt='' /> */}
              </div>
            </div>
            <div className="col-lg-7" style={{ paddingTop: "2rem" }}>
              <form onSubmit={doSubmit} >
                <div className="row g-3">
                  {/* <div className="col-10" style={{marginBottom:'1rem'}} >
                                <label>Add Rating (out of 5)</label>
                                <input type="email" className="form-control bg-light border-0 px-4" placeholder="eg : 5" style={{height:'55px'}} value={rating} onChange={(e)=>{setrating(e.target.value)}}/>
                            </div> */}
                  {/* <div className="col-2" style={{ marginBottom: "3rem" }}>
                    <button class="btn btn-success">Add</button>
                  </div> */}
                  <div className="col-10" style={{ marginBottom: "1rem" }}>
                    <label>Add Review</label>
                    <textarea
                      type="text"
                      className="form-control bg-light border-0 px-4"
                      placeholder="write your review"
                      style={{ height: "55px" }}
                      onChange={(e)=>{setreviews({...review,review:e.target.value})}}

                    />
                  </div>
                  {/* <div className="col-2" style={{ marginBottom: "3rem" }}>
                    <button class="btn btn-success">Add</button>
                  </div> */}

                  <div className="col-12" style={{ marginBottom: "1rem" }}>
                  <label>Add Rating</label>

                    <div class="rating">
                      <input
                        id="rating1"
                        type="radio"
                        name="rating"
                        value="1"
                        onChange={(e)=>{setrating({...rating,rating:e.target.value})}}
                      />
                      <label for="rating1">1</label>
                      <input
                        id="rating2"
                        type="radio"
                        name="rating"
                        value="2"
                        onChange={(e)=>{setrating({...rating,rating:e.target.value})}}

                      />
                      <label for="rating2">2</label>
                      <input
                        id="rating3"
                        type="radio"
                        name="rating"
                        value="3"
                        onChange={(e)=>{setrating({...rating,rating:e.target.value})}}

                      />
                      <label for="rating3">3</label>
                      <input
                        id="rating4"
                        type="radio"
                        name="rating"
                        value="4"
                        onChange={(e)=>{setrating({...rating,rating:e.target.value})}}

                      />
                      <label for="rating4">4</label>
                      <input
                        id="rating5"
                        type="radio"
                        name="rating"
                        value="5"
                        onChange={(e)=>{setrating({...rating,rating:e.target.value})}}

                      />
                      <label for="rating5">5</label>
                    </div>
                  </div>

                  <div className="col-12">
                                <button className="btn btn-primary w-100 py-3" type="submit">add</button>
                            </div>
                  {/* <div className="col-12 d-flex justify-content-between">
                                <p className='mt-4 text-center' >Don't have an account? <Link to='/movers-reg' className='text_dec' >Sign up</Link> </p>
                                <p className='mt-4 text-center' > <Link to='/movers-forgot-pass' className='text_dec' >Forgot password?</Link> </p>

                            </div> */}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PackersAddRating;
