import React, { useState } from "react";
import "./Services.css";
import agro_serv_img from "../../../Assets/Home_agro_serv.jpg";
import agro_survillence_img from "../../../Assets/home_survi_drone.jpg";
import agro_relief_img from "../../../Assets/home_relief_drone.png";
import left_btn from "../../../Assets/icons/left_btn.png";
import right_btn from "../../../Assets/icons/right_btn.png";

function Services() {
  const [slide, setSlide] = useState(0);
  const slides = [
    {
      index: 0,
      text: "Agriculture",
      header: "Precision Agriculture Drones for Smart Farming",
      image: agro_serv_img,
      desc: {
        head: "Agricultural Drone Services",
        para: "Transform how you farm with precision agriculture drones. Optimize spraying, reduce chemical waste, and safeguard your harvest with cutting-edge UAV technology. Grow smarter — sustainably, efficiently, and profitably.",
        bullets: [
          "Save up to 50% on farm labor and inputs",
          "Cut crop losses by 10 - 15% with targeted care",
          "40 - 60% faster field management and monitoring",
        ],
      },

      // descP: "Transform how you farm with precision agriculture drones. Optimize spraying, reduce chemical waste, and safeguard your harvest with cutting-edge UAV technology. Grow smarter — sustainably, efficiently, and profitably.",
      // descBlts: "Save up to 50% on farm labor and inputs Cut crop losses by 1015% with targeted care 4060% faster field management and monitoring"
    },
    {
      index: 1,
      text: "Surveillence",
      header: "Advanced Surveillance Drones for Safer Communities",
      image: agro_survillence_img,
      desc: {
        head: "Surveillance Drone Services",
        para: "Protect your assets, monitor critical areas, and ensure safety from the sky. We deliver reliable aerial surveillance solutions for infrastructure, borders, and communities. Act smarter — faster, safer, and more cost-effectively.",
        bullets: [
          "3x faster coverage compared to foot patrols",
          "Up to 80% cost savings over manned surveillance",
          "Real-time intelligence for quicker decisions",
        ],
      },
    },
    {
      index: 2,
      text: "Rescue & Relief",
      header: "Relief & Rescue Drones for Rapid Crisis Response",
      image: agro_relief_img,
      desc: {
        head: "Rescue & Relief Drone Services",
        para: "Support crisis response with fast, reliable drone technology. Our drones help identify stranded individuals, assess disaster zones, and deliver life-saving supplies — when time and access matter most. Respond smarter — with reach, speed, and impact.",
        bullets: [
          "Deliver essentials to inaccessible areas",
          "Scan flooded or damaged zones to locate survivors",
          "Reduce response time in critical rescue operations",
        ],
      },
    },
  ];

  const leftSlide = ()=> {
    slide === 0 ? setSlide(slides.length-1) : setSlide(slide-1);
  }
  const rightSlide = ()=> {
    slide === slides.length-1 ? setSlide(0) : setSlide(slide+1);
  }

  return (
    <section id="services">
      <div id="servLinks">
        {slides.map((serv, idx) => {
          return (
            <button
              className={
                slide === idx ? "serv_name" : "serv_name serv_name_inactive"
              }
              onClick={() => setSlide(idx)}
              key={idx}
            >
              {serv.text}
            </button>
          );
        })}
      </div>

      <div id="service_carousal">
        {slides.map((serv, idx) => {
          return (
            <div
              className={
                slide === idx
                  ? "serice_item"
                  : "serice_item service_item_hidden"
              }
              key={idx}
            >
              <h2 className="serv_head">{serv.header}</h2>
              <section id="servContent">
                <div id="servContGrids">
                  <div className="servDesc grid_item">
                    <h3> {serv.desc.head}</h3>
                    <p>{serv.desc.para}</p>
                    <ul>
                      {serv.desc.bullets.map((value, idx) => {
                        return <li key={idx}>{value}</li>
                      })}
                    </ul>
                  </div>
                  {/* <div className="servMoreCard grid_item"></div> */}
                  <a href="/services">Learn More</a>
                </div>

                <div className="servImg grid_item">
                  <img
                    src={serv.image}
                    alt="Agriculture Drone Image, Drone Working in fields"
                  />
                  <div id="gradientLayer"></div>
                </div>
              </section>
            </div>
          );
        })}

        <div id="navBtns">
        <button className = "serv_nav_btn" onClick={leftSlide}><img src={left_btn} alt=" "/></button>
      <button className = "serv_nav_btn" onClick={rightSlide}><img src={right_btn} alt=""/></button>
      </div>
      </div>

      
    </section>
  );
}

export default Services;
