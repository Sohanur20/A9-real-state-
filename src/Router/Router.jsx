import { createBrowserRouter } from "react-router-dom";
import RootOutlet from "../RootOutlet/RootOutlet";
import Home from "../component/Home/Home";
import UpdateProfile from "../component/UpdateProfile/UpdateProfile";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import Error from "../Pages/Error/Error";
import ResortDtls from "../Pages/resortsDtls/ResortDtls";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
 import ExtraSection2 from "../component/extra section2/ExtraSection2";




const Router = createBrowserRouter([
  {
    path: "/",
    element: <RootOutlet></RootOutlet>,
    errorElement: <Error></Error>,
    children: [

      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('/Data.json')
      },
      {
        path: '/resorts/:id',
        element: <PrivateRoute> <ResortDtls></ResortDtls></PrivateRoute>
      },
      {
        path: '/updateProfile',
        element: <PrivateRoute> <UpdateProfile></UpdateProfile></PrivateRoute>
      },
      {
        path:'/contact',
        element :<PrivateRoute><ExtraSection2></ExtraSection2></PrivateRoute> 
      },

      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      }

    ]
  },
]);

export default Router;