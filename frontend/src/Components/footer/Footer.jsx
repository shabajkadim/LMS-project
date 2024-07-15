import { Link } from "react-router-dom"

export const Footer=()=>{
    return(
        <div className={"w-full bg-black text-white "}>
     <div className=" md:w-2/5  m-auto pt-16">
       
       <div className="flex flex-wrap  justify-center gap-3 text-xl w-full m-auto font-medium text-slate-200">
        <p className="cursor-pointer">Home</p>
        <p className="cursor-pointer">Products</p>
        <p>Services</p>
        <p>Media</p>
        <p>Gallery</p>
        <p>Contact</p>
       </div>


       <div className="mt-8 pb-8  m-auto w-40  flex justify-around ">

        <Link to={"https://github.com/shabajkadim"} >
        <p className="w-8 h-8">
          <img className="w-full h-full rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZkTHDk9wFCnizM9J7jS8FQkSQkY3BPG_HvnkdetOYXw&s"/>
        </p>
        </Link>

        <Link to={"https://www.instagram.com/kadim_s_baj_18/"}>
        <p className="w-8 h-8">
          <img className="w-full h-full rounded-full" src="https://i.pinimg.com/736x/2c/da/19/2cda1925dcf4fb8f0644413f49671ffa.jpg" alt="instagram" />
        </p>
        </Link>

        <Link to={"https://www.facebook.com/shahabaj.kadim.9?mibextid=ZbWKwL"} >
          <p className="w-8 h-8">
            <img className="w-full h-full rounded-full" src="https://cdn.creazilla.com/illustrations/1719776/facebook-icon-flat-fb-logo-illustration-sm.png" />
          </p>
        </Link>

        <Link to={"https://www.linkedin.com/in/shahabaj-kadim-50752330b"}>
          <p className="w-8 h-8">
            <img className="w-full h-full rounded-full"  src="https://i.pinimg.com/564x/6b/ab/30/6bab3017350ca04c6fa05569672bd31e.jpg" />
          </p>
        </Link>
       </div>

      </div>
     </div>
    )
}