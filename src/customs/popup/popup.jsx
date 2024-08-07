/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from "react";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import popupStyles from "./popup.module.css";

const PopUp = (props) => {
  const [show, setShow] = useState(false);

  const closeHandler = (e) => {
    setShow(false);
    props.onClose(false);
  };

  useEffect(() => {
    setShow(props.show);
  }, [props.show]);

  return (
    <div
      style={{
        visibility: show ? "visible" : "hidden",
        opacity: show ? "1" : "0",
      }}
      className={popupStyles.overlay}
    >
      <div className={popupStyles.popup}>
        <h2>{props.title}</h2>
        <span className={popupStyles.close} onClick={closeHandler}>
          &times;
        </span>
        <div className={popupStyles.content}>{props.children}</div>
      </div>
    </div>
  );
};

PopUp.propTypes = {
  title: PropTypes.string.isRequired,
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default PopUp;
