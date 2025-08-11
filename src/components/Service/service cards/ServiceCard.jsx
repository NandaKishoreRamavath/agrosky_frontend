import React from "react";
import "./serviceCard.css";



function ServiceCard({ ServData }) {
  return (
      <section id="serviceCard"  className={ServData.rightCard ? "Rcard" : ""}>
      <div id="servCntnt" className={ServData.rightCard ? "Rcntnt" : ""}>
        <img src={ServData.ImageSrc} alt="" />
        <div id="servDesc" className={ServData.rightCard ? "Rdesc" : ""}>
          <h3>{ServData.sideHead}</h3>
          <p>{ServData.desc}</p>
          <h2 style={{ width: `${ServData.widthH}%` }}>{ServData.Head}</h2>
        </div>
      </div>
      <div id="servExtend">
        <ul>
          {ServData.ul.map((item, idx) => {
            return <li key={idx}>{item}</li>;
          })}
        </ul>
      </div>
    </section>
  );
}

export default ServiceCard;
