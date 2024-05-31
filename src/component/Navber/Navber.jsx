import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Navber = () => {

    const { user, logOut } = useContext(AuthContext);
    // console.log(user);

    const navber = <>

        <li className="mr-5 hover:scale-110 transition"><NavLink to='/'>Home</NavLink></li>
        <li className="mr-5 hover:scale-110 transition"><NavLink to='/updateProfile'>Update Profile</NavLink></li>
        <li className="mr-5 hover:scale-110 transition"><NavLink to='/contact'>Support </NavLink></li>


    </>


    const handleLogOut = () => {

        logOut()
            .then(
                toast.success("Log out successfull")
            )
            .catch()
    }


    return (
        <div className="navbar shadow-2xl shadow-gray-900 px-10 bg-slate-950 rounded-b rounded-lg text-white">
            <div className="navbar-start">
                <div className="dropdown z-20">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52 bg-slate-600">

                        {navber}


                    </ul>
                </div>
                <a className="btn btn-ghost text-xl hidden lg:block">EliteEstate Holdings</a>
            </div>
            <div className="navbar-center hidden lg:flex ">
                <ul className="menu menu-horizontal px-1 ">
                    {navber}
                </ul>
            </div>

           

            <div className="navbar-end gap-3">


                
            { user ? <div className="dropdown dropdown-end tooltip  tooltip-left"  data-tip={`${user.displayName}`}>
                        <div className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                           
                                <img alt="" src={user?.photoURL} /> 
                                <div >
                                <button className="btn"></button>
                            </div>
                            </div>
                            
                        </div>

                    </div>
                        : ''
                     
                }

                {
                    user ? <button onClick={handleLogOut} className="btn btn-success text-white">Sign Out</button>
                        : <Link to='/login'>

                            <button className="btn btn-success text-xl font-bold">
                                Login

                            </button>

                        </Link>
                }



            </div>
        </div>
    );
};

export default Navber;