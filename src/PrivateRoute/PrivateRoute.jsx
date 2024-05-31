/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../component/AuthProvider/AuthProvider";
import {Navigate} from 'react-router-dom';
import Loader from "../component/Loader/Loader";
import { useLocation} from 'react-router-dom'

const PrivateRoute = ({children}) => {

    const location = useLocation()
    // console.log(location);

const {user,loading} = useContext(AuthContext)

if (loading) {
    return <Loader></Loader>
}

if (user) {
    return children ;
}

    return <Navigate to='/login' state={location.pathname} ></Navigate>
};

export default PrivateRoute;