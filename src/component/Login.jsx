import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "./Context";

const Login = () => {
    let {userLogin} = useContext(AuthContext)
    let [error, setError] = useState('')
    let handleLogin = (e) => {
        e.preventDefault()
       let form = new FormData(e.currentTarget)
       let email = form.get("email")
       let password = form.get("password")
       console.log(email,password)
       userLogin(email,password)
       .then(result => {
        console.log(result.user)
        e.target.reset()
       })
       .catch(error => {
        const errorMessage = error.message;
         console.log(errorMessage)
         setError('Your account is not available')
       })
    }
    return (
        <div className="bg-[#F3F3F3] ">
           <div className="w-[95%] md:w-[80%] mx-auto pb-16">
           <Navbar></Navbar>
           <div className="bg-white p-7 md:p-10 w-[98%] md:w-[70%] lg:w-[50%] mx-auto mt-9 rounded-md">
           <h2 className="text-3xl font-bold text-center md:pb-14 border-b-[1px]">Login your account</h2>
                     <form onSubmit={handleLogin} className="mt-12">
                       <p className="font-semibold mb-2">Email address</p> 
                      <label className="input  flex items-center rounded-md gap-2 mb-6 bg-[#F3F3F3]">
                        <input type="email" name="email" className="grow" placeholder="Email" />
                      </label>

                      <p className="font-semibold mb-2">Password</p> 
                      <label className="input  flex items-center gap-2 rounded-md bg-[#F3F3F3]">
                        <input type="password" name="password" className="grow" placeholder="Password" />
                      </label>
                      {error && <p className="mt-6 text-red-500">{error}</p>}
                      <input className="btn text-white  w-full mt-7 bg-[steelblue] rounded-md" type="submit" value="Login" />
                       <p className="text-center mt-3 text-[14px]">Do Not Have An Account ? <Link to="/register" className="text-blue-600">Register</Link></p>
                     </form>
              </div>
           </div>
        </div>
    );
};

export default Login;