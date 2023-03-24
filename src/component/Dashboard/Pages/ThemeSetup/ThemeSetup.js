import React from "react";
import Routes from "../Routes";
import { MDBRadio } from "mdb-react-ui-kit";
import { MdKeyboardArrowRight } from "react-icons/md";
import { GrPowerReset } from "react-icons/gr";

import "./ThemeSetup.css";

const ThemeSetup = () => {
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
            <h3> Theme Setup</h3>
            <p style={{textAlign:"left"}} >
              Add information about the clients to give them a personalized
              experience
            </p>
          </div>

          <div className="theme-setup">
            <div className="select-themes">
              <p>Primary Color</p>
              <input type="text" className="clr-inp" placeholder="#57klf4" name="" id="" />
            </div>
            <p style={{marginTop:"5px"}}>Add Hex Values</p>
            <div className="login-theme">
              <h6>Login Theme</h6>
              <p>Select the look and feel the login page</p>
              <MDBRadio
                name="inlineRadio"
                id="inlineRadio1"
                value="option1"
                label="Use Color"
                inline
              />
              <br />

              <input
                placeholder="#45hjd"
                className="use-color"
                type="text"
                name=""
                id=""
              />
              <h6 style={{ marginTop: "10px" }}>
                Where should be the login modal?
              </h6>
              <div className="align">
                <div className="box">
                  <div className="box_1">
                    <div className="child_1"></div>
                  </div>
                  <div className="box_1">
                    <div className="child_2"></div>
                  </div>
                  <div className="box_1">
                    <div className="child_3"></div>
                  </div>
                </div>
                <div className="find-btn">
                  <MDBRadio
                    name="inlineRadio"
                    id="inlineRadio1"
                    value="option1"
                    label="Left"
                    inline
                  />

                  <MDBRadio
                    name="inlineRadio"
                    id="inlineRadio1"
                    value="option1"
                    label="Right"
                    inline
                  />
                  <MDBRadio className="center"
                    name="inlineRadio"
                    id="inlineRadio1"
                    value="option1"
                    label="Center"
                    inline
                  />
                </div>
              </div>
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

export default ThemeSetup;
