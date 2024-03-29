import React, { useState, useEffect } from 'react';
import data from '../db/data.js';

const Card = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={`flex flex-wrap justify-center gap-1 ${darkMode ? 'text-white' : 'text-black'}`}>
      <button
        onClick={() => {
          setDarkMode(!darkMode);
        }}
        className={`absolute text-center right-0 top-10 ${darkMode ? 'bg-white text-black' : 'bg-slate-900 text-white'} px-4 py-2 rounded`}
      >
        {darkMode ? 'Light' : 'Dark'} Mode
      </button>
      {data.slice(0, 4).map((product) => {
        const { image, title, totalEvents, sport } = product;
        return (
          <section
            className={`card flex flex-col items-center hover:cursor-pointer hover:scale-110 duration-300 mx-2 my-4 bg-white w-90 h-54 ${darkMode ? 'dark:bg-[#3B3E47]' : ''}`}
            key={title}
          >
            <img src={image} alt="hero-img" className="card-img" />
            <div className="card-title mr-12 font-semibold">{title}</div>
            <div className={`flex flex-wrap bg-gray-200 text-black ${darkMode ? 'dark:bg-[#292B32] text-white' : ''}`}>
              <div className= {`"flex flex-col bg-gray-200 mr-10 text-black ${darkMode ? 'dark:bg-[#292B32] text-white' : ''}`}>
                <div>Total Events</div>
                <div className="card-event font-semibold">{totalEvents}</div>
              </div>
              <div className={`flex flex-col bg-gray-200 text-black ${darkMode ? 'dark:bg-[#292B32] text-white' : ''}`}>
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
  );
};

export default Card;
