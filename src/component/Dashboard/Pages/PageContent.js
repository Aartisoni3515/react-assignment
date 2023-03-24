import React from "react";
import "./PageContent.css";
// import { data } from "../../API/Index";
import "bootstrap/dist/css/bootstrap.min.css";
import DatatablePage from "./DatatablePage";
import { Link } from "react-router-dom";

const PageContent = () => {
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
          <div className="headings">
            <p style={{visibility:"hidden", display:"block"}}>mk </p>
          
            <div className="buttons">
            <Link style={{textDecoration:"none"}} to="/createprofile" > <button className="btn-1">coulmns</button></Link> 
              <button className="btn-3"> Export</button>
            </div>
          </div>

          {/* ................................................................................. */}
          <div className="data">
            <DatatablePage />
          </div>
        </div>
      </div>
    </>
  );
};

export default PageContent;
