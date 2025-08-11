import React from 'react';
import './droneCard.css';



function DroneCard({drone}) {
  return (
    <section id="droneCard">
       <div id="droneCntnt" className={drone.rCard? "rCntnt" : ""}>
        <img src={drone.imgUrl} alt="" />
        <div id="droneContext" className={drone.rCard ? "" : "rDesc"}>
            <h2>{drone.type}</h2>
            <h3>{drone.name}</h3>
            <h4>{drone.specifications}</h4>
            <p>{drone.desc}</p>
            <div id="actionDiv">
                <button className='commonBtn'>Know More</button>
                <a href="#home">Contact us for this</a>
            </div>
        </div>
       </div>
    </section>
  )
}

export default DroneCard
