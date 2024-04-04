import { Outlet } from "react-router-dom";
import Footer from "../component/Footer";

const MainComponent = () => {
    return (
        <div>
            <div className="w-[95%] md:w-[80%] mx-auto">
            <Outlet></Outlet>
        </div>
          <div className="mt-2">
          <Footer></Footer>
          </div>
       
        </div>
    );
};

export default MainComponent;