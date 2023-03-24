import { NavLink } from "react-router-dom";
import "./Createprofile/CreateProfile.css";

function Routes() {
  return (
    <>
      <div className="mynav">
        <ul>
          <NavLink to="/createprofile">
            <li className="hover-underline-animation active">
              01 Create profile
            </li>
          </NavLink>
          <NavLink to="/paymentsetup">
            <li className="hover-underline-animation">02 payment setup</li>
          </NavLink>
          <NavLink to="/themesetup">
            <li className="hover-underline-animation">03 Theme setup</li>
          </NavLink>
          <NavLink to="/modulesetup">
            <li className="hover-underline-animation">04 module setup</li>
          </NavLink>
        </ul>
      </div>
      <hr />
    </>
  );
}
export default Routes;
