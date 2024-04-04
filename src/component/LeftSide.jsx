

import { useState } from "react";
import { Link } from "react-router-dom";
import { IoCalendarClearOutline } from "react-icons/io5";
import cardImg1 from '../Image/1.png'
import cardImg2 from '../Image/2.png'
import cardImg3 from '../Image/3.png'
import LeftSideSM from "./LeftSideSM";


const RightSide = () => {
    let [categories, setCategories ] = useState([])
    useState(()=> {
    fetch('categories.json')
    .then(res => res.json())
    .then(data => setCategories(data))
    },[])
    return (
        <div className="">
           <div className="flex items-center gap-5">
           <LeftSideSM></LeftSideSM>
           <h3 className="text-[18px] md:text-xl font-semibold md:font-bold text-gray-700">All Caterogy</h3>
           </div>
           <div className="hidden lg:grid">
           {categories.map(categories => <div className="w-[80%] mx-auto mt-5" key={categories.id}>
            <Link to={`categories/${categories.id}`}>
            <p className="mb-2 text-[#9F9F9F]">{categories.name}</p>
            </Link>
            </div>)}
            <div className="mt-8">
            <div className="card  card-compact rounded-lg bg-base-100 mb-9">
            <figure><img className="w-full" src={cardImg1} alt="Shoes" /></figure>
            <div className="mt-4">
              <h2 className="text-[20px] font-semibold leading-7">Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
              <div className="flex justify-between items-center mt-3 text-[14px]">
                <p>Sports</p> 
                <p className="flex items-center gap-2 text-[#9F9F9F]"><IoCalendarClearOutline />Jan 4, 2022</p></div>
            </div>
          </div>

          <div className="card card-compact rounded-lg bg-base-100 mb-9">
            <figure><img className="w-full" src={cardImg2} alt="Shoes" /></figure>
            <div className="mt-4">
              <h2 className="text-[20px] font-semibold leading-7">Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
              <div className="flex justify-between items-center mt-3 text-[14px]">
                <p>Sports</p> 
                <p className="flex items-center gap-2 text-[#9F9F9F]"><IoCalendarClearOutline />Jan 4, 2022</p></div>
            </div>
          </div>

          <div className="card card-compact rounded-lg bg-base-100">
            <figure><img className="w-full" src={cardImg3} alt="Shoes" /></figure>
            <div className="mt-4">
              <h2 className="text-[20px] font-semibold leading-7">Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
              <div className="flex justify-between items-center mt-3 text-[14px]">
                <p>Sports</p> 
                <p className="flex items-center gap-2 text-[#9F9F9F]"><IoCalendarClearOutline />Jan 4, 2022</p></div>
            </div>
          </div>
            </div>
           </div>
        </div>
    );
};

export default RightSide;