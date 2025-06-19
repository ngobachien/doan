import React, { useState } from 'react';
import './LoginForm.css';

const LoginForm = () => {
  const [backgroundImage, setBackgroundImage] = useState('https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80');

  const changeBackground = () => {
    setBackgroundImage('https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80');
  };

  return (
    <div className="login-wrapper" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="login-container">
        <h2 className="text-2xl mb-4">Classy Login Form</h2>
        <form>
          <div className="mb-4">
            <input type="text" placeholder="Username" className="p-2 w-full rounded" />
          </div>
          <div className="mb-4">
            <input type="password" placeholder="Password" className="p-2 w-full rounded" />
          </div>
          <div className="mb-4 flex justify-between">
            <label>
              <input type="checkbox" className="mr-2" /> Remember me
            </label>
            <a href="#" className="text-blue-300">Forgot Password?</a>
          </div>
          <button type="submit" className="login-btn p-2 w-full rounded mb-4">Login</button>
          <div className="mb-4">or</div>
          <div>
            <button className="social-btn facebook-btn" onClick={changeBackground}>Change Background</button>
            <button className="social-btn twitter-btn">Twitter</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;