import "./Benefits.css";
import "./benefitsRes.css"
import crops_analytics from "../../../Assets/crops-analytics.png";
import agri_produce from "../../../Assets/agricultural-produce.png";
import fair_trade from "../../../Assets/fair-trade.png";
import organizer from "../../../Assets/organizer.png";

const Benefits = () => {
  return (
    <>
      <section id="benefitsContainer">
        <h2>Driving Growth Through Innovation</h2>

        <div id="benefitsList">
          <div className="benefit">
            <img src={crops_analytics} alt="" />
            <h3>30%</h3>
            <p>Increase Crop Yield</p>
          </div>
          <div className="benefit">
            <img src={organizer} alt="" />
            <h3>40 - 60%</h3>
            <p>Time Savings in Farm Management</p>
          </div>
          <div className="benefit">
            <img src={fair_trade} alt="" />
            <h3>30 - 50%</h3>
            <p>Reduce the Cost of Labour and Resource</p>
          </div>
          <div className="benefit">
            <img src={agri_produce} alt="" />
            <h3>10 - 15%</h3>
            <p>Reduction in Crop loss</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Benefits;
