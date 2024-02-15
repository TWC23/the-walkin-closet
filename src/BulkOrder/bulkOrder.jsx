import { useNavigate } from "react-router-dom";
import "./bulkOrder.css";
import Navbar from "../LandingPage/Components/Navbar/navbar";

const BulkOrder = () => {


    const navigate = useNavigate()

  return (
    <>
      <Navbar/>
      <grid-body>
        <grid-container>
          <grid-items>
            <grid-item>
              <img src="src/assets/Varsity.jpg" alt="" className="grid-tile" />
              <grid-item-overlay className="grid-item-overlay"></grid-item-overlay>
              <button className="order-button" onClick={() => navigate("/order-form/Varsity")}>Varsities</button>
            </grid-item>
            <grid-item>
              <img src="src\assets\Hoodie.jpg" alt="" className="grid-tile" />
              <grid-item-overlay></grid-item-overlay>
              <button className="order-button" onClick={() => navigate("/order-form/Hoodie")}>Hoodies</button>
            </grid-item>
            <grid-item>
              <img src="src/assets/polo.jpg" alt="" className="grid-tile" />
              <grid-item-overlay></grid-item-overlay>
                <button className="order-button" onClick={() => navigate("/order-form/polo")}>Polos</button>
              
            </grid-item>
            <grid-item>
              <img
                src="src/assets/round-necks.jpg"
                alt=""
                className="grid-tile"
              />
              <grid-item-overlay></grid-item-overlay>
                <button className="order-button" onClick={() => navigate("/order-form/round-necks")}>Round-Necks</button>
            </grid-item>
          </grid-items>
        </grid-container>
      </grid-body>
    </>
  );
};

export default BulkOrder;
