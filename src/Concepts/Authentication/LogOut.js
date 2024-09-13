import React, { useState } from "react";
import './LogOut.css';
const LogOut = () => {
  const [user, setuser] = useState({
    name: "",
    email: "",
    number: "",
    password: "",
    confirmpassword: "",
  });

  const { name, email, number, password, confirmpassword } = user;

  const handleChange = (e) => {
    setuser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };
  return (
    <div>
      <div className="container">
        <div className="card login_card">
          <div className="row">
            <div className="col-md-5 m-auto">
              <img
                src="https://img.freepik.com/free-vector/forgot-password-concept-illustration_114360-1123.jpg?t=st=1725945427~exp=1725949027~hmac=bdffe7f1925146af4d03c7b7e60d4aff56de9181b12803d8bd7dad9719b82e71&w=740"
                className="img-fluid"
              />
            </div>
            <div className="col-md-7 m-auto">
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Name"
                  value={name}
                  name="name"
                  onChange={handleChange}
                />
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter Email"
                  value={email}
                  name="email"
                  onChange={handleChange}
                />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Number"
                  value={number}
                  name="number"
                  onChange={handleChange}
                />
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter Password"
                  value={password}
                  name="password"
                  onChange={handleChange}
                />
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter Confirm Password"
                  value={confirmpassword}
                  name="confirmpassword"
                  onChange={handleChange}
                />
                <button className="btn">Submit </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogOut;