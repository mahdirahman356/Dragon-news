import { Outlet } from "react-router-dom";

const MainComponent = () => {
    return (
        <div className="w-[95%] md:w-[80%] mx-auto">
            <Outlet></Outlet>
        </div>
    );
};

export default MainComponent;