import React from 'react';
import "./Footer.css";
import { NavLink } from "react-router-dom";

import logo from "../../Assets/DroneAspirants_logo.png";
import {Phone, Mail, MapPin} from 'lucide-react';

function Footer() {
    return (
        <footer>
            <img src={logo} alt="" id='brandLogo' />
            <section id="footerTop">
                <div id="footCntct">
                    <h2>Ready to Take Off? <br /><span>Let's Fly Together.</span></h2>
                    <div id="inputField">
                        <input type="text" />
                        <button>Let's talk</button>
                    </div>
                </div>
                <div id="footAdres">
                    <ul>
                        <li><Phone />+91 93924 66177</li>
                        <li> <Mail />  info@agroskydroneaspirant.com</li>
                        <li><MapPin /> <span>Sowbhagya Nagar, Vuyyuru, Telangana, India</span></li>
                    </ul>
                </div>
            </section>
            <hr />
            <section id="footerBottom">
                <ul>
                    <li className="nav_header">Navigation</li>
                    <li className='links'><a href='/'>Home</a></li>
                    <li className='links'><NavLink to="/commingsoon">About</NavLink></li>
                    <li className='links'><NavLink to="/services">Services</NavLink></li>
                    <li className='links'><NavLink to="/products">Products</NavLink></li>
                    <li className='links'><NavLink to="/commingsoon">Courses</NavLink></li>
                    <li className='links'><NavLink to="/commingsoon">Blog</NavLink></li>
                    <li className='links'><NavLink to="/commingsoon">Contact</NavLink></li>
                </ul>

                <ul>
                    <li className="nav_header">Quick links</li>
                    <li className='links'><NavLink to="/commingsoon">Privacy Policy</NavLink></li>
                    <li className='links'><NavLink to="/commingsoon">Terms & Conditions</NavLink></li>
                    <li className='links'><NavLink to="/commingsoon">Sitemap</NavLink></li>
                    <li className='links'><NavLink to="/faq">FAQs</NavLink></li>
                </ul>

                <ul>
                    <li className="nav_header">Follow us</li>
                    <li className='links'><a href='/commingsoon'>Facebook</a></li>
                    <li className='links'><a href='/commingsoon'>Instagram</a></li>
                    <li className='links'><a href='/commingsoon'>Linkdin</a></li>
                    <li className='links'><a href='/commingsoon'>Youtube</a></li>
                    <li className='links'><a href='/commingsoon'>X(twitter)</a></li>
                </ul>
            </section>
            <hr />
            <p id='footEndText'>© 2025 AgroSky Drone Aspirant Private Limited. All rights reserved. Designed by Nanda Kishore.</p>
        </footer>
    )
}

export default Footer
