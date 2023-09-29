import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function SignUp() {
    const [data, setData] = useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
    });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const url = "http://localhost:5080/api/users";
          const { data: res } = await axios.post(url, data);
          navigate("/login");
          console.log(res.message);
        } catch (error) {
          if (
            error.response &&
            error.response.status >= 400 &&
            error.response.status <= 500
          ) {
            setError(error.response.data.message);
          }
        }
    }

  return (
    <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
      <div className="bg-white  p-3 rounded w-25">
        <h2 className="mb-2">Sign Up</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="First Name">
              <strong>First Name</strong>
            </label>
            <input
              type="text"
              placeholder="Enter your first name"
              name="firstName"
              value={data.firstName}
              onChange={handleChange}
              required
              className="form-control rounded-0"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="Last Name">
              <strong>Last Name</strong>
            </label>
            <input
              type="text"
              placeholder="Enter your last name"
              name="lastName"
              value={data.lastName}
              onChange={handleChange}
              required
              className="form-control rounded-0"
            />
          </div>

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
            <strong>Sign up</strong>
          </button>
          <p className="mt-2">You are agree to our terms and policies</p>
          <Link
            to="/login"
            className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none"
          >
            <strong>Login</strong>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default SignUp