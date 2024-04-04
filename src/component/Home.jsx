import { useLoaderData } from "react-router-dom";
import Header from "./Header";
import Latest from "./Latest";
import LeftSide from "./LeftSide";
import Navbar from "./Navbar";
import News from "./News";
import RightSide from "./RightSide";



const Home = () => {
    let allNews = useLoaderData()
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <Latest></Latest>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-7 mt-8">
                <div className="">
                <LeftSide></LeftSide>
                </div>

                <div className="lg:col-span-2 ">
                <h3 className="hidden lg:grid text-xl font-bold text-gray-700 mb-5">Dragon News Home</h3>
                   <div className="lg:h-[90vh] lg:overflow-hidden lg:overflow-y-scroll">
                   {
                    allNews.map((allNews,index) => <News
                    key={index}
                    allNews={allNews}
                    ></News>)
                   } 
                   </div>
                </div>

                <div className="">
                <RightSide></RightSide>
                </div>
            </div>
        </div>
    );
};

export default Home;