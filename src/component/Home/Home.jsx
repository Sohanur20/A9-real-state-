/* eslint-disable no-unused-vars */
import Banner from "../Banner/Banner";
import { useLoaderData } from 'react-router-dom'
import HomeCard from "../HomeCard/HomeCard";
import { Helmet } from "react-helmet-async";
import ExtraSection1 from "../extraSection1/ExtraSection1";
import TimeLine from "../timeLine/TimeLine";





const Home = () => {

    const allData = useLoaderData()


    return (



        <div>

            <Helmet>
                <title>EliteEstate Holdings || Home</title>
            </Helmet>
            <Banner></Banner>

            <div className="bg-fuchsia-200">

                <h1 className="text-center lg:pt-20 rounded-lg lg:mt-5 text-3xl font-semibold "> All Estate</h1>

                <div


                    className="grid lg:grid-cols-3 grid-cols-1 gap-6 lg:p-10  ">


                    {
                        allData.map(singleCard => <HomeCard singleCard={singleCard} key={singleCard.id}></HomeCard>)
                    }
                </div>

            </div>
<TimeLine></TimeLine>
            <ExtraSection1></ExtraSection1>
          

        </div>
    );
};

export default Home;