import { useEffect, useRef, useState } from "react";
import Navbar from "../Navbar/navbar";
import "./LandingPage.css";

const LandingPage = () => {
  const imgurl = "https://res.cloudinary.com/teepublic/image/private/s--je6Otrii--/t_Resized%20Artwork/c_crop,x_10,y_10/c_fit,w_437/c_crop,g_north_west,h_626,w_470,x_-16,y_-20/g_north_west,u_upload:v1462829015:production:blanks:mtl53ofohwq5goqjo9ke,x_-411,y_-345/b_rgb:eeeeee/c_limit,f_auto,h_630,q_auto:good:420,w_630/v1583914291/production/designs/8420788_0.jpg";
  const imageRef = useRef(null);
  const divRefs = useRef([]);
  const [currentDivIndex, setCurrentDivIndex] = useState(0);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = divRefs.current.findIndex((div) => div === entry.target);
          setCurrentDivIndex(index); // Update the currentDivIndex based on the intersecting div
          entry.target.classList.add("animate");
        } else {
          entry.target.classList.remove("animate");
        }
      });
    }, options);

    divRefs.current.forEach((div) => {
      if (div) {
        observer.observe(div);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (imageRef.current && divRefs.current[currentDivIndex]) {
      const targetDiv = divRefs.current[currentDivIndex];
      const rect = targetDiv.getBoundingClientRect();
      const parentRect = targetDiv.parentElement.getBoundingClientRect();
      const offsetTop = rect.top - parentRect.top;
      imageRef.current.style.zIndex = "1";
      imageRef.current.style.transform = `translateY(${offsetTop}px)`;
    }
  }, [currentDivIndex]);

  return (
    <>
      <Navbar />
      <div className="scrolling-container">
        <img src={imgurl} alt="T-shirt" className="tshirt" ref={imageRef} />
        {[...Array(5)].map((_, index) => (
          <div
            key={index}
            className="scrolling-div"
            ref={(el) => (divRefs.current[index] = el)}
          >
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod
              malesuada.
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default LandingPage;