import React from "react";
import SideBar from "./Dashboard/SideBar";
import PageContent from "../component/Dashboard/Pages/PageContent";

const Home = () => {
  return (
    <div>
      <div className="SideBarAndPageContent">
        <PageContent></PageContent>
        <SideBar></SideBar>
      </div>
    </div>
  );
};

export default Home;
