import React from 'react';
import Navbar from '../Navbar/Navbar.jsx';
import FAQ from '../FAQSection/FAQ.jsx';
import Footer from '../Footer/Footer.jsx';

import DroneCard from './drone_card/DroneCard.jsx';
import ProductCard from './product_card/ProductCard.jsx';
import SupportCard from './SupportCard/SupportCard.jsx';

import droneData from '../../AppData/DroneData.json';

function Product({productData,faqData}) {
  return (
    <section id="productContainer">
      <Navbar extraClass="true"></Navbar>

       {droneData.drones.map((drone) => (
        <DroneCard key={drone.id} drone={drone} />
      ))}

      <SupportCard></SupportCard>
      <ProductCard productData = {productData}></ProductCard>
      <FAQ faqData={faqData}></FAQ>
      <Footer></Footer>
    </section>
  )
}

export default Product;
