
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CrudPost = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    number: "",
    gender: "",
  });

  const { name, email, number, gender } = user;

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5456/data", user);
    console.log(user);
    navigate("/crud/get-data");
  };

  return (
    <div>
      <div className="container mt-5">
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            type="text"
            className="form-control mt-3"
            placeholder="Enter name"
            name="name"
            value={name}
            onChange={(e) => handleChange(e)}
          />

          <input
            type="text"
            className="form-control mt-3"
            placeholder="Enter email"
            name="email"
            value={email}
            onChange={(e) => handleChange(e)}
          />

          <input
            type="text"
            className="form-control mt-3"
            placeholder="Enter numner"
            name="number"
            value={number}
            onChange={(e) => handleChange(e)}
          />

          <select
            className="form-control mt-3"
            name="gender"
            value={gender}
            onChange={(e) => handleChange(e)}
          >
            <option value="" disabled selected>
              select gender
            </option>
            <option value="male">Male</option>
            <option value="female">FeMale</option>
          </select>

          <button className="btn btn-primary mt-3">Post Data</button>
        </form>
      </div>
    </div>
  );
};

export default CrudPost;
