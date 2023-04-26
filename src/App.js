import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateProfile from "./component/Dashboard/Pages/Createprofile/CreateProfile";
import PaymentSetup from "./component/Dashboard/Pages/Paymentsetup/PaymentSetup";
import ThemeSetup from "./component/Dashboard/Pages/ThemeSetup/ThemeSetup";
import ModuleSetup from "./component/Dashboard/Pages/ModuleSetup/ModuleSetup";
import SideBar from "./component/Dashboard/SideBar";
import AddClient from "./component/Dashboard/AddClient/AddClient";
import SignUp from "./component/SignUp";
import PageContent from "./component/Dashboard/Pages/PageContent";
// import Home from "./component/Home";

function App() {
  return (
    <>
     
      <BrowserRouter>
      {/* <Home/> */}
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/pagecontent" element={<PageContent />} />
          <Route path="/addclient" element={<AddClient />} />
          <Route path="/Createprofile" element={<CreateProfile />} />
          <Route path="/paymentsetup" element={<PaymentSetup />} />
          <Route path="/themesetup" element={<ThemeSetup />} />
          <Route path="/modulesetup" element={<ModuleSetup />} />
        </Routes>
      <SideBar/>

      </BrowserRouter>
    </>
  );
}

export default App;
