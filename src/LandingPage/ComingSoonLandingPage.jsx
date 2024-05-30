import ComingImage from "./Components/Image display/ComingImage";
import "./ComingSoonLandingPage.css";
import Navbar from "../Navbar/navbar";
import Footer from "../Footer/footer";

export const ComingSoonLandingPage = () => {
  return (
    <>
      <Navbar />
      <ComingImage />
      <Footer />

      {/* {/* <div className="coming-soon">
        <img src={ComingSoonBlur} alt="Coming Soon" />
      </div> */}
      {/* <div className="coming-soon">
      </div>

      <div className="footer">
      </div> */}
    </>
  );
};
{
  /* <img style={{ width: '100%', height: '85%'}} src={ComingSoonBlur} alt="Coming Soon" /> */
}
