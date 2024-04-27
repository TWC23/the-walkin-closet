import { useNavigate } from "react-router-dom";
import Navbar from "../../Navbar/navbar";
import "./varsity-landing.css";

function VarsityLanding() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <showcase-flex>
        <showcase-left>
          <span className="outer">Rep Your<br />Batch.<span className="inner"> Rep<br />Your Style.</span></span>
          <button onClick={() => navigate("/varsity-form")}>Pre-order now</button>
        </showcase-left>
        <img src="https://yourdesignstore.s3.amazonaws.com/uploads/yds/productImages/full/1629717737612384e9619ceYDS_Product_4@2x.jpg" alt="Varsity-Image"></img>
      </showcase-flex>
    </>
  );
}

export default VarsityLanding;