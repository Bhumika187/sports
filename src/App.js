import React from "react";
import './App.css';
import data from './db/data';
import Card from './Components/Card';
import CarouselPage from "./Components/Carousel";



function App() {
  return (
    <div className="bg-white dark:bg-black">
      <h1 className=" font-semibold text-black ml-44 dark:bg-gray-400">Sports</h1>  
      {/* className ="dark:bg-gradient-to-br from-white via-[#18282A] to-[#221A2C]" */}
        <div>
          <Card/>
          <CarouselPage/>
        </div>
    </div>
  );
}

export default App;
