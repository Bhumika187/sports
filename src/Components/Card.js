import React, { useState, useEffect } from 'react';
import data from '../db/data.js';

const Card = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // Toggle dark mode class on the root element
    if (theme === "darkMode") {
      document.documentElement.classList.add('darkMode');
    } else {
      document.documentElement.classList.remove('darkMode');
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "darkMode" ? "light" : "darkMode");
  };

  return (
    <div className={`min-h-screen flex flex-col items-center transition-colors duration-500 ${theme === "darkMode" ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <button
        onClick={handleThemeSwitch}
        className={`absolute top-10 right-10 px-4 py-2 rounded ${theme === "darkMode" ? 'bg-black' : 'bg-white'}`}
      >
        {theme === "darkMode" ? 'Light' : 'Dark'} Mode
      </button>
      <div className="flex flex-wrap justify-center gap-4 mt-20">
        {data.slice(0, 4).map((product) => {
          const { image, title, totalEvents, sport } = product;
          return (
            <section
              key={title}
              className={`card flex flex-col items-center p-4 hover:cursor-pointer hover:scale-110 duration-300 rounded-lg w-80 ${theme === "darkMode" ? 'bg-gray-800' : 'bg-gray-100'}`}
            >
              <img src={image} alt="hero-img" className="card-img w-full h-40 object-cover rounded-t-lg" />
              <div className="card-title mt-4 font-semibold text-center">{title}</div>
              <div className={`flex flex-col w-full mt-2 ${theme === "darkMode" ? 'bg-gray-700 text-white' : 'bg-gray-200 text-black'}`}>
                <div className="flex justify-between px-4 py-2">
                  <div>Total Events</div>
                  <div className="font-semibold">{totalEvents}</div>
                </div>
                <div className="flex justify-between px-4 py-2">
                  <div>Sport</div>
                  <div className="font-semibold">{sport}</div>
                </div>
              </div>
            </section>
          );
        })}
        <section className={`card flex flex-col items-center mx-2 my-4 ${theme === "darkMode" ? 'bg-gray-800' : 'bg-gray-100'}`}>
          <div>
            <img src="assets/img21.png" alt="dk-img" className="card-img w-full h-40 object-cover rounded-t-lg" />
          </div>
          <div className="mt-4 font-semibold">Advertisement title</div>
          <div>
            <img src="assets/img22.png" alt="lorem-img" className="card-img w-full h-40 object-cover rounded-b-lg" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Card;
