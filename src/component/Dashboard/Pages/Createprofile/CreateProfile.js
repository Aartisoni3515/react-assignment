import React, { useEffect, useState } from "react";
import Routes from "../Routes";
import Form from "react-bootstrap/Form";
import { MdKeyboardArrowRight } from "react-icons/md";
import { GrPowerReset } from "react-icons/gr";

const CreateProfile = () => {
  const [items, setItems] = useState([]);

  const handleSubmit = (e) => {
    console.log("signup");
    e.preventDefault();
    localStorage.setItem("items", JSON.stringify(items));
  };
  useEffect(() => {}, [items]);

 
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
          <div className="create-profile">
            <div className="CreateProfile">
              <h3> Create Client Profile</h3>
              <p style={{ textAlign: "left" }}>
                Add some basic information related to the client.
              </p>
            </div>

            <div className="file">
              <input
                required
                type="file"
                style={{ display: "none" }}
                id="file"
              />
              <label className="files" htmlFor="file">
                {/* <img src={Add} alt="" /> */}
                <span
                  style={{
                    textAlign: "center",
                    fontSize: "1.5rem",
                    color: "#939596",
                  }}
                >
                  +
                </span>
              </label>
              <div className="file-para">
                <h4>Company Logo</h4>
                <p>Logo ratio should be 1:1 and should be 120px X 120px</p>
              </div>
            </div>
            <form value={items} onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  required
                  placeholder="Company Name"
                  type="text"
                  className="form-control"
                />

                <input
                  required
                  placeholder="Website"
                  type="text"
                  className="form-control"
                />
                <Form.Select
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option>select business category</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
                <Form.Select
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option>select facility management company</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>

                <input
                  required
                  placeholder="Company Email Address"
                  type="text"
                  className="form-control"
                />
                <input
                  required
                  placeholder="Mobile Number"
                  type="number"
                  className="form-control"
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
                  id="form-s"
                >
                  <option>Select State</option>
                  <option value="1">Maharastra</option>
                  <option value="2">Rajashthan</option>
                  <option value="3">Kerala</option>
                </Form.Select>
                <input
                  // style={{ width: "10%" }}
                  required
                  placeholder="Pincode"
                  type="text"
                  className="form-control"
                  id="input-p"
                />
                <input
                  required
                  placeholder="GST Number"
                  type="text"
                  className="form-control"
                />
                <input
                  required
                  placeholder="Fax Number"
                  type="text"
                  className="form-control"
                  id="input-f"
                />
              </div>
              <div className="Buttons">
                <button value={items} onClick={handleSubmit} className="btn-2">
                  Save & Continue
                  <MdKeyboardArrowRight style={{ fontSize: "20px" }} />{" "}
                </button>
                <button className="reset">
                  {" "}
                  <GrPowerReset /> Reset
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateProfile;
