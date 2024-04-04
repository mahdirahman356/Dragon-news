import { GrGoogle } from "react-icons/gr";
import { BsGithub } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import img1 from '../Image/qZone1.png'
import img2 from '../Image/qZone2.png'
import img3 from '../Image/qZone3.png'


const RightSide = () => {
    return (
        <div>
              <div>
            <h3 className="text-xl font-bold text-gray-700">Login With</h3>
            <div className="lg:h-[90vh] lg:overflow-hidden lg:overflow-y-scroll mt-6">
            <div className="space-y-3 ">
            <button className="btn w-full bg-[steelblue] text-white flex"><GrGoogle className="text-[20px]"/>Login With Google</button>
            <button className="btn w-full bg-[steelblue] text-white flex"><BsGithub className="text-[20px]"/>Login With Github</button>
            </div>

            <div className="my-9">
                <h3 className="text-xl font-bold">Find Us On</h3>
                <div className="mt-4 border-2 rounded-lg">

                   <div className="flex items-center gap-2 py-3 border-b-2 px-6"><FaFacebook className="text-[23px] text-blue-500"/> Facebook</div>

                   <div className="flex items-center gap-2 py-3 border-b-2 px-6"><FaTwitter className="text-[23px] text-[#58A7DE]"/> Twitter</div>

                   <div className="flex items-center gap-2 py-3  px-6"><FaInstagram className="text-[23px] text-[#D82D7E]"/>Instagram</div>
                </div>
            </div>

            <div className="">
               <div><img className="mx-auto" src={img1} alt="" /></div>
               <div><img className="mx-auto" src={img2} alt="" /></div>
               <div><img className="mx-auto" src={img3} alt="" /></div>
            </div>
           </div>
        </div>
        </div>
    );
};

export default RightSide;


