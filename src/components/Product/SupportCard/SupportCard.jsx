import React from 'react';
import './supportCard.css'; 

function FinancialSupportCard() {
  return (
    <section id="supportCard">
      <h3>Financial Support Made Easy</h3>
     <div id="supportCardStats">
      <div className="loanCard">
        <h4>AIF Loan Facilities</h4>
        <ul>
        <li>Loan Amount: Up to ₹2 crores per unit</li>
        <li>3% interest subsidy for 7 years</li>
      </ul>
      </div>
      
       <div className='loanCard'>
        <h4>SMAM Subsidy Details</h4>
        <ul>
        <li>40-50% subsidy for individual farmers (up to ₹4 lakhs).</li>
        <li>Enhanced subsidy for SC/ST/Women farmers (up to 50%).</li>
      </ul>
      </div>
      
     </div>
     <div id="bgcirclePattern">
        <div id="bigCircle">
            <div id="innerCircle"></div>
        </div>
     </div>
    </section>
  )
}

export default FinancialSupportCard;
