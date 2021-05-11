import React from 'react';
import './App.css';
import Carousel from "react-bootstrap/Carousel";
import HomePage from "./components/HomePage/HomePage";
import AboutPage from "./components/AboutMePage/AboutMePage";
import WorkExpPage from "./components/WorkExpPage/WorkExpPage";
import PersonalProjsPage from "./components/PersonalProjsPage/PersonalProjsPage";

function App() {
  
  return (
    <div className="App">
      <Carousel className="carousel" interval={null} touch={true}>
        <Carousel.Item>
          <HomePage />
        </Carousel.Item>
        <Carousel.Item>
          <AboutPage />        
        </Carousel.Item>
        <Carousel.Item>
          <WorkExpPage />
        </Carousel.Item>
        <Carousel.Item>
          <PersonalProjsPage />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default App;
