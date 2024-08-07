import { useState } from "react";

import "./Form.css";
import {
  setOrders,
  uploadFiles,
  uploadImages,
} from "../../../FirebaseFunctions/firebase";
import PopUp from "../../../customs/popup/popup.jsx";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../../../Navbar/navbar";
import { OrderFiller } from "../../../../src/assets/index.js";

// TODO: Add pattern param to input fields for validation

const Form = () => {
  const [org, setOrg] = useState();
  const [contact, setContact] = useState();
  const [email, setEmail] = useState();
  const [quantity, setQuantity] = useState();
  const [instructions, setInstructions] = useState();
  const [address, setAddress] = useState();
  const [details, setDetails] = useState();
  const [design, setDesign] = useState();
  const [visibility, setVisibility] = useState(false);
  const [heading, setHeading] = useState("");
  const [modalContent, setModalContent] = useState();
  const navigate = useNavigate();
  const { category } = useParams();

  const submitHandler = async () => {
    if (
      org == null ||
      contact == null ||
      email == null ||
      quantity == null ||
      instructions == null ||
      address == null ||
      details == null ||
      design == null
    ) {
      setVisibility(!visibility);
      setHeading("Empty Fields");
      setModalContent("Please fill all the fields");
      console.log(visibility);
    } else {
      try {
        await setOrders(org, contact, email, quantity, instructions, address);
        await uploadFiles(org, details);
        await uploadImages(org, design);
        navigate("/thanks");
      } catch (e) {
        setVisibility(!visibility);
        setHeading("Submission Failed");
        setModalContent(e.message);
      }
    }
  };

  const closeHandler = () => {
    setVisibility(!visibility);
  };

  return (
    <>
      <Navbar />
      <form>
        <PopUp onClose={closeHandler} show={visibility} title={heading}>
          {modalContent}
        </PopUp>

        <col-left>
          <order-details>
            <h1>Order Details</h1>
            <input-field>
              <label htmlFor="name">Club/Project Name:</label>

              <input
                type="text"
                id="name"
                placeholder="Club/Project Name"
                pattern=""
                onChange={(e) => setOrg(e.target.value)}
              />
            </input-field>

            <input-field>
              <label htmlFor="contact">Contact Number:</label>
              <input
                type="text"
                id="contact"
                placeholder="Phone Number"
                onChange={(e) => setContact(e.target.value)}
              ></input>
            </input-field>

            <input-field>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              ></input>
            </input-field>
          </order-details>
          <shipping-details>
            <h1>Shipping Details</h1>
            <input-field>
              <label htmlFor="address">Shipping Address:</label>
              <input
                type="text"
                id="address"
                placeholder="Shipping Address"
                onChange={(e) => setAddress(e.target.value)}
              ></input>
            </input-field>
          </shipping-details>
        </col-left>

        <border-line></border-line>

        <col-right>
          <filler-image>
            <img src={OrderFiller} className="orderfiller" alt="" />
          </filler-image>
          <design-details>
            <h1>Design Details</h1>
            <input-field>
              <label htmlFor="order quantity">Order quantity:</label>
              <input
                type="number"
                id="quantity"
                placeholder="Enter Order Quantity"
                onChange={(e) => setQuantity(e.target.value)}
              ></input>
            </input-field>

            <input-field>
              <label htmlFor="instructions">Specific Instructions:</label>
              <input
                type="text"
                id="instructions"
                placeholder="Anything extra?"
                onChange={(e) => setInstructions(e.target.value)}
              ></input>
            </input-field>
            <upload-files>
              <input-field>
                <label htmlFor="details">Tshirt details (.xls):</label>
                <upload-input>
                  <file-name>{details?.name}</file-name>
                  <label className="upload-file" htmlFor="formId1">
                    Upload
                    <input
                      name=""
                      type="file"
                      id="formId1"
                      hidden
                      onChange={(e) => setDetails(e.target.files[0])}
                    />
                  </label>
                  {/* <input
                  onChange={handleChangeDetails}
                  ref={hiddenFileInput1}
                  type="file"
                />
                <button onClick={handleClick1}>
                  Upload
                  <input
                    onChange={handleChangeDetails}
                    ref={hiddenFileInput1}
                    type="file"
                  />
                </button> */}
                </upload-input>
              </input-field>
            </upload-files>

            <upload-files>
              <input-field>
                <label htmlFor="design">Design (.jpg):</label>
                <upload-input>
                  <file-name>{design?.name}</file-name>
                  <label className="upload-file" htmlFor="formId2">
                    Upload
                    <input
                      name=""
                      type="file"
                      id="formId2"
                      hidden
                      onChange={(e) => setDesign(e.target.files[0])}
                    />
                  </label>

                  {/* <input
                  type="file"
                  ref={hiddenFileInput2}
                  onChange={handleChangeDesign}
                  
                />
                <button onClick={handleClick2}>Upload</button> */}
                </upload-input>
              </input-field>
            </upload-files>
            <submit-button>
              <button onClick={submitHandler} type="button" formTarget="_top">
                Submit
              </button>
            </submit-button>
          </design-details>
        </col-right>

        <input-fields></input-fields>
      </form>
    </>
  );
};

export default Form;
