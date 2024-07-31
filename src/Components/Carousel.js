import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTheme } from '../ThemeContext';
import cont from '../db/content.js';

const CarouselPage = () => {
  const { theme, toggleTheme } = useTheme();

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
      <div className={`flex flex-col justify-center text-center mt-10 ${theme === "darkMode" ? 'text-white' : 'text-black'}`}>
        <h1 className="text-3xl font-bold">Collection Spotlight</h1>
        <p>Discover extraordinary moments with our Spotlight Collection metatickets—exclusive access to premium events for an unforgettable experience. Grab yours today!</p>
      </div> 

      <div className="flex justify-center mt-8">
        <div className={`w-full max-w-4xl p-2 ${theme === "darkMode" ? 'bg-[#1a1a1a]' : 'bg-white'}`}>
          <Slider {...settings}>
            {cont.map((d, index) => (
              <div key={index} className={`bg-white text-black rounded-xl p-4 ${theme === "darkMode" ? 'bg-[#3B3E47] text-white' : ''}`}>
                <div className="h-56 flex justify-center items-center">
                  <img src={d.img} alt="" className="h-full w-full object-cover rounded-lg" />
                </div>
                <hr className="mt-5 border-t-2 border-dashed border-gray-400" />
                <div className="flex flex-col justify-center items-center gap-2 mt-4">
                  <p className="text-xl font-semibold text-center">{d.name}</p>
                  <p className="text-sm text-center">{d.time}</p>
                  <p className="text-center">{d.address}</p>
                  <button className="bg-black text-white text-base px-6 py-2 rounded">Take Flight Collection</button>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default CarouselPage;
