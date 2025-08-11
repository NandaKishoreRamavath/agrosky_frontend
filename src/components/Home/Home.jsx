import React from 'react';
import "./Home.css";
import './homeRes.css';
import drones_corp_logo from "../../Assets/AP-drones-corp logo.png";
import startup_india_logo from "../../Assets/startupIndia logo.png";
import DFI_logo from "../../Assets/DFI-LOGO-NEW-WHITE.png";

import Navbar from "../Navbar/Navbar.jsx";
import Benefits from "./benefits/Benefits.jsx";
import About from "./About_sec/About.jsx";
import Stats from "./Stats_sec/Stats.jsx";
import Services from "./Services_carousal/Services.jsx";
import Footer from "../Footer/Footer.jsx";



const Home = () => {
 
  return (
    <>
      <main>
        <section id="mainContainer">
          <Navbar />
          <section id="heroSection">
            <div id="heroContent">
              <h1 id="heroTitle">AGROSKY - 360</h1>
              <p id="heroTitleBase">SPRAYING DRONE</p>
              <h3 id="heroDescript">Introducing Smart Agriculture Drones:</h3>
              <h4 id="heroDescriptBase">
                Precision Farming for a Better Tommorow
              </h4>
            </div>
            <div id="affiliateLogos">
              <img src={DFI_logo} alt="Drone Fedration India Logo" />
              <img
                src={drones_corp_logo}
                alt="Andhra Pradesh Drones Corporation Logo"
              />
              <img src={startup_india_logo} alt="StartUp India Logo" />
            </div>
          </section>
          <div id="carousalContainer">
            <p>Agrosky Drones Aspirant Private Limited</p>
          </div>
        </section>

        <Benefits />
        <About/>
        <Stats/>
        <Services/>
        <Footer/>
      </main>
    </>
  );
};

export default Home;
