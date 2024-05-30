import { useState } from "react";
import Navbar from "../../Navbar/navbar";
import PopUp from "../../customs/popup/popup";
import {
  setOrders,
  uploadFiles,
  uploadImages,
} from "../../FirebaseFunctions/firebase";
import { useNavigate } from "react-router-dom";
import "./OrderForm.css";

const OrderForm = () => {
  const [units, setUnits] = useState();
  const [branch, setBranch] = useState();
  const [section, setSection] = useState();
  const [design, setDesign] = useState();
  const [visibility, setVisibility] = useState(false);
  const [heading, setHeading] = useState("");
  const [modalContent, setModalContent] = useState();
  const navigate = useNavigate();

  const submitHandler = async () => {
    if (branch == null || section == null || units == null || design == null) {
      setVisibility(!visibility);
      setHeading("Empty Fields");
      setModalContent("Please fill all the fields");
      console.log(visibility);
    } else {
      try {
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
    <varsity-page-wrapper>
      <Navbar />
      <order-form>
        <PopUp onClose={closeHandler} show={visibility} title={heading}>
          {modalContent}
        </PopUp>

        <form-body>
          <form-header>
            <h1>Order Form</h1>
          </form-header>
          <form-content>
            <form-group>
              <label>Branch</label>
              <input
                type="text"
                id="branch"
                name="branch"
                placeholder="Branch"
                onChange={(e) => setBranch(e.target.value)}
              />
            </form-group>
            <form-group>
              <label>Section</label>
              <input
                type="text"
                id="section"
                name="section"
                placeholder="section Number"
                onChange={(e) => setSection(e.target.value)}
              />
            </form-group>
            <form-group>
              <label>Units</label>
              <input
                type="text"
                id="units"
                name="units"
                placeholder="units"
                onChange={(e) => setUnits(e.target.value)}
              />
            </form-group>
            <upload-files>
              <input-field>
                <label htmlFor="design">Design (.jpg):</label>
                <upload-input>
                  <file-name>{design?.name}</file-name>
                  <label className="upload-file" htmlFor="formId2">
                    <p>Upload</p>
                    <input
                      name=""
                      type="file"
                      id="formId2"
                      hidden
                      onChange={(e) => setDesign(e.target.files[0])}
                    />
                  </label>
                </upload-input>
              </input-field>
            </upload-files>

            <form-group>
              <button onClick={submitHandler}>Submit</button>
            </form-group>
          </form-content>
        </form-body>
      </order-form>
    </varsity-page-wrapper>
  );
};

export default OrderForm;
