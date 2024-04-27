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
        <img alt="Kapde"></img>
      </showcase-flex>
    </>
  );
}

export default VarsityLanding;