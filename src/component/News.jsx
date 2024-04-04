import { FaEye, FaStar } from "react-icons/fa";
import { HiOutlineBookmark } from "react-icons/hi";
import { MdOutlineShare } from "react-icons/md";
import PropTypes from 'prop-types'; 

``

const News = ({allNews}) => {
    console.log(allNews)
    let {title,author,image_url,details,rating,total_view} = allNews
    return (
           <div>
            <div className="space-y-3 border-2 border-[#F3F3F3] rounded-lg ">
                     <div  className="flex justify-between items-center bg-[#F3F3F3] py-2 px-4">
                    <div className="flex items-center gap-3">
                    <div className="w-10 rounded-full mr-3">
                        <img className="rounded-full"  src={author.img} />
                    </div>
                        <div>
                        <p className="text-[14px] font-semibold">{author.name}</p>
                        <p className="text-[12px] text-[#706F6F]">{author.published_date}</p>
                        </div>
                    </div>
                        
                        <div className="flex items-center gap-2">
                        <HiOutlineBookmark className="text-[20px]"/>
                        <MdOutlineShare className="text-[20px]"/>
                        </div>
                   </div>
                
 
                <div className="p-4 space-y-5">
                     <h3 className="text-xl font-semibold ">{title}</h3>
                     <img className="rounded-md" src={image_url} alt="" />
                     <p>{details}</p>
                     <p className="font-semibold text-[#FF8C47]">Read More </p>
 
                     <div className="flex justify-between items-center">
                         <div className="flex items-center gap-2">
                         <FaStar className="text-[18px] text-[#FF8C47]"/>
                         <FaStar className="text-[18px] text-[#FF8C47]"/>
                         <FaStar className="text-[18px] text-[#FF8C47]"/>
                         <FaStar className="text-[18px] text-[#FF8C47]"/>
                         <FaStar className="text-[18px] text-[#FF8C47]"/>
                         <span>{rating.number}</span>
                         </div>
 
                         <div className="flex items-center gap-2">
                         <FaEye className="text-[20px]"/>
                         <span>{total_view}</span>
                         </div>
                     </div>
 
                </div>
             </div>
        </div>  
    );
};

News.propTypes ={
    allNews: PropTypes.object.isRequired
}
export default News;