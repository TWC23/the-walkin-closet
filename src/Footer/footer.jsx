import { InstagramLogo } from "../assets/index";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        {/* <div className="footer-links">
                    <ul>
                        <li>
                            <a href="#">About Us</a>
                        </li>
                        <li>
                            <a href="#">Contact Us</a>
                        </li>
                        <li>
                            <a href="#">Blog</a>
                        </li>
                        <li>
                            <a href="#">FAQ</a>
                        </li>
                    </ul>
                </div> */}
        <div className="footer-social">
          <ul>
            {/* <li>
                            <a href="#">Facebook</a>
                        </li> */}
            <li>
              <a href="https://www.instagram.com/_thewalk.incloset/">
                <img src={InstagramLogo} />
              </a>
            </li>
            {/* <li>
                            <a href="#">Twitter</a>
                        </li>
                        <li>
                            <a href="#">LinkedIn</a>
                        </li> */}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
