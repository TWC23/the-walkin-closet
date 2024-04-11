import PropTypes from "prop-types";
import "./card.css";

const Card = ({ imgProp, altText }) => {
  return (
    <img className="card-image" src = { imgProp } alt = { altText } />
  );
}

Card.propTypes = {
  imgProp: PropTypes.isRequired,
  altText: PropTypes.string.isRequired,
}

export default Card;