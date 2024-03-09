// asset import
import { OrderFiller } from "../../assets/index";

// css import
import "./card.css";

const Card = () => {
  return (
    <>
      <div className="cardBase">
        <div className="card">
          <div className="card-head">
            <img src={OrderFiller} alt="Image" className="prod-img" />
          </div>
          <div className="card-body">
            <span className="product-brand">
              Nike
              <span className="product-color right">
                <ul className="ul-color">
                  <li>
                    <a href="#" className="orange active"></a>
                  </li>
                  <li>
                    <a href="#" className="green"></a>
                  </li>
                  <li>
                    <a href="#" className="yellow"></a>
                  </li>
                </ul>
              </span>
            </span>
            <span className="product-title">
              <b>Coming Soon</b>
              <span className="badge">New</span>
            </span>
            <span className="product-price">
              <b>Rs. 499</b>
            </span>
            <span className="product-buttons">
              <button className="btn" type="button">
                Buy Now
              </button>
              <span className="right">
                <button className="btn" type="button">
                  Add to Bag
                </button>
              </span>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
