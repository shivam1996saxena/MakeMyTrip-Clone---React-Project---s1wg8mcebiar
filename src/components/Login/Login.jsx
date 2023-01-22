import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const [userEmail, setUserEmail] = useState("shivamsaxena1996@outlook.com");
  const [userPass, setUserPass] = useState("1234");

  localStorage.setItem("email", userEmail);
  localStorage.setItem("password", userPass);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Please enter email and password");
    } else if (
      email === localStorage.getItem("email") &&
      password === localStorage.getItem("password")
    ) {
      navigate("/Master");
    } else {
      alert("Incorrect email or password. Please try again.");
    }
  };

  return (
    <div className='card'>
      <form>
        <h2 className='title'>Log in</h2>
        <p className='subtitle'>
          Don't have an account? <a href='#'>sign Up</a>
        </p>

        <div className='social-login'>
          <button className='google-btn'>
            <img
              alt='Google'
              src='https://pixlok.com/wp-content/uploads/2021/04/Google-Icon-PNG-768x768.jpg'
            />
            <p className='btn-text'>Sign in with Google</p>
          </button>
          <button className='fb-btn'>
            <img
              alt='FB'
              src='https://e7.pngegg.com/pngimages/670/159/png-clipart-facebook-logo-social-media-facebook-computer-icons-linkedin-logo-facebook-icon-media-internet.png'
            />
          </button>
        </div>

        <p className='or'>
          <span>or</span>
        </p>

        <div className='email-login'>
          <label htmlFor='email'>
            <b>Email</b>
          </label>
          <input
            type='text'
            placeholder='Enter Email'
            name='uname'
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor='psw'>
            <b>Password</b>
          </label>
          <input
            type='password'
            placeholder='Enter Password'
            name='psw'
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className='cta-btn' onClick={handleSubmit}>
          Log In
        </button>
        <a className='forget-pass' href='#'>
          Forgot password?
        </a>
        {error && <p className='error'>{error}</p>}
      </form>
    </div>
  );
};

export default Login;
