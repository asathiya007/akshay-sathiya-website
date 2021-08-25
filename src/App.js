import React from 'react';
import './App.css';
import Carousel from "react-bootstrap/Carousel";
import HomePage from "./components/HomePage/HomePage";
import AboutPage from "./components/AboutMePage/AboutMePage";
import ExperiencePage from "./components/ExperiencePage/ExperiencePage";
import ProjectsPage from "./components/ProjectsPage/ProjectsPage";

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
          <ExperiencePage />
        </Carousel.Item>
        <Carousel.Item>
          <ProjectsPage />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default App;
