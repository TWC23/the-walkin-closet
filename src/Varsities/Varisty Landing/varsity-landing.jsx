import { useNavigate } from "react-router-dom";
import Navbar from "../../Navbar/navbar";
import { UpdatedLogo } from "../../assets";
import "./varsity-landing.css";

function VarsityLanding() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <showcase-flex>
        <showcase-left>
          <div className="outer">
            Rep Your
            <br />
            Batch.
            <div className="inner">
              {" "}
              Rep
              <br />
              Your Style.
            </div>
          </div>
          <button onClick={() => navigate("/varsity-form")}>
            Pre-order now
          </button>
        </showcase-left>
        <img
          src="https://yourdesignstore.s3.amazonaws.com/uploads/yds/productImages/full/1629717737612384e9619ceYDS_Product_4@2x.jpg"
          alt="Varsity-Image"
        ></img>
      </showcase-flex>
      <showcase-flex>
        <div className="description">
          More Than Just Merch
          <br />
          It&apos;s Your &apos;25 Experience
          <br />
          <div className="sub-description">
            {" "}
            Designs made BY your batch FOR your batch – not
            <br />
            found anywhere else
          </div>
        </div>
      </showcase-flex>
      <image-flex>
        <img
          src="https://yourdesignstore.s3.amazonaws.com/uploads/yds/productImages/full/1629717737612384e9619ceYDS_Product_4@2x.jpg"
          alt="Varsity-Image"
        />
      </image-flex>
      <showcase-flex>
        <p>
          Crafted with the spirit of MIT Manipal&apos;s Batch of &apos;25 in
          mind, this exclusive collection by The WalkinCloset captures the
          energy, camaraderie, and shared experiences that will define your
          unique year. Wear it with pride and celebrate the memories you&apos;ll
          make together, both inside the classroom and beyond. This
          limited-edition merch is more than just clothing; it&apos;s a symbol
          of your place in Manipal history, a reminder of the bonds you&apos;ll
          forge, and a testament to the incredible journey that awaits
        </p>
        <img src={UpdatedLogo} alt="TWC logo" />
      </showcase-flex>
    </>
  );
}

export default VarsityLanding;
