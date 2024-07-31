import axios from 'axios';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/authContext';

const Login = () => {
  const router = useNavigate();
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const { LOGIN } = useContext(AuthContext);

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (loginData.email && loginData.password) {
        // const response={data:{success:true , message:"Sign up Successfull" , token:"kjsahgdfkjj"}}
        const response = await axios.post(`${process.env.REACT_APP_SERVER_DOMAIN}/api/v1/auth/login` ,{ loginData });
        if (response.data.success === true) {
          localStorage.setItem("token", JSON.stringify(response.data.token));
          localStorage.setItem("user", JSON.stringify(response.data.user));  // Save user data to localStorage
          LOGIN(response.data.user);
          toast(response.data.message);
          setLoginData({ email: "", password: "" });
          router('/');

          
        }
      } else {
        toast("All fields are required");
      }
    } catch (error) {
      console.log(error);
      toast( "please check password or email");
      // router('/register');
    }
  };

  return (
    <div className="bg-blue-100 min-h-screen flex items-center justify-center">
    <div className="w-full max-w-sm p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold text-blue-700 mb-4">Login</h2>
      <form onSubmit={handleSubmit}>

        <label className="block text-blue-700 font-bold mb-2">Email:</label>
        <input
          type="email"
          name="email"
          value={loginData.email}
          onChange={handleChange}
          className="w-full px-3 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Enter your email"
        />

        <label className="block text-blue-700 font-bold mb-2">Password:</label>
        <input
          type="password"
          name="password"
          value={loginData.password}
          onChange={handleChange}
          className="w-full px-3 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Enter your password"
        />

        

        <button
          type="submit"
          className="w-full bg-yellow-500 text-blue-700 font-bold py-2 rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        >
          Login
        </button>
      </form>
      <p className="mt-4 text-blue-700">
      Don't have an account? <Link to="/register" className="text-yellow-500 hover:underline">Register</Link>
      </p>
    </div>
  </div>  );
};

export default Login;
