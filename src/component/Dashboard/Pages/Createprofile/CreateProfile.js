import React, { useEffect, useState } from "react";
import Routes from "../Routes";
import Form from "react-bootstrap/Form";
import { MdKeyboardArrowRight } from "react-icons/md";
import { GrPowerReset } from "react-icons/gr";
import { useNavigate } from "react-router-dom";

const CreateProfile = () => {
  let navigate = useNavigate();

  const [user, setUser] = useState({
    ComName: "",
    website: "",
    email: "",
    number: "",
    pincode: "",
    gstNum: "",
    faxNum: "",
    BussCat: "",
    facMan: "",
    State: "",
    City: "",
  });

  const [data, setData] = useState([]);
  console.log(user);

  const handleInputs = (e) => {
    const { value, name } = e.target;

    setUser(() => {
      return {
        ...user,
        [name]: value,
      };
    });
  };

  const addData = (e) => {
    // console.log("signup");
    e.preventDefault();
    console.log("data added succesfully");
    window.confirm("Confirm User Details");
    navigate("/paymentsetup");
    localStorage.setItem("userData", JSON.stringify([...data, user]));
  };

  const resetData = (e) => {
    console.log("reset");
    const { value, name } = e.target;

    setUser(() => {
      return {
        ...user,
        [""]: "",
      };
    });
  };

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
            <form>
              <div className="form-group">
                <input
                  required
                  placeholder="Company Name"
                  type="text"
                  className="form-control"
                  value={user.ComName}
                  onChange={handleInputs}
                  name="ComName"
                />

                <input
                  required
                  placeholder="website"
                  type="text"
                  className="form-control"
                  value={user.website}
                  onChange={handleInputs}
                  name="website"
                />
                <Form.Select
                  className="form-select"
                  aria-label="Default select example"
                  value={user.BussCat}
                  onChange={handleInputs}
                  name="BussCat"
                >
                  <option>select business category</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
                <Form.Select
                  className="form-select"
                  aria-label="Default select example"
                  value={user.facMan}
                  onChange={handleInputs}
                  name="facMan"
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
                  value={user.email}
                  onChange={handleInputs}
                  name="email"
                />
                <input
                  required
                  placeholder="Mobile Number"
                  type="number"
                  className="form-control"
                  value={user.number}
                  onChange={handleInputs}
                  name="number"
                />
                <Form.Select
                  className="form-select"
                  aria-label="Default select example"
                  value={user.State}
                  onChange={handleInputs}
                  name="State"
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
                  value={user.City}
                  onChange={handleInputs}
                  name="City"
                >
                  <option>Select City</option>
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
                  value={user.pincode}
                  onChange={handleInputs}
                  id="input-p"
                  name="pincode"
                />
                <input
                  required
                  placeholder="GST Number"
                  type="text"
                  className="form-control"
                  value={user.gstNum}
                  onChange={handleInputs}
                  name="gstNum"
                />
                <input
                  required
                  placeholder="Fax Number"
                  type="text"
                  className="form-control"
                  value={user.faxNum}
                  onChange={handleInputs}
                  id="input-f"
                  name="faxNum"
                />
              </div>
              <div className="Buttons">
                <button onClick={addData} className="btn-2">
                  Save & Continue
                  <MdKeyboardArrowRight style={{ fontSize: "20px" }} />{" "}
                </button>
                <button onClick={resetData} className="reset">
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
