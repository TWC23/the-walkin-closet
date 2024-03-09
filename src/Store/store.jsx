// nav and footer
import Navbar from "../LandingPage/Components/Navbar/navbar";
import Footer from "../LandingPage/Components/Footer/footer";
import Card from "./Card/card";

// css imports
import "./store.css";

const Store = () => {
  return (
    <>
      <Navbar />
      <div className="storeBase">
        <div className="cards">
          <Card />
        </div>
        <div className="cards">
          <Card />
        </div>
        <div className="cards">
          <Card />
        </div>
        <div className="cards">
          <Card />
        </div>
        <div className="cards">
          <Card />
        </div>
        <div className="cards">
          <Card />
        </div>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
      </div>
      <Footer />
    </>
  );
};

export default Store;
