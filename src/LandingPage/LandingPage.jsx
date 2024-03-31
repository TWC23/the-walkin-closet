import Navbar from "../Navbar/navbar";
import ImageCarousel from "./Components/ImageCarousel/carousel";
import { slides } from "./Components/ImageCarousel/carouselData";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <landing-wrapper>
        <landing-carousel>
          <ImageCarousel data={slides} />
        </landing-carousel>
        <landing-highlight>
          <h2>Experience<br />Fashion<br />Without Limits</h2>
          <p>Discover your signature style with Limitless Fashion, your ultimate destination for online shopping.</p>
        </landing-highlight>
        <new-arrivals>kaise</new-arrivals>
        <our-favorites>ho</our-favorites>
      </landing-wrapper>
    </>
  );
};

export default LandingPage;
