import {Outlet} from 'react-router-dom'
import Navber from '../component/Navber/Navber';
import Footer from '../component/Footer/Footer';

const RootOutlet = () => {
    return (
        <div >
           
            <div className='container mx-auto'>
            <Navber></Navber>
         
            <Outlet />
       
         
            </div>
            <Footer></Footer>
    
        </div>
    );
};

export default RootOutlet;