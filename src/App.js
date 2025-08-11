// import './App.css';
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";

import "./Variables.css";
import Home from "../src/components/Home/Home.jsx";
import Service from "../src/components/Service/Service.jsx";
import Product from "../src/components/Product/Product.jsx";
import Soon from "./components/soon/Soon.jsx"
import FAQ from './components/FAQSection/FAQ.jsx';

const App = () => {
  const [isRateLimited, setIsRateLimited] = useState(false);
  const [Faqs, setFAQs] = useState([]);
  const [servFaqs, setServFAQs] = useState([]);
  const [productFaqs, setProductFAQs] = useState([]);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchFAQs = async () => {
      try {
        const resFAQ = await axios.get("http://localhost:5000/faq");
        const resProduct = await axios.get("http://localhost:5000/products");
        setFAQs(resFAQ.data);

        setProducts(resProduct.data);
        setIsRateLimited(false);
      } catch (error) {
        // console.error("Error fetching faqs:", error);
        if (error.response?.status === 429) {
          setIsRateLimited(true);
          alert("You have exceeded the rate limit. Please try again later.");
        } else {
          alert(
            "An error occurred while fetching faqs. Please try again later."
          );
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchFAQs();
  }, []);
  useEffect(() => {
    if (Faqs.length > 0) {
      setServFAQs(Faqs.filter((faq) => faq.type === "service"));
      setProductFAQs(Faqs.filter((faq) => faq.type === "product"));
    }
  }, [Faqs]);

  return (
    <div className="App">
      {isRateLimited && (
        <p>You have exceeded the rate limit. Please try again later.</p>
      )}
      {isLoading && <p>Loading...</p>}
      {!isLoading && (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Service faqData={servFaqs} />} />
            <Route
              path="/products"
              element={<Product productData={products} faqData={productFaqs} />}
            />
            <Route path="/commingsoon" element={<Soon></Soon>} />
            <Route path="/faq" element={<FAQ faqData={Faqs}></FAQ>} />
          </Routes>
        </BrowserRouter>
      )}
      {/* <Home /> */}
    </div>
  );
};

export default App;
