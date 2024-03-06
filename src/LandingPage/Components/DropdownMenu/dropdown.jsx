// react imports
import { useNavigate } from "react-router-dom";

// css imports
import "./dropdown.css";

const Dropdown = () => {
  const navigate = useNavigate();

  return (
    <div className="menu">
      <ul>
        <a href="/login" onClick={() => navigate("/login")}>
          <li>
            Login
          </li>
        </a>
      </ul>
    </div>
  );
};

export default Dropdown;
