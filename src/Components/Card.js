import React, { useState, useEffect } from 'react';
import data from '../db/data.js';

const Card = ({theme}) => {
  // const [theme, setTheme] = useState("light");

  // useEffect(() => {
  //   // Toggle dark mode class on the root element
  //   if (theme === "darkMode") {
  //     document.documentElement.classList.add('darkMode');
  //   } else {
  //     document.documentElement.classList.remove('darkMode');
  //   }
  // }, [theme]);

  // const handleThemeSwitch = () => {
  //   setTheme(theme === "darkMode" ? "light" : "darkMode");
  // };

  return (
    <div className={`min-h-screen flex flex-col justify-center items-center transition-colors duration-500 ${theme === "darkMode" ? 'bg-gradient-to-br from-white via-[#18282A] to-[#221A2C] text-white' : 'bg-white text-black'}`}>
      <button
        // onClick={handleThemeSwitch}
        className={`absolute top-10 right-10 px-4 py-2 rounded ${theme === "darkMode" ? 'bg-white text-black' : 'bg-black text-white'}`}
      >
        {theme === "darkMode" ? 'Dark' : 'Light'} Mode
      </button>
      <div className="flex flex-wrap justify-center gap-4">
        {data.slice(0, 4).map((product) => {
          const { image, title, totalEvents, sport } = product;
          return (
            <section
              key={title}
              className={`card flex flex-col items-center hover:cursor-pointer hover:scale-110 duration-300 mx-2 my-4 w-90 h-54 transition duration-500 ${theme === "darkMode" ? 'bg-[#3B3E47] text-white' : 'bg-gray-400 text-black'}`}
            >
              <img src={image} alt="hero-img" className="card-img" />
              <div className="card-title font-semibold">{title}</div>
              <div className={`flex flex-wrap ${theme === "darkMode" ? 'bg-[#292B32] text-white' : 'bg-gray-200 text-black'}`}>
                <div className="flex flex-col mr-10">
                  <div>Total Events</div>
                  <div className="card-event font-semibold">{totalEvents}</div>
                </div>
                <div className="flex flex-col">
                  <div>Sport</div>
                  <div className="card-sport font-semibold">{sport}</div>
                </div>
              </div>
            </section>
          );
        })}
        <section className="card flex flex-col items-center mx-2 my-4 bg-white">
          <div>
            <img src="assets/img21.png" alt="dk-img" className="card-img" />
          </div>
          <div>Advertisement title</div>
          <div>
            <img src="assets/img22.png" alt="lorem-img" className="card-img" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Card;

