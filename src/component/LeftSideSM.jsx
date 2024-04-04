import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaAlignLeft } from "react-icons/fa";

const LeftSideSM = () => {
    let [categories, setCategories ] = useState([])
    useEffect(()=> {
    fetch('categories.json')
    .then(res => res.json())
    .then(data => setCategories(data))
    },[])
    return (
        <div className="lg:hidden">
            <div className="drawer">
           <input id="my-drawer" type="checkbox" className="drawer-toggle" />
           <div className="drawer-content">
             <label htmlFor="my-drawer" className=" drawer-button"><FaAlignLeft className="text-gray-500 text-[18px]"/></label>
           </div> 
           <div className="drawer-side">
             <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
             <ul className="menu p-4 w-48 md:w-60 min-h-full bg-base-200 text-base-content">
               {categories.map(categories => <div className="w-[90%] mx-auto mt-4" key={categories.id}>
            <Link to={`categories/${categories.id}`}>
            <p className="mb-2 text-[#9F9F9F]">{categories.name}</p>
            </Link>
            </div>)}
             </ul>
           </div>
         </div>
        </div>
    );
};

export default LeftSideSM;