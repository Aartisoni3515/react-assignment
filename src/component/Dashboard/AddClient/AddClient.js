import React, { useState } from "react";
import "./AddClient.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const AddClient = () => {
  const [product] = useState([
    {
      CompanyName: "ISS Facility Services",
      CNo: "4 Clients",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/9/9e/Integrated_Service_Solutions_%28logo%29.svg",
      AddData: "Add FCM",
      ViewAll: "View All",
    },

    {
      CompanyName: "Infosys",
      CNo: "--",
      image:
        "https://professionallyspeaking.net/wp-content/uploads/2017/04/infosys-logo.jpg",
      AddData: "Add Client",
      ViewAll: "View All",
    },

    {
      CompanyName: "Sites",
      CNo: "--",
      image:
        "https://www.pngitem.com/pimgs/m/684-6849204_home-icon-blue-png-clipart-png-download-transparent.png",
      AddData: "Go to Config",
      ViewAll: "View All",
    },

    {
      CompanyName: "Tenant Groups",
      CNo: "--",
      image:
        "https://www.pngkey.com/png/full/823-8236029_senior-care-icon-home-page-icon-grey.png",
      AddData: "Add Tenant Group",
      ViewAll: "View All",
    },

    {
      CompanyName: "Tenant",
      CNo: "--",
      image:
        "https://www.pngkey.com/png/full/823-8236029_senior-care-icon-home-page-icon-grey.png",
      AddData: "Add Tenant",
      ViewAll: "View All",
    },
  ]);

  return (
    <>
      <div className="DashBoard">
        <div className="head">
          <h2>View clients</h2>
          <p>
            client master / <span>View clients</span>
          </p>
        </div>

        <div className="add-heading">
          <div className="para">
            <p>you have successfully added infosys</p>
          </div>
          <div className="head-buttons">
            <button className="btn-3">Go to client master</button>
            <button className="btn-2">Add more clients</button>
          </div>
        </div>

        <div className="add-cards">
          {product.map((productItem,index) => {
            return (
              <Card key={index} style={{ width: "14rem" }}>
                <Card.Img
                  className="card-img"
                  variant="top"
                  src={productItem.image}
                />
                <Card.Body>
                  <Card.Title>{productItem.CompanyName}</Card.Title>
                  <Card.Text>{productItem.CNo}</Card.Text>
                  <div className="card-btn">
                    <Button className="add-btn" variant="primary">
                      {productItem.AddData}
                    </Button>
                    <Button className="view-btn" variant="primary">
                      {productItem.ViewAll}
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default AddClient;
