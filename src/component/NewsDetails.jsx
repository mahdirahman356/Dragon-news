import { useLoaderData, useParams } from "react-router-dom";
import Header from "./Header";
import RightSide from "./RightSide";
import { HiOutlineBookmark } from "react-icons/hi";
import { MdOutlineShare } from "react-icons/md";
import { FaEye, FaStar } from "react-icons/fa";

const NewsDetails = () => {
    let {id} = useParams()
    let Sigalnews = useLoaderData()
    let getNews = Sigalnews.filter(news => news._id === id)
    console.log({getNews})
    return (
        <div className="w-[95%] md:w-[80%] mx-auto pb-16">
            <Header></Header>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-12">
                  <div className="col-span-3">
                  {getNews.map((news,index) => <div key={index} className="space-y-3 border-2 border-[#F3F3F3] rounded-lg ">
                     <div  className="flex justify-between items-center bg-[#F3F3F3] py-2 px-4">
                    <div className="flex items-center gap-3">
                    <div className="w-10 rounded-full mr-3">
                        <img className="rounded-full"  src={news.author.img} />
                    </div>
                        <div>
                        <p className="text-[14px] font-semibold">{news.author.name}</p>
                        <p className="text-[12px] text-[#706F6F]">{news.author.published_date}</p>
                        </div>
                    </div>
                        
                        <div className="flex items-center gap-2">
                        <HiOutlineBookmark className="text-[20px]"/>
                        <MdOutlineShare className="text-[20px]"/>
                        </div>
                   </div>
                
 
                <div className="p-4 space-y-5">
                     <h3 className="text-xl font-semibold ">{news.title}</h3>
                     <img className="rounded-md" src={news.image_url} alt="" />
                     <p>{news.details}</p>
 
                     <div className="flex justify-between items-center">
                         <div className="flex items-center gap-2">
                         <FaStar className="text-[18px] text-[#FF8C47]"/>
                         <FaStar className="text-[18px] text-[#FF8C47]"/>
                         <FaStar className="text-[18px] text-[#FF8C47]"/>
                         <FaStar className="text-[18px] text-[#FF8C47]"/>
                         <FaStar className="text-[18px] text-[#FF8C47]"/>
                         <span>{news.rating.number}</span>
                         </div>
 
                         <div className="flex items-center gap-2">
                         <FaEye className="text-[20px]"/>
                         <span>{news.total_view}</span>
                         </div>
                     </div>
 
                </div>
             </div>)}
                  </div>
                <div>
                    <RightSide></RightSide>
                </div>
            </div>
        </div>
    );
};

export default NewsDetails;


// import { useLoaderData, useParams } from "react-router-dom";
// import Header from "./Header";
// import RightSide from "./RightSide";

// const NewsDetails = () => {
//     let { id } = useParams();
//     let Sigalnews = useLoaderData();
//     let getNews = Sigalnews.filter(news => news._id === id);
//     console.log({ getNews });
    
//     return (
//         <div className="w-[95%] md:w-[80%] mx-auto pb-16">
//             <Header></Header>
//             <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-12">
//                 {getNews.title}
//             </div>
//         </div>
//     );
// };

// export default NewsDetails;

