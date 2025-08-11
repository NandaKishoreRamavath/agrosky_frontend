import React from 'react';
import './FAQ.css';

import { ChevronDown } from 'lucide-react';

function FAQ({ faqData }) {


  return (
    <section id="faqSec">
      <h2>Frequently Asked Questions</h2>
      {faqData.map((item, index) => (
        <div key={index} className="faq_item">
          <div id="faqQuestion">
            <h3>{item.question} </h3>
            <button
              onClick={(e) => {
                const answerDiv = e.currentTarget.parentElement.nextElementSibling;
                answerDiv.classList.toggle('dropdown_active');  

                e.currentTarget.classList.toggle('btnRotate')
              }}
            >
              <ChevronDown size={30} /></button>
          </div>
          <div className="faqAnswer">
            <p>{item.answer}</p>
          </div>
        </div>
      ))}

      <button className='commonBtn'> More FAQs </button>
    </section>
  )
}

export default FAQ;
