
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';

const Register = () => {    
  const router = useNavigate();
  const [data, setData] = useState({ firstname: "",  email: "", password: "", confirmPassword: "" });

  function handleChange(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      if (data.firstname  && data.email && data.password && data.confirmPassword) {
        if (data.password === data.confirmPassword) {
          // const response={data:{success:true , message:"Sign up Successfull" , token:"kjsahgdfkjj"}}
          const response = await axios.post(`${process.env.REACT_APP_SERVER_DOMAIN}/api/v1/auth/register`,{data});
          if (response.data.success === true) {
            toast(response.data.message);
            setData({ firstname: "",  email: "", password: "", confirmPassword: "" });
            localStorage.setItem("my-tokendata", JSON.stringify(response.data.token));
            router('/login');
          }
        } else {
          toast("Password and confirm password do not match");
        }
      } else {
        toast("All fields are required");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="bg-blue-100 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-sm p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">Register</h2>
        <form onSubmit={handleSubmit}>
          <label className="block text-blue-700 font-bold mb-2"> Name:</label>
          <input
            type="text"
            name="firstname"
            value={data.firstname}
            onChange={handleChange}
            className="w-full px-3 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your first name"
          />


          <label className="block text-blue-700 font-bold mb-2">Email:</label>
          <input
            type="email"
            name="email"
            value={data.email}
            onChange={handleChange}
            className="w-full px-3 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your email"
          />

          <label className="block text-blue-700 font-bold mb-2">Password:</label>
          <input
            type="password"
            name="password"
            value={data.password}
            onChange={handleChange}
            className="w-full px-3 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your password"
          />

          <label className="block text-blue-700 font-bold mb-2">Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            value={data.confirmPassword}
            onChange={handleChange}
            className="w-full px-3 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Confirm your password"
          />

          <button
            type="submit"
            className="w-full bg-yellow-500 text-blue-700 font-bold py-2 rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-blue-700">
          Already have an account? <Link to="/login" className="text-yellow-500 hover:underline">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;


// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import toast from 'react-hot-toast';

// const Register = () => {    
//   const router = useNavigate();
//   const [data, setData] = useState({ firstname: "", lastname: "", email: "", password: "", confirmPassword: "" });

//   function handleChange(e) {
//     setData({ ...data, [e.target.name]: e.target.value });
//   }

//   async function handleSubmit(event) {
//     event.preventDefault();
//     try {
//       if (data.firstname && data.lastname && data.email && data.password && data.confirmPassword) {
//         if (data.password === data.confirmPassword) {
//           const response = await axios.post(`${process.env.REACT_APP_SERVER_DOMAIN}/api/v1/auth/register`, { data });
//           if (response.data.success === true) {
//             toast(response.data.message);
//             setData({ firstname: "", lastname: "", email: "", password: "", confirmPassword: "" });
//             localStorage.setItem("my-tokendata", JSON.stringify(response.data.token));
//             router('/login');
//           }
//         } else {
//           toast("Password and confirm password do not match");
//         }
//       } else {
//         toast("All fields are required");
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   return (
//     <div className="bg-gradient-to-b from-green-900 via-blue-700 to-red-400 min-h-screen flex items-center justify-center">
//       <div className="w-full max-w-sm p-8 bg-gradient-to-b from-green-900 via-blue-700 to-red-400 shadow-xl rounded-lg">
//         <h2 className="text-3xl font-bold text-white mb-6">Register</h2>
//         <form onSubmit={handleSubmit}>
//           <label className="block text-white font-semibold mb-2">First Name:</label>
          
//           <input
//             type="text"
//             name="firstname"
//             value={data.firstname}
//             onChange={handleChange}
//             className="w-full px-4 py-2 mb-4  border rounded-lg focus:outline-none focus:ring-2 focus:ring-white text-white  placeholder-white border-white bg-transparent"
//             placeholder="Enter your first name"
//           />
//           <label className="block text-white font-semibold mb-2">Last Name:</label>
//           <input
//             type="text"
//             name="lastname"
//             value={data.lastname}
//             onChange={handleChange}
//             className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-white text-white placeholder-white border-white bg-transparent"
//             placeholder="Enter your last name"
//           />

//           <label className="block text-white font-semibold mb-2">Email:</label>
//           <input
//             type="email"
//             name="email"
//             value={data.email}
//             onChange={handleChange}
//             className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-white text-white placeholder-white border-white bg-transparent"
//             placeholder="Enter your email"
//           />

//           <label className="block text-white font-semibold mb-2">Password:</label>
//           <input
//             type="password"
//             name="password"
//             value={data.password}
//             onChange={handleChange}
//             className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-white text-white placeholder-white border-white bg-transparent"
//             placeholder="Enter your password"
//           />

//           <label className="block text-white font-semibold mb-2">Confirm Password:</label>
//           <input
//             type="password"
//             name="confirmPassword"
//             value={data.confirmPassword}
//             onChange={handleChange}
//             className="w-full px-4 py-2 mb-6 border rounded-lg focus:outline-none focus:ring-2 focus:ring-white text-white placeholder-white border-white bg-transparent"
//             placeholder="Confirm your password"
//           />

//           <button
//             type="submit"
//             className="w-full bg-black text-white font-bold py-2 rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-600 transition-colors"
//           >
//             Sign Up
//           </button>
//         </form>
//         <p className="mt-4 text-white">
//           Already have an account? <Link to="/login" className="text-white hover:underline">Login</Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Register;
