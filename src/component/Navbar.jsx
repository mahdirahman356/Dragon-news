import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "./Context";

const Navbar = () => {
   let {userLogOut, user} = useContext(AuthContext)
  let handleLogOut = () => {
      userLogOut()
      .then(()=> {
        console.log('user is log outed')
      })
      .catch((error) => {
        console.log(error)
      });
      
  }
    return (
           <div className="flex justify-between items-center  py-6 ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className=" lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <li><a>Home</a></li>
      <li><a>About</a></li>
      <li><a>Career</a></li>
      </ul>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 gap-8">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/career">Career</NavLink>
      <NavLink to="/login">Login</NavLink>
     
    </ul>
  </div>
  <div className="navbar-end flex items-center">
     <div className="w-10 rounded-full mr-3">
          <img className="rounded-full"  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
</div>
     {
      user ?     <button onClick={handleLogOut}  className="btn bg-[steelblue] text-white">Log Out</button>
         :     <NavLink to="/login"><button className="btn bg-[steelblue] text-white">Login</button></NavLink>

     }
  </div>
</div>
     
    );
};

export default Navbar;