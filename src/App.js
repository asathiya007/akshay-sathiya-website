import React from 'react';
import './App.css';
import Carousel from "react-bootstrap/Carousel";
import HomePage from "./components/HomePage/HomePage";
import AboutPage from "./components/AboutPage/AboutPage";

function App() {
  
  return (
    <div className="App">
      <Carousel className="carousel" interval={null}>
        <Carousel.Item>
          <HomePage />
        </Carousel.Item>
        <Carousel.Item>
          <AboutPage />        
        </Carousel.Item>
        <Carousel.Item>
          <HomePage />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default App;
