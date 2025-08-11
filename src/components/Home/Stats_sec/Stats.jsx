import React from 'react';
import "./Stats.css";
import Drone_school from "../../../Assets/drone_school.jpeg";
function Stats() {
    return (
        <>
            <section id="stats">
                <div id="bgBlock"></div>
                <div id="statsContainer">
                    <h3 id="baseHeader">Future Ready</h3>
                    <img src={Drone_school} alt="" />
                    <div id="statsContent">
                        <h2>
                            From Proven <br />
                            Results to Global Vision
                        </h2>
                        <table>
                            <tbody>
                                <tr>
                                <td>
                                    <h3>200+</h3>
                                    <span>Drones Successfully Delivered</span>
                                </td>
                                <td>
                                    <h3>1000+</h3>
                                    <span>Staisfied Customers</span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h3>100+</h3>
                                    <span>Strategic Collaboration</span>
                                </td>
                                <td>
                                    <h3>50+</h3>
                                    <span>Certified Drone Pilots</span>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Stats;
