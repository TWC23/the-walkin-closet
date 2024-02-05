import { useRef, useState } from "react";
import "./Form.css";
import {
  setOrders,
  uploadFiles,
  uploadImages,
} from "../../../FirebaseFunctions/firebase";
import { OrderFiller } from "../../../assets";
const Form = () => {
  const [org, setOrg] = useState();
  const [contact, setContact] = useState();
  const [email, setEmail] = useState();
  const [quantity, setQuantity] = useState();
  const [instructions, setInstructions] = useState();
  const [address, setAddress] = useState();
  const [details, setDetails] = useState();
  const [design, setDesign] = useState();


  const submitHandler = async () => {
    setOrders(org, contact, email, quantity, instructions, address);
    uploadFiles(org, details);
    uploadImages(org, design);
  };



  
  return (
    <form>
      <col-left>
        <h1>Order Details</h1>
        <order-details>
          <input-field>
            <label htmlFor="name">Club/Project Name:</label>

            <input
              type="text"
              id="name"
              onChange={(e) => setOrg(e.target.value)}
            />
          </input-field>

          <input-field>
            <label htmlFor="contact">Contact Number:</label>
            <input
              type="text"
              id="contact"
              onChange={(e) => setContact(e.target.value)}
            ></input>
          </input-field>

          <input-field>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
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
              onChange={(e) => setAddress(e.target.value)}
            ></input>
          </input-field>
        </shipping-details>
      </col-left>

      <border-line></border-line>

      <col-right>
        <filler-image>
          <img src={OrderFiller} alt="" />
        </filler-image>
        <design-details>
          <h1>Design Details</h1>
          <input-field>
            <label htmlFor="order quantity">Order quantity:</label>
            <input
              type="number"
              id="quantity"
              onChange={(e) => setQuantity(e.target.value)}
            ></input>
          </input-field>

          <input-field>
            <label htmlFor="instructions">Specific Instructions:</label>
            <input
              type="text"
              id="instructions"
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
                  <input name="" type="file" id="formId1" hidden onChange={(e) => setDetails(e.target.files[0])} />
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
                  <input name="" type="file" id="formId2" hidden onChange={(e) => setDesign(e.target.files[0])} />
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
  );
};

export default Form;
