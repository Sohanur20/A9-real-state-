/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
AOS.init();


const HomeCard = ({ singleCard }) => {

  const { image, estate_title, id, price, status, view_property_button, description } = singleCard;




  return (
    <>

    
    <div


      data-aos="zoom-in-down"
      className="card m-5  bg-slate-200 shadow-xl shadow-orange-400 hover:scale-110">
      <figure className="p-5">
        <img src={image} alt="" className="rounded-xl" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl font-bold text-black acme">{estate_title}</h2>
        <p className="text-sm">{description.slice(0,80)}</p>

        <div className="flex flex-row gap-24 mb-4 ">
          <div
            className="bg-red-500 shadow-lg shadow- shadow-red-600 text-white cursor-pointer px-3 py-1 text-center justify-center items-center rounded-xl flex space-x-2 flex-row">

            <span className="uppercase">for {status}</span>
          </div>
          <div
            className="bg-green-500 shadow-lg shadow- shadow-green-600 text-white cursor-pointer px-3 text-center justify-center items-center py-1 rounded-xl flex space-x-2 flex-row">

            <span>{price}</span>
          </div>
        </div>


        <div className="card-actions flex justify-end ">

          <Link to={`/resorts/${id}`}>

            <button className="btn btn-success text-white">{view_property_button}</button>

            
          </Link>




        </div>
      </div>
    </div>
    </>
  );
};

export default HomeCard;