import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext.js";

export const Navbar = () => {
  const { state, LOGOUT } = useContext(AuthContext);
  console.log(state,"stater");
  const [showProfile, setShowProfile] = useState(false);

  const handleShowProfile = () => {
    setShowProfile((prevValue) => !prevValue);
  };

  return (
    <div className="flex items-center justify-between bg-gray-800 text-white h-16 px-4 fixed top-0 left-0 w-full z-50">
      <Link to="/" className="flex items-center">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZBgOXbWE1con5DCIHEqamgnGBlEYgQXBEbA&s"
          alt="Home"
          className="h-8 w-8"
        />
      
      </Link>
      <Link to="/getcourse" className="ml-4 font-bold">
        Courses
      </Link>
      <Link to="/scheduleTime" className="ml-4 font-bold">
        Schedule Time
      </Link>
      
      
       <div className="text-xl text-slate-100 pr-4 md:pr-2" onClick={handleShowProfile}>
      <div className="cursor-pointer">
        {state?.user ? (
          <p className="border-slate-900 border rounded-full shadow-rose-900 drop-shadow w-9 h-9 bg-neutral-300 text-slate-900 text-2xl font-bold text-center">
            {/* <i className="fa-solid fa-user"></i> */}
            {state.user.firstname.slice(0, 1).toUpperCase()}
          </p>
        ) : (
          <p className="w-9 h-9">
            <i className="fa-solid fa-user"></i>
          </p>
        )}
      </div>
      {showProfile && (
              <div className="absolute flex flex-col mt-1 rounded right-2 bg-slate-600 text-white py-2 px-2 shadow drop-shadow">
                {state?.user?.email === process.env.REACT_APP_ADMIN_GMAIL && (
                  <Link to={'/admin'} className="whitespace-nowrap cursor-pointer">Admin Panel</Link>
                )}
                {state?.user?.firstname ? (
                  <p>
                    <p>{state?.user?.firstname.toUpperCase()}</p>
                    <button onClick={() => LOGOUT()}>LOGOUT</button>
                  </p>
                ) 
          
          : (
          <div className="flex flex-col">
              
              <Link to={'/login'} className="whitespace-nowrap cursor-pointer">Login</Link>
          
          </div>
          )}
        </div>
      )}
    </div>

    </div>
  );
};
