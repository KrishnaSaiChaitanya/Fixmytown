// import { json } from "body-parser";
import { Button } from "primereact/button";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [Loading, setLoading] = useState(false);
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const handleSubmit = async (e) => {
    setLoading(true);
    console.log(email, password);
    e.preventDefault();
    let res = await fetch("http://localhost:5000/api/users/login", {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    let data = await res.json();
    console.log(data);
    if (res.status === 200) {
      alert("Login successfully");
      setLoading(false);
      // console.log(res.data.token);
      localStorage.setItem("token", JSON.stringify(data.token));
      localStorage.setItem("user", JSON.stringify(data.token));
      navigate("/user/dashboard");
    } else {
      console.log("errorr");
    }
  };
  return (
    <div>
      <div className="container my-3">
        <div className="row">
          <div className="col-md-6 p-5 d-flex align-items-center justify-content-center">
            <img
              src={"../images/login.jpg"}
              alt="Your image"
              style={{ width: "100%", maxHeight: "100%" }}
            />
          </div>
          <div className="col-md-6 p-5 d-flex align-items-center">
            <div className="w-100">
              <h1 className="display-6 fw-bolder mb-5">LOGIN</h1>
              <form>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    name="email"
                    value={email}
                    onChange={(e) => {
                      setemail(e.target.value);
                    }}
                  />
                  {/* <div id="emailHelp" className="form-text">
                    We'll never share your email with anyone else.
                  </div> */}
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    name="password"
                    value={password}
                    onChange={(e) => {
                      setpassword(e.target.value);
                    }}
                  />
                </div>

                <div className="p-3 pb-2 flex align-item-center justify-content-center">
                  <Button
                    loading={Loading}
                    label="Submit"
                    rounded
                    className="w-5"
                    onClick={(e) => {
                      handleSubmit(e);
                    }}
                  />
                </div>

                {/* <button
                  type="submit"
                  className="btn btn-primary w-100 mt-4 rounded-pill"
                >
                  Login
                </button> */}
                <div
                  className="form-text"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  Don't have an account ? {"   "}
                  <Link to="/register" style={{ textDecoration: "none" }}>
                    register here
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
