import React, { useState } from "react";

function Register() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [name, setname] = useState("");
  async function handleSubmit(e) {
    console.log(name, password, email);
    e.preventDefault();
    let res = await fetch("http://localhost:5000/api/users/register", {
      method: "POST",
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    let data = await res.json();
    console.log({ data });
    if (data) {
      console.log("sucuss");
      alert("Sucussfully registred");
    } else {
      console.log("error ocurred");
    }
  }
  return (
    <div>
      <div className="container my-3">
        <div className="row">
          <div className="col-md-6 order-md-2 p-5">
            <img
              src={"../images/Reg.jpg"}
              alt="Your image"
              className="img-fluid"
            />
          </div>
          <div className="col-md-6 order-md-1 p-5">
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Username
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="username"
                  value={name}
                  onChange={(e) => {
                    setname(e.target.value);
                  }}
                />
              </div>
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
                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>
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
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" htmlFor="exampleCheck1">
                  I Agree Terms and Conditions
                </label>
              </div>
              <button
                type="submit"
                className="btn btn-outline-primary w-100 mt-4 rounded-pill"
                onClick={handleSubmit}
              >
                Register
              </button>
              <div className="form-text mt-3 text-center">
                Already Have an account?
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;