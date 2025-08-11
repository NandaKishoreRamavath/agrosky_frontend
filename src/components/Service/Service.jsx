import React from 'react';
import Navbar from '../Navbar/Navbar.jsx';
import Servicecard from './service cards/ServiceCard.jsx';
import TrainCard from './trainingCard/TrainCard.jsx';
import FAQ from '../FAQSection/FAQ.jsx';
import Footer from "../Footer/Footer.jsx";


import ServiceData from '../../AppData/servicesData.js'



function Service({faqData}) {
  return (
    <section id="serviceContainer">
 
      <Navbar extraClass="true"/>
      <Servicecard  ServData = {ServiceData.AgroService}/>  
      <Servicecard  ServData = {ServiceData.SurvillenceService}/>   
      <Servicecard  ServData = {ServiceData.RescueService}/>   
      <TrainCard/>
      <Servicecard  ServData = {ServiceData.FireFightService}/>  
      <FAQ faqData = {faqData}></FAQ>
      

      <Footer/>
     
      
    </section>
  )
}

export default Service;
