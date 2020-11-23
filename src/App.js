import React from 'react';
import './App.css';
import CarouselPart from './components/CarouselPart/CarouselPart';
import MyNavbar from './components/MyNavbar/MyNavbar';
import TitleText from './components/TitleText/TitleText';
import AboutMe from './pages/AboutMe/AboutMe';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import { Parallax } from 'react-parallax';
import { Container } from 'react-bootstrap';
import Skills from './pages/AboutMe/Skills/Skills';
import Experience from './pages/AboutMe/Experience/Experience';
import ProjectsTimeline from './components/ProjectsTimeline/ProjectsTimeline';
import Contact from './pages/AboutMe/Contact/Contact';
import { particlesOptions } from "./particlesOptions";
import Particles from 'react-particles-js';
import Footer from './components/Footer/Footer';
import Blogs from './pages/AboutMe/Blogs/Blogs';


function App() {
  return (
    <div className="App box" style={{ position: "relative" }}>
      <MyNavbar></MyNavbar>
      <CarouselPart></CarouselPart>
      <TitleText></TitleText>
      <Particles
        className="particles particles-box"
        params={particlesOptions}
      />

      <div>
      <Parallax blur={{ min: -10, max: 30 }} bgImage={require("./assets/img/carousal/w10.jpg")} bgImageAlt="" strength={-200}>
      <Container className="container-box rounded">
      <Fade duration={500}>
      <AboutMe></AboutMe>
      </Fade>
      </Container>
      </Parallax>
      </div>


      <div>
      <Container className="container-box rounded">
      <Slide bottom duration={500}>
        <hr />
      <Skills></Skills>
      </Slide>
      </Container>
      </div>
      <div>
        <Container className="container-box rounded">
          <Fade duration={500}>
            <hr />

            <Experience />
          </Fade>
        </Container>
      </div>

      <Container className="container-box rounded">
      <hr />
        <ProjectsTimeline />
      </Container>

      <Container className="container-box rounded">
        <Slide bottom duration={500}>
          <hr />
          <Blogs />
        </Slide>
      </Container>

      <Container className="container-box rounded">
        <Fade duration={500}>
          <hr />
          <Contact />
        </Fade>
      </Container>

      <hr />
      <Footer></Footer>
    </div>
  );
}

export default App;
