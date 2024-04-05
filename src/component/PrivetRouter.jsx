import { useContext } from "react";
import { AuthContext } from "./Context";
import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types'; 
import { useLocation } from 'react-router-dom';

const PrivetRouter = ({children}) => {
    let {user,loading} = useContext(AuthContext)
    let location = useLocation()
    if(loading){
        return <div className="h-[100vh] flex justify-center items-center"><span className="loading loading-spinner loading-lg"></span></div>
    }
    if(user){
    return children
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>
};

PrivetRouter.propTypes ={
    children : PropTypes.node.isRequired
}
export default PrivetRouter;