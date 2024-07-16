import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext.js";
import toast from "react-hot-toast";
import logo from './../project-image/logo.jpg'

export const Navbar = (isActive) => {
  const { state, LOGOUT } = useContext(AuthContext);
  // console.log(state,"stater");
  const [showProfile, setShowProfile] = useState(false);
  const [showMenu,setShowMenu]=useState(false)
  
  const router=useNavigate()

  const handleShowMenu=()=>{
    setShowMenu((prevalue)=>!prevalue)
  }
  const handleShowProfile = () => {
    setShowProfile((prevValue) => !prevValue);
  };

  function handleScheduleClick(){
    if(state?.user){
      router('/scheduleTime')
    }else{
      toast("Please login first")
      setTimeout(()=>{
        router('/login')
      },5000)
    }
  }

  return (
    <div className="flex items-center justify-between bg-gray-800 text-white h-16 px-4 fixed top-0 left-0 w-full z-50 drop-shadow-lg">
      <div className="flex items-center" >
    
        <img
          src={logo}
          alt="Home"
          className="h-10 w-10"
        />
      </div>
      
        <div>
           <div className="hidden md:block md:flex justify-around  text-center  w-96 ">
              <p><Link to="/" className="  font-bold text-center  pl-2 pr-2 pb-2 h-full shadow  hover:shadow-gray-300 ">Home</Link></p>
              <p onClick={handleScheduleClick } className="shadow hover:shadow-gray-100 pl-2 pr-2 pb-2 font-bold cursor-pointer  ">Schedule Time</p>
              <p><Link to='aboute' className="shadow hover:shadow-gray-100 pl-2 pr-2 pb-2 font-bold"  >About </Link></p>
            </div>

            <div onClick={()=>handleShowMenu()} className="md:hidden w-full flex justify-end">
               <div ><i class="fa-solid fa-bars"></i></div>
                  {showMenu &&(
                    <div className="absolute w-[150px] p-2 font-bold  rounded-md gap-2 bg-slate-600 text-white mt-[28px]">
                        <div>
                          <Link to='/'>Home</Link>
                        </div>
                        <div onClick={handleScheduleClick }>
                          <Link to='scheduleTime'>Schedule Time</Link>
                        </div>
                        <div>
                          <Link to='aboute'>Aboute</Link>
                        </div>
                        
                    </div>
                  )}  
            </div>
        </div>

      <div className="text-xl text-slate-100 pr-4 md:pr-2" onClick={handleShowProfile}>
      
           <div className="cursor-pointer">
        {state?.user ? (
          <p className="border-slate-900 border rounded-full shadow-rose-900 drop-shadow w-9 h-9 bg-neutral-300 text-slate-900 text-2xl font-bold text-center">
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
