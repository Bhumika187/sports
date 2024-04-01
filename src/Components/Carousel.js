import React from 'react';
import cont from '../db/content.js';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState,useEffect } from 'react';

const CarouselPage = () => {
  const [darkMode, setDarkMode] = useState(false);
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
      useEffect(() => {
        // Toggle dark mode
        if (darkMode) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      }, [darkMode]);
    
  return (
    <>
    <div className="flex flex-col justify-center text-center text-white mt-10">
         <h1 className="text-3xl font-bold ">Collection Spotlight</h1>
        <p>Discover extraordinary moments with our Spotlight Collection metatickets—exclusive access to premium events for an unforgettable experience. Grab yours today!</p>
    </div> 
    {/* w-3/4 m-auto duration-300 */}
    <div className="flex justify-evenly bottom bottom-box1 text-white mt-8">
        <div className='hover:cursor-pointer hover:scale-110 duration-300  box h-[500px] w-[600px] border p-2 bg-white last rounded-md '>
            <Slider {...settings}>
          {cont.map((d)=>(
            <div className="bg-white h-[450px] text-black rounded-xl">
                <div className="h-56 flex justify-center items-center">
                    <img src={d.img} alt="" className="h-300.25 w-226.1px "/>
                </div>
                <hr className="mt-5 border-t-2 border-dashed border-gray-400 " /> {/* Horizontal dotted line */}

                <div className="flex flex-col justify-center  items-center gap-2 ">
                    <p className="text-xl font-semibold text-base text-center mt-2">{d.name}</p>
                    <p className="text-sm text-center">{d.time}</p>
                    <p className="text-center">{d.address}</p>
                    <button className="bg-black text-white text-base px-6 ">Take Flight Collection</button>
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