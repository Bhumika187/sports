import React from "react";
import './App.css';
import data from './db/data';
import Card from './Components/Card';
import CarouselPage from "./Components/Carousel";
import { ThemeProvider } from './ThemeContext'; // Import ThemeProvider

function App() {
  return (
    <ThemeProvider> {/* Wrap your application with ThemeProvider */}
      <div className="min-h-screen">
        <h1 className="font-semibold text-black ml-44">Sports</h1>  
        {/* Adjust the theme styles globally if needed */}
        <div>
          <Card />
          <CarouselPage />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
