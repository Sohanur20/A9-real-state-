import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import 'animate.css';
import { FcLandscape } from "react-icons/fc";
import { Helmet } from 'react-helmet-async';


const ResortDtls = () => {



    const { id } = useParams();

    const [resorts, setResort] = useState(null)


    useEffect(() => {

        fetch('/Data.json')
            .then(res => res.json())
            .then(data => {

                const allResorts = data.filter(resort => resort.id === id);
                setResort(allResorts[0]);
                console.log(allResorts[0]);

                // console.log(data);

            })


    }, [id])




    return (
        <div className=''>
              <Helmet>
                <title>EliteEstate Holdings || Details</title>
            </Helmet>

            {
                resorts && (
                    <section className="dark:bg-gray-100 bg-slate-300 mx-auto">
                        <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
                            <a rel="noopener noreferrer" href="#" className="">
                                <img src={resorts.image} alt="" className="animate__animated animate__backInUp   w-[1000px] mx-auto  rounded-2xl sm:h-96 lg:col-span-7 " />
                            </a>

                        </div>

                        <div className="p-6 space-y-5 lg:col-span-5  font-bold flex lg:pl-40 flex-col animate__animated animate__bounceInLeft">
                            <h3 className="text-4xl font-bold flex  lg:pl-32 acme ">{resorts.estate_title}</h3>

                            <div className='lg:flex gap-20 lg:pl-32 text-slate-500 space-y-3'>
                                <p className="bg-red-500 shadow-lg shadow- shadow-red-200 text-black text-sm cursor-pointer px-3 py-1 text-center justify-center items-center rounded-xl flex space-x-2 flex-row"><FcLandscape />   {resorts.area}</p>
                                <p className="bg-green-500 shadow-lg shadow- shadow-green-600 text-black text-sm cursor-pointer px-3 text-center justify-center items-center py-1 rounded-xl flex space-x-2 flex-row">{resorts.location}</p>
                            </div>


                            <div className='lg:flex gap-20 lg:pl-32 text-slate-500 space-y-3'>
                                <p className="bg-red-500 shadow-lg shadow- shadow-red-600 text-black text-sm cursor-pointer px-3 py-1 text-center justify-center items-center rounded-xl flex space-x-2 flex-row">{resorts.price}</p>
                                <p className="bg-green-500 shadow-lg shadow- shadow-green-600 text-black text-sm cursor-pointer px-3 text-center justify-center items-center py-1 rounded-xl flex space-x-2 flex-row uppercase"> for {resorts.status}</p>
                                <p className="bg-green-500 shadow-lg shadow- shadow-green-600 text-black text-sm cursor-pointer px-3 text-center justify-center items-center py-1 rounded-xl flex space-x-2 flex-row uppercase">{resorts.segment_name}</p>
                            </div>

                            <div className='space-y-3'>
                                <h2 className='uppercase lg:pl-32'>facilities : {
                                    resorts.facilities

                                }</h2>
                                <p className='lg:pl-32 text-black w-[1000px]'>Description : <br /> <span className='text-sm '> {resorts.description}</span></p>
                            </div>


                        </div>
                    </section>



                )
            }


        </div>


    );
};

export default ResortDtls;