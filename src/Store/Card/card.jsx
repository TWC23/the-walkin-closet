// asset import
import { ComingSoonBlur } from "../../assets/index";

// css import
import "./card.css";

const Card = () => {
  return (
    <>
      <div className="cardBase">
        <div className="card">
          <div className="card-head">
            <img src={ComingSoonBlur} alt="Image" className="prod-img" />
          </div>
          <div className="card-body">
            <div className="product-desc">
              <span className="product-brand"> Nike </span>
              <span className="product-title">
                Coming <b>Soon</b>
              </span>
              <span className="product-caption">New Collection</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
