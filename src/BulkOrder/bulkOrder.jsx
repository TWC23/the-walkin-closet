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
          <h1>Categories</h1>
          <grid-items>
            <grid-item>
              <img src="https://yourdesignstore.s3.amazonaws.com/uploads/yds/productImages/full/1629717737612384e9619ceYDS_Product_4@2x.jpg" alt="" className="grid-tile" />
              <grid-item-overlay className="grid-item-overlay"></grid-item-overlay>
              <button className="order-button" onClick={() => navigate("/order-form/Varsity")}>Varsities</button>
            </grid-item>
            <grid-item>
              <img src="https://5.imimg.com/data5/ZZ/CZ/GG/SELLER-40281611/plain-black-hoodie.jpg" alt="" className="grid-tile" />
              <grid-item-overlay></grid-item-overlay>
              <button className="order-button" onClick={() => navigate("/order-form/Hoodie")}>Hoodies</button>
            </grid-item>
            <grid-item>
              <img src="https://5.imimg.com/data5/SELLER/Default/2023/10/353189446/XC/DF/LD/1044551/men-plain-collar-black-polo-t-shirts.jpg" alt="" className="grid-tile" />
              <grid-item-overlay></grid-item-overlay>
                <button className="order-button" onClick={() => navigate("/order-form/polo")}>Polos</button>
              
            </grid-item>
            <grid-item>
              <img
                src="https://i.pinimg.com/originals/c0/12/af/c012af0a0bf232e9d5b6f776e78cf8fc.png"
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
