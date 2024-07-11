// import { useContext, useState } from "react"
// import { Link } from "react-router-dom"
// import { AuthContext } from "../context/AuthContext"

// export const Navbar=()=>{
//     const{state,LOGOUT}=useContext(AuthContext)

//     const[showProfile,setShowProfile]=useState(false)
//     const handleShowProfile = () => {
//         setShowProfile((prevValue) => !prevValue);
//       };
//     return(
//         <div >
//             <Link to='/'>
//             <div>
//                 {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZBgOXbWE1con5DCIHEqamgnGBlEYgQXBEbA&s" /> */}
//             <p>home</p>
//             </div>
//             </Link>

//             <div>Courses</div>
//             <div>Schedule-Time</div>
//             <div>
//                 {/* <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLKYamkRB_qMHdd_HvhrxBlHhExgcAW6Mquw&s"/> */}
//             <p>login</p>

//             <div className="text-xl text-slate-100 pr-4 md:pr-2" onClick={handleShowProfile}>
//           <div className="cursor-pointer">
//             {state?.user?.firstname ? (
//               <p className="border-slate-900 border rounded-full shadow-rose-900 drop-shadow w-9 h-9 bg-neutral-300 text-slate-900 text-2xl font-bold text-center">
//                 {state.user.firstname.slice(0, 1).toUpperCase()}
//               </p>
//             ) : (
//               <p>
//                 <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLKYamkRB_qMHdd_HvhrxBlHhExgcAW6Mquw&s"/>
//               </p>
//             )}
//           </div>
//           {showProfile && (
//             <div className="absolute flex flex-col mt-1 rounded right-2 bg-slate-600 text-white py-2 px-2 shadow drop-shadow">
//               {state?.user?.email === process.env.REACT_APP_ADMIN_GMAIL && (
//                 <Link to={'/admin'} className="whitespace-nowrap cursor-pointer">New Product</Link>
//               )}
//               {state?.user?.firstname ? (
//                 <p>
//                   <p>{state?.user?.firstname.toUpperCase()}</p>
//                   <button onClick={() => LOGOUT()}>LOGOUT</button>
//                 </p>
//               ) : (
//                 <Link to={'/login'} className="whitespace-nowrap cursor-pointer">Login</Link>
//               )}
//             </div>
//           )}
//         </div>
//             </div>
//         </div>
//     )
// }



// import { useContext, useState } from "react";
// import { Link } from "react-router-dom";
// import { AuthContext } from "../context/AuthContext";

// export const Navbar = () => {
//   const { state, LOGOUT } = useContext(AuthContext);
//   const [showProfile, setShowProfile] = useState(false);

//   const handleShowProfile = () => {
//     setShowProfile((prevValue) => !prevValue);
//   };

//   return (
//     <div className="flex items-center justify-between bg-gray-800 text-white h-8 px-4">
//       <Link to="/" className="flex items-center">
//         <img
//           src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZBgOXbWE1con5DCIHEqamgnGBlEYgQXBEbA&s"
//           alt="Home"
//           className="h-6 w-6"
//         />
//         <p className="ml-2">Home</p>
//       </Link>
//       <Link to="/addcourse" className="ml-4">
//         Courses
//       </Link>
//       <Link to="/scheduleTime" className="ml-4">
//         Schedule Time
//       </Link>
//       <div className="flex items-center ml-4 relative">
//         <p onClick={handleShowProfile} className="cursor-pointer">
//           {state?.user?.firstname ? (
//             <span className="border-slate-900 border rounded-full shadow-rose-900 drop-shadow w-6 h-6 bg-neutral-300 text-slate-900 text-sm font-bold flex items-center justify-center">
//               {state.user.firstname.slice(0, 1).toUpperCase()}
//             </span>
//           ) : (
//             <img
//               src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLKYamkRB_qMHdd_HvhrxBlHhExgcAW6Mquw&s"
//               alt="Login"
//               className="h-6 w-6"
//             />
//           )}
//         </p>
//         {showProfile && (
//           <div className="absolute flex flex-col mt-1 rounded right-0 bg-slate-600 text-white py-2 px-2 shadow drop-shadow">
//             {state?.user?.email === process.env.REACT_APP_ADMIN_GMAIL && (
//               <Link to={'/admin'} className="whitespace-nowrap cursor-pointer">New Product</Link>
//             )}
//             {state?.user?.firstname ? (
//               <div>
//                 <p>{state?.user?.firstname.toUpperCase()}</p>
//                 <button onClick={() => LOGOUT()} className="text-red-400">LOGOUT</button>
//               </div>
//             ) : (
//               <Link to={'/login'}  className="whitespace-nowrap cursor-pointer">Login</Link>
//             )}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };


import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext.js";

export const Navbar = () => {
  const { state, LOGOUT } = useContext(AuthContext);
  const [showProfile, setShowProfile] = useState(false);

  const handleShowProfile = () => {
    setShowProfile((prevValue) => !prevValue);
  };

  return (
    <div className="flex items-center justify-between bg-gray-800 text-white h-10 px-4 fixed top-0 left-0 w-full z-50">
      <Link to="/" className="flex items-center">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZBgOXbWE1con5DCIHEqamgnGBlEYgQXBEbA&s"
          alt="Home"
          className="h-6 w-6"
        />
        <p className="ml-2">Home</p>
      </Link>
      <Link to="/addcourses" className="ml-4">
        Courses
      </Link>
      <Link to="/scheduleTime" className="ml-4">
        Schedule Time
      </Link>
      
      {/* <div className="flex items-center ml-4  relative">
        <p onClick={handleShowProfile} className="cursor-pointer">
          {state?.user?.firstname ? (
            <span className="border-slate-900 border rounded-full shadow-rose-900 drop-shadow w-6 h-6 bg-neutral-300 text-slate-900 text-sm font-bold flex items-center justify-center">
              {state.user.firstname.slice(0, 1).toUpperCase()}
            </span>
          ) : (
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLKYamkRB_qMHdd_HvhrxBlHhExgcAW6Mquw&s"
              alt="Login"
              className="h-6 w-6"
            />
          )}
        </p>
        {showProfile && (
          <div className="absolute flex flex-col mt-1 rounded right-0 bg-slate-600 text-white py-2 px-2 shadow drop-shadow">
            {state?.user?.email === process.env.REACT_APP_ADMIN_GMAIL && (
              <Link to={'/admin'} className="whitespace-nowrap cursor-pointer">Admin Panel</Link>
            )}
            {state?.user?.firstname ? (
              <div>
                <p>{state?.user?.firstname.toUpperCase()}</p>
                <button onClick={() => LOGOUT()} className="text-red-400">LOGOUT</button>
              </div>
            ) : (
              <Link to={'/login'} className="whitespace-nowrap cursor-pointer">Login</Link>
            )}
          </div>
        )}
      </div> */}

      {/* <div>
      <Link to="/login">
      Login
      </Link> */}
      

      {/* <div className="text-xl text-slate-100 pr-4 md:pr-2" onClick={handleShowProfile}>
          <div className="cursor-pointer">
            {state?.user?.firstname ? (
              <p className="border-slate-900 border rounded-full shadow-rose-900 drop-shadow w-9 h-9 bg-neutral-300 text-slate-900 text-2xl font-bold text-center">
                {state.user.firstname.slice(0, 1).toUpperCase()}
              </p>
            ) : (
              <p>
                <i className="fa-solid fa-user"></i>
              </p>
            )}
          </div>
          {showProfile && (
            <div className="absolute flex flex-col mt-1 rounded right-2 bg-slate-600 text-white py-2 px-2 shadow drop-shadow">
              {state?.user?.email === process.env.REACT_APP_ADMIN_GMAIL && (
                <Link to={'/new-product'} className="whitespace-nowrap cursor-pointer">New Product</Link>
              )}
              {state?.user?.firstname ? (
                <p>
                  <p>{state?.user?.firstname.toUpperCase()}</p>
                  <button onClick={() => LOGOUT()}>LOGOUT</button>
                </p>
              ) : (
                <Link to={'/login'} className="whitespace-nowrap cursor-pointer">Login</Link>
              )}
            </div>
          )}
        </div> */}
       <div className="text-xl text-slate-100 pr-4 md:pr-2" onClick={handleShowProfile}>
      <div className="cursor-pointer">
        {state?.user ? (
          <p className="border-slate-900 border rounded-full shadow-rose-900 drop-shadow w-9 h-9 bg-neutral-300 text-slate-900 text-2xl font-bold text-center">
            <i className="fa-solid fa-user"></i>
          </p>
        ) : (
          <p>
            <i className="fa-solid fa-user"></i>
          </p>
        )}
      </div>
      {showProfile && (
        <div className="absolute flex flex-col mt-1 rounded right-2 bg-slate-600 text-white py-2 px-2 shadow drop-shadow">
          {state?.user ? (
            <button onClick={() => LOGOUT()} className="whitespace-nowrap cursor-pointer">LOGOUT</button>
          ) : (
            <Link to={'/login'} className="whitespace-nowrap cursor-pointer">Login</Link>
          )}
        </div>
      )}
    </div>

    </div>
  );
};
