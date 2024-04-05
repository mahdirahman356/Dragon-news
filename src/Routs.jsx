import { createBrowserRouter } from "react-router-dom";
import MainComponent from "./MainComponent/MainComponent";
import Home from "./component/Home";
import Login from "./component/Login";
import Register from "./component/Register";
import NewsDetails from "./component/NewsDetails";
import PrivetRouter from "./component/PrivetRouter";

const router = createBrowserRouter([
    {
        path:"/",
        element: <MainComponent></MainComponent>,
        children: [
            {
                path: "/",
                loader: ()=> fetch("/news.json"),
                element: <Home></Home>
            },
        ]
    },
    {
        path: "/login",
        element : <Login></Login>
    },
    {
        path:"/register",
        element:<Register></Register>
    },
    {
        path: "/news/:id",
        loader: () => fetch('/news.json'),
        element:<PrivetRouter><NewsDetails></NewsDetails></PrivetRouter>
    }
])

export default router