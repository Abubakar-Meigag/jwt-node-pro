import React, { useState } from "react";
import axios from "axios";
import { Link} from "react-router-dom";

function Login() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  
  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:5080/api/auth";
      const { data: res } = await axios.post(url, data);
        localStorage.setItem('token', res.data);
        window.location = '/'
      console.log(res.message);
    } catch (error) {
        console.log(error);
        console.log("Error status:", error.response.status);
        console.log("Error message:", error.response.data.message);
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
      <div className="bg-white  p-3 rounded w-25">
        <h2 className="mb-2">Log in</h2>

        <form onSubmit={handleSubmit}>

          <div className="mb-3">
            <label htmlFor="Email">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              value={data.email}
              onChange={handleChange}
              required
              className="form-control rounded-0"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="Password">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              name="password"
              value={data.password}
              onChange={handleChange}
              required
              className="form-control rounded-0"
            />
          </div>

          {error && <span className="text-danger">{error}</span>}

          <button type="submit" className="btn btn-success w-100 rounded-0">
            <strong>Login</strong>
          </button>
          <p className="mt-2">You are agree to our terms and policies</p>
          <Link
            to="/signup"
            className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none"
          >
            Sign Up
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
