import { createBrowserRouter } from "react-router-dom";
import MainComponent from "./MainComponent/MainComponent";
import Home from "./component/Home";

const router = createBrowserRouter([
    {
        path:"/",
        element: <MainComponent></MainComponent>,
        children: [
            {
                path: "/",
                loader: ()=> fetch("/news.json"),
                element: <Home></Home>
            }
        ]
    }
])

export default router