import Header from "./Header";
import LeftSide from "./LeftSide";
import Navbar from "./Navbar";
import News from "./News";
import RightSide from "./RightSide";


const Home = () => {
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-12">
                <div className="">
                <LeftSide></LeftSide>
                </div>
                <div className=" lg:col-span-2">
                    <News></News>
                </div>
                <div className="">
                     <RightSide></RightSide>
                </div>
            </div>
        </div>
    );
};

export default Home;