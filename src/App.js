// import React, { useState } from 'react';
// import './App.css';
// import Card from './Components/Card';
// import CarouselPage from "./Components/Carousel";

// function App() {
//   const [theme, setTheme] = useState("light");

//   const toggleTheme = () => {
//     setTheme((prevTheme) => (prevTheme === "darkMode" ? "light" : "darkMode"));
//   };

//   return (
//     <div className={`min-h-screen ${theme === "darkMode" ? 'bg-[#3B3E47] text-white' : 'bg-white text-black'}`}>
//       <button 
//         onClick={toggleTheme} 
//         className={`absolute top-10 right-10 px-4 py-2 rounded ${theme === "darkMode" ? 'bg-white text-black' : 'bg-black text-white'}`}
//       >
//         {theme === "darkMode" ? 'Light Mode' : 'Dark Mode'}
//       </button>
//       <div className="text-center">
//         <h1 className="font-semibold mt-4">Sports</h1>
//       </div>
//       <div>
//         <Card theme={theme} />
//         <CarouselPage theme={theme} />
//       </div>
//     </div>
//   );
// }

// export default App;

import React, { useState } from 'react';
import './App.css';
import Card from './Components/Card';
import CarouselPage from "./Components/Carousel";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "darkMode" ? "light" : "darkMode"));
  };

  return (
    <div className={`min-h-screen ${theme === "darkMode" ? 'bg-[#3B3E47] text-white' : 'bg-white text-black'}`}>
      <button 
        onClick={toggleTheme} 
        className={`absolute top-10 right-10 px-4 py-2 rounded ${theme === "darkMode" ? 'bg-white text-black' : 'bg-black text-white'}`}
      >
        {theme === "darkMode" ? 'Light Mode' : 'Dark Mode'}
      </button>
      <div className="text-center">
        <h1 className="font-semibold mt-4">Sports</h1>
      </div>
      <div>
        <Card theme={theme} />
        <CarouselPage theme={theme} />
      </div>
    </div>
  );
}

export default App;
