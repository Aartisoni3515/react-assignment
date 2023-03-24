import React from "react";
import Routes from "../Routes";
import Form from "react-bootstrap/Form";
import { MdKeyboardArrowRight } from "react-icons/md";
import { GrPowerReset } from "react-icons/gr";
import { MDBCheckbox } from "mdb-react-ui-kit";
import "./PaymentSetup.css";

const PaymentSetup = () => {
  return (
    <>
      <div className="DashBoard">
        <div className="head">
          <h2>View clients</h2>
          <p>
            client master / <span>View clients</span>
          </p>
        </div>

        <div className="dashboard-data">
          <Routes />

          <div className="CreateProfile">
            <h3> Payment Setup</h3>
            <p style={{ textAlign: "left" }}>set up Payments for clients</p>
          </div>

          <div className="form-group">
            <input
              // style={{ width: "95%" }}
              required
              placeholder="Billing Address*"
              type="text"
              className="form-type"
              id="input-b"
            />
            <Form.Select
              className="form-select"
              aria-label="Default select example"
            >
              <option>Select State</option>
              <option value="1">Maharastra</option>
              <option value="2">Rajashthan</option>
              <option value="3">Kerala</option>
            </Form.Select>
            <Form.Select
              className="form-select"
              aria-label="Default select example"
              id="input-c"
            >
              <option>Select City</option>
              <option value="1">Maharastra</option>
              <option value="2">Rajashthan</option>
              <option value="3">Kerala</option>
            </Form.Select>
            <input
              required
              placeholder="Pincode"
              type="text"
              className="form-type"
              id="input-p"
            />

            <Form.Select
              className="form-select"
              aria-label="Default select example"
            >
              <option>Select City</option>
              <option value="1">Maharastra</option>
              <option value="2">Rajashthan</option>
              <option value="3">Kerala</option>
            </Form.Select>

            <input
              required
              placeholder="Discount"
              type="text"
              className="form-type"
              id="input-d"

            />

            <input
              required
              placeholder="Discount"
              type="text"
              className="form-type"
              id="input-d"
            />
            <input
              required
              placeholder="Reason"
              type="text"
              className="form-type"
              id="input-d"
            />
          </div>

          <div className="payment">
            <div className="payment-mode">
              <h6>Payment Mode</h6>
              <MDBCheckbox
                name="inlineCheck"
                value="option1"
                label="UPI"
                inline
                className="check-box"
              />
              <MDBCheckbox
                name="inlineCheck"
                id="inlineCheckbox2"
                value="option2"
                label="Net Banking"
                inline
                className="check-box"
              />
              <MDBCheckbox
                name="inlineCheck"
                id="inlineCheckbox3"
                value="option3"
                label="Cash"
                inline
                className="check-box"
              />
              <MDBCheckbox
                name="inlineCheck"
                id="inlineCheckbox3"
                value="option3"
                label="Cheque"
                inline
                className="check-box"
              />{" "}
              <MDBCheckbox
                name="inlineCheck"
                id="inlineCheckbox3"
                value="option3"
                label="Other"
                inline
                className="check-box"
              />
            </div>

            <div className="payment-status">
              <h6>Payment Status</h6>
              <MDBCheckbox
                name="inlineCheck"
                id="inlineCheckbox1"
                value="option1"
                label="Paid"
                inline
                className="payment-box"
              />
              <MDBCheckbox
                name="inlineCheck"
                id="inlineCheckbox2"
                value="option2"
                label="Pending"
                inline
                className="payment-box"
              />
            </div>
          </div>
          <div className="Buttons">
            <button className="btn-2">
              Save & Continue
              <MdKeyboardArrowRight style={{ fontSize: "20px" }} />{" "}
            </button>
            <button className="reset">
              <GrPowerReset /> Reset
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentSetup;
