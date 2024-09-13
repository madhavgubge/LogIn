// import React, { useEffect } from "react";
// import axios from "axios";

// const CrudHome = () => {
//   useEffect(() => {
//     loadUser();
//   }, []);

//   const loadUser = async () => {
//     const result = await axios.get("http://localhost:5555/data");
//     console.log(result.data);
//   };

//   return (
//     <div>
//       <h1>Hello</h1>
//     </div>
//   );
// };

// export default CrudHome;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const CrudHome = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get("http://localhost:5456/data");
    setUser(result.data.reverse());
  };

  return (
    <div>
      <div className="container mt-5">
        <Link to="/crud/get-data">
          {" "}
          <button className="btn btn-primary mt-5 mb-3">Add Data</button>
        </Link>
        <table className="table table-bordered table-striped">
          <thead className="table-primary">
            <tr>
              <th>S.No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Number</th>
              <th>Gender</th>
            </tr>
          </thead>
          <tbody>
            {user.map((data, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>{data.number}</td>
                <td>{data.gender}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CrudHome;