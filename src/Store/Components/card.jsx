import "./card.css";

function Card() {
  return (
    <div className="card">
      <img
        src="https://yourdesignstore.s3.amazonaws.com/uploads/yds/productImages/full/1629717737612384e9619ceYDS_Product_4@2x.jpg"
        alt="Avatar"
        style={{ width: "100%" }}
      />
      <div className="card-container">
        <h4>
          <b>AZIRA</b>
        </h4>
        <p>Lace Accent Kurta with Dupatta</p>
        <p className="price">Rs. 499</p>
        <span>
          <button className="button">Buy Now</button>
          <button className="button">Add to Bag</button>
        </span>
      </div>
    </div>
  );
}

export default Card;