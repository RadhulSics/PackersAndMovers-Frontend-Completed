import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import loginimg from "../../Images/adminlogin.jpg";
import { toast } from "react-toastify";

function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let mail = "admin";
  let pass = "admin123";

  let navigate = useNavigate();

  const doLogin = (e) => {
    e.preventDefault();

    // const values={email: email, password: password}
    // console.log(values);
    if (mail == email && pass == password) {
      toast.success("Loggedin Successfully");
      localStorage.setItem('admin', 1)
      navigate("/admin-dashboard");
    } else {
      toast.error("Username or Password is incorrect");
    }
  };
  return (
    <div>
      <div>
        <div className="container-fluid py-5">
          <div className="container">
            <div className="border-start border-5 border-primary ps-5 mb-5">
              <h6 className="text-primary text-uppercase">Admin</h6>
              <h1 className="display-5 text-uppercase mb-0">Login</h1>
            </div>
            <div className="row gx-5">
              <div
                className="col-lg-5 mb-5 mb-lg-0"
                style={{ minHeight: "400px" }}
              >
                <div className="position-relative h-100">
                  <img
                    className="position-absolute w-100 h-100 rounded"
                    src={loginimg}
                    style={{
                      objectFit: "cover",
                      height: "400px",
                      width: "100px",
                    }}
                    alt=""
                  />
                </div>
              </div>
              <div className="col-lg-7" style={{ paddingTop: "2rem" }}>
                <form onSubmit={doLogin}>
                  <div className="row g-3">
                    <div className="col-12" style={{ marginBottom: "1rem" }}>
                      <input
                        type="text"
                        className="form-control bg-light border-0 px-4"
                        placeholder="Username"
                        style={{ height: "55px" }}
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                        autoComplete="off"
                      />
                    </div>
                    <div className="col-12" style={{ marginBottom: "1rem" }}>
                      <input
                        type="password"
                        className="form-control bg-light border-0 px-4"
                        placeholder="Password"
                        style={{ height: "55px" }}
                        value={password}
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                        autoComplete="new-password"
                      />
                    </div>

                    <div className="col-12">
                      <button
                        className="btn btn-primary w-100 py-3"
                        type="submit"
                      >
                        Login
                      </button>
                      {/* <p className='mt-4 text-center' >Don't have an account? <Link to='/movers-reg' className='text_dec' >Sign up</Link> </p> */}
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;
