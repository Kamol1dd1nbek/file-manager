// style
import "./Nav.css";

import LeftArrowIcon from "../icons/LeftArrowIcon";
import RefreshIcon from "../icons/RefreshIcon";
import RightArrowIcon from "../icons/RightArrowIcon";
import UpArrowIcon from "../icons/UpArrowIcon";
import InputComponent from "./InputComponent";

function Nav() {
  return (
    <div className="nav">
      <div className="nav__actions">
        <div className="box">
          <LeftArrowIcon />
        </div>
        <div className="box">
          <RightArrowIcon />
        </div>
        <div className="box">
          <UpArrowIcon />
        </div>
        <div className="box">
          <RefreshIcon />
        </div>
      </div>
      <div className="nav__search">
        <InputComponent />
        <InputComponent />
      </div>
    </div>
  );
}

export default Nav;
