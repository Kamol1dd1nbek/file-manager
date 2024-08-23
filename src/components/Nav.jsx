// style
import "./Nav.css";

import LeftArrowIcon from "../icons/LeftArrowIcon";
import RefreshIcon from "../icons/RefreshIcon";
import RightArrowIcon from "../icons/RightArrowIcon";
import UpArrowIcon from "../icons/UpArrowIcon";
import InputComponent from "./InputComponent";
import SearchIcon from "../icons/SearchIcon";

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
        <InputComponent style={{ width: "70%" }} />
        <InputComponent
          endIcon={<SearchIcon />}
          placeholder={`Search ${"desctop"}`}
          style={{ width: "30%" }}
          onClick={() => {}}
        />
      </div>
    </div>
  );
}

export default Nav;
