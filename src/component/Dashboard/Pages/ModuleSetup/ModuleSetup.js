import React, { useState } from "react";
import Routes from "../Routes";
import "./ModuleSetup.css";
import { MdKeyboardArrowRight } from "react-icons/md";
import { GrPowerReset } from "react-icons/gr";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

const ModuleSetup = () => {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    mobileNumber: "",
    avalabilities: [
      {
        availabilityId: "",
        day: [
          { value: "sun", name: " Home/Dashbord" },
          { value: "mon", name: "Helpdesk" },
          { value: "tue", name: "Assets" },
          { value: "wed", name: "Daily Tasks" },
          { value: "thur", name: "PPM" },
          { value: "fri", name: "Employees" },
          { value: "sat", name: "Profile" },
        ],
        isChecked: false,
        checked: false,
        allChecked: false,
        error: null,
      },
    ],
  });

  const checkedHandler = (e, avIndex, index) => {
    console.log(e.target.checked, avIndex, index);
    setState((prev) => {
      let newState = { ...prev };
      newState.avalabilities[avIndex].day[index].checked = e.target.checked;
      return newState;
    });
  };

  // ..........................................................................................................

  const [checked, setChecked] = React.useState([true, false]);
  const handleChange1 = (event) => {
    setChecked([event.target.checked, event.target.checked]);
  };
  const handleChange2 = (event) => {
    setChecked([event.target.checked, checked[1]]);
  };
  const handleChange3 = (event) => {
    setChecked([checked[0], event.target.checked]);
  };
  const children = (
    <Box sx={{ display: "flex", flexDirection: "column", ml: 3 }}>
      <FormControlLabel
        label="Daily"
        control={<Checkbox checked={checked[0]} onChange={handleChange2} />}
      />
      <FormControlLabel
        label="Active wise"
        control={<Checkbox checked={checked[1]} onChange={handleChange3} />}
      />
    </Box>
  );
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
            <h3> Modules Setup</h3>
            <p style={{textAlign:"left"}} >Select the modules that the clients can use</p>
          </div>
          <div className="modules">
            <div className="module-inputs">
              {state.avalabilities.map((av, avIndex) => (
                <div key={av.availabilityId}>
                  {av.day.map((item, index) => (
                    <div key={index}>
                      <input
                        checked={item?.checked || false}
                        onChange={(e) => checkedHandler(e, avIndex, index)}
                        type="checkbox"
                      />
                      <span>{item.name}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>

            <div className="sub-modules">
              <div className="head-btn">
                <div className="heading">
                  <h6>Daily Tasks</h6>
                  <p>Select the modules that the client can use</p>
                </div>

                <div className="client-btn">
                  <button>View to client</button>
                </div>
              </div>

              <hr style={{ width: "95%" }} />

              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="defaultChecked2"
                />
                <label className="custom-control-label">
                  <strong> Show all sub modules</strong>
                </label>
              </div>
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="defaultChecked2"
                />
                <label className="custom-control-label">summary</label>
              </div>
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="defaultChecked2"
                />
                <label className="custom-control-label">view Tasks</label>
              </div>
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="defaultChecked2"
                />
                <label className="custom-control-label">Create new task</label>
              </div>
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="defaultChecked2"
                />
                <label className="custom-control-label">Logbook</label>
              </div>

              <div className="logSheet">
                <FormControlLabel className="log-inp"
                  label="Logsheet"
                  control={
                    <Checkbox
                      checked={checked[0] && checked[1]}
                      indeterminate={checked[0] !== checked[1]}
                      onChange={handleChange1}
                    />
                  }
                />
                {children}
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

export default ModuleSetup;
