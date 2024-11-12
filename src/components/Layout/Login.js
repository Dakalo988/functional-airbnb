import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:5000/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (response.ok) {
      localStorage.setItem('token', data.token);
      navigate('/Viewlist');
    } else {
      console.error(data.message);
    }
  };

  return (
    <div className="login">
      <img src="data:image/png;base64,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" alt="Airbnb logo" className="login_logo" />
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="login_field">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" onChange={handleChange} />
        </div>
        <div className="login_field">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" onChange={handleChange} />
        </div>
        <div className="login_forgot">
          <a href="/forgot-password">Forgot Password?</a>
        </div>
        <button type="submit" className="login_button">Login</button>
      </form>
      <div className="signup_prompt">
        <span>Don't have an account? </span>
        <a href="/SignUp">Sign up</a>
      </div>
    </div>
  );
};

export default Login;
