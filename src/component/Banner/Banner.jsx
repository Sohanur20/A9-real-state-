

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useLoaderData } from 'react-router-dom';

const Banner = () => {

  const allData = useLoaderData()

  // console.log(allData);

  return (

    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >


        {
          allData.map(data => <SwiperSlide key={data.id}>
            <div className="hero lg:h-[600px] mt-4 rounded-2xl" style={{
              backgroundImage: `url(${data.
                image})`
            }}>
              <div className="hero-overlay bg-opacity-60 rounded-2xl"></div>
              <div className="hero-content text-center text-neutral-content">
                <div className="">
                  <h1 className="mb-5 text-5xl font-bold text-white acme">{data.estate_title}</h1>
                  <p className="mb-5 text-[14px] text-slate-450">{data.description.slice(0,110)
                  }</p>
                  {/* <button className="btn btn-primary">Get Started</button> */}
                </div>
              </div>
            </div>

          </SwiperSlide>)
        }

      </Swiper>

    </div>
  );
};

export default Banner;