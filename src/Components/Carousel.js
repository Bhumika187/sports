import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import cont from '../db/content.js';

const CarouselPage = ({ theme }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
      <div className={`flex justify-center items-center min-h-screen ${theme === "darkMode" ? 'bg-gray-100' : 'bg-gradient-to-br from-white via-[#18282A] to-[#221A2C]'}`}>
        <div className="w-full max-w-4xl p-4">
          <div className="hover:cursor-pointer hover:scale-110 duration-300 max-w-2xl mx-auto bg-white rounded-md">
            <Slider {...settings}>
              {cont.map((d, index) => (
                <div key={index} className={`bg-white text-black rounded-xl p-4 ${theme === "darkMode" ? 'bg-gray-800 text-white' : ''}`}>
                  <div className="h-56 flex justify-center items-center">
                    <img src={d.img} alt="" className="h-full w-full object-cover rounded-lg" />
                  </div>
                  <hr className={`mt-5 border-t-2 border-dashed ${theme === "darkMode" ? 'border-gray-600' : 'border-gray-400'}`} />
                  <div className={`flex flex-col justify-center items-center gap-2 mt-4 ${theme === "darkMode" ? 'text-white' : 'text-black'}`}>
                    <p className="text-xl font-semibold text-center">{d.name}</p>
                    <p className="text-sm text-center">{d.time}</p>
                    <p className="text-center">{d.address}</p>
                    <button className={`bg-black text-white text-base px-6 py-2 rounded ${theme === "darkMode" ? 'bg-gray-700' : ''}`}>Take Flight Collection</button>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarouselPage;
