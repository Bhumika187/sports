import React from "react";
import './App.css';
import data from './db/data';
import Card from './Components/Card';
import CarouselPage from "./Components/Carousel";


function App() {
  return (
    
      <div className="min-h-screen">
        <h1 className="font-semibold text-black ml-44">Sports</h1>  
        {/* Adjust the theme styles globally if needed */}
        <div>
          <Card />
          <CarouselPage />
        </div>
      </div>
   
  );
}

export default App;
