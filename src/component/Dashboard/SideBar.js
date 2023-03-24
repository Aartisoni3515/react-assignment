import React from "react";
import "../SignUp.css";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <>
      <div className="sidebar">
        <div className="sidebar-content">
          <h3>Company name</h3>
          <input type="search" placeholder="search modules" name="" id="" />
          <p>CLIENT MASTER</p>

          <Link style={{textDecoration:"none"}} to="/pagecontent" > 
          <button>View Clients</button>

          </Link>
          <Link style={{textDecoration:"none"}} to="/addclient">
            <button 
              style={{ background: "#1334b3", color: "#fff", width: "100%" }}
            >
              Add Clinets
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default SideBar;
