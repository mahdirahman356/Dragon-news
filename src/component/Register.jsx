import { useContext, useState } from "react";
import Navbar from "./Navbar";
import { AuthContext } from "./Context";

const Register = () => {
     let {createUser} = useContext(AuthContext)
     let [error, setError] = useState('')
    let handleRegister = (e) => {
        e.preventDefault()
       let form = new FormData(e.currentTarget)
       let email = form.get("email")
       let password = form.get("password")
       let name = form.get("name")
       setError("")
       console.log(email,password,name)
       if(password.length < 6){
          setError('Password should be at least 6 characters')
          return
       }
       createUser(email,password)
       .then(result => {
        console.log(result.user)
        e.target.reset()
       })
       .catch(error => {
        const errorMessage = error.message;
         console.log(errorMessage)
         setError("Email Already in Use")
         return
       })
    }
    return (
        <div className="bg-[#F3F3F3] ">
           <div className="w-[95%] md:w-[80%] mx-auto pb-16">
           <Navbar></Navbar>
           <div className="bg-white p-7 md:p-10 w-[98%] md:w-[70%] lg:w-[50%] mx-auto mt-9 rounded-md">
           <h2 className="text-3xl font-bold text-center md:pb-14 border-b-[1px]">Register your account</h2>
                     <form onSubmit={handleRegister} className="mt-12">
                     <p className="font-semibold mb-2">Your Name</p> 
                      <label className="input  flex items-center rounded-md gap-2 mb-6 bg-[#F3F3F3]">
                        <input type="text" name="name" className="grow" placeholder="Your Name" />
                      </label>

                       <p className="font-semibold mb-2">Email address</p> 
                      <label className="input  flex items-center rounded-md gap-2 mb-6 bg-[#F3F3F3]">
                        <input type="email" name="email" className="grow" placeholder="Email" required/>
                      </label>

                      <p className="font-semibold mb-2">Password</p> 
                      <label className="input  flex items-center gap-2 rounded-md bg-[#F3F3F3] mb-3">
                        <input type="password" name="password" className="grow" placeholder="Password" required/>
                      </label>

                      <input className="mr-2" type="checkbox" name="" id="" /> <span className="text-[14px]">Accept Term & Conditions</span>

                      {error && <p className="mt-6 text-red-500">{error}</p>}


                      <input className="btn text-white  w-full  mt-7 bg-[steelblue] rounded-md" type="submit" value="Login" />
                      
                     
                     </form>
              </div>
           </div>
        </div>
    );
};

export default Register;