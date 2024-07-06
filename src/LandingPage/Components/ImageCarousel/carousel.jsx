import { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import PropTypes from "prop-types";
import "./carousel.css";

const ImageCarousel = ({ data }) => {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };

  return (
    <>
      <carousel>
        <BsArrowLeftCircleFill
          onClick={prevSlide}
          className="arrow arrow-left"
        />
        {data.map((item, index) => {
          return (
            <img
              className={slide === index ? "slide" : "slide slide-hidden"}
              src={item.src}
              alt={item.alt}
              key={index}
            />
          );
        })}
        <BsArrowRightCircleFill
          onClick={nextSlide}
          className="arrow arrow-right"
        />
        <span className="indicators">
          {data.map((_, index) => {
            return (
              <button
                key={index}
                className={
                  slide === index ? "indicator" : "indicator indicator-inactive"
                }
                onClick={() => setSlide(index)}
              ></button>
            );
          })}
        </span>
      </carousel>
    </>
  );
};

ImageCarousel.propTypes = {
  data: PropTypes.array.isRequired,
};

export default ImageCarousel;
