import React from "react";
import "./TrainCard.css";

function TrainCard() {
  return (
    <section id="trainingCard">
      <h3>Upskilling the Next Generation of Drone Professionals</h3>
      <p>
        At AgroSky, we don’t just build drones — we build people. Through
        certified programs, hands-on workshops, and field training, we’ve
        equipped over 50+ aspiring drone pilots with real-world flying skills,
        mission planning experience, and safety knowledge. Our training
        ecosystem supports entrepreneurs, agri-tech workers, and first
        responders across Andhra Pradesh and Telangana — turning passion into
        profession with every flight.
      </p>
     <div id="trainCardStats">
         <ul>
        <li>50+ Certified Pilots</li>
        <li>10+ On-Ground Workshops Conducted</li>
      </ul>
      <ul>
        <li>20+ Rural Youth Transformed into UAV Operators</li>
        <li>100+ Training Hours Delivered</li>
      </ul>
     </div>
     <div id="bgcirclePattern">
        <div id="bigCircle">
            <div id="innerCircle"></div>
        </div>
     </div>
    </section>
  );
}

export default TrainCard;
