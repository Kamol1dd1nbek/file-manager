// style
import "./InputComponent.css";

import { useState } from "react";
import CloseIcon from "../icons/CloseIcon";

function InputComponent({ type, headerIcon, endIcon, placeholder, style }) {

  const [data, setData] = useState(null);
  const [showClearBtn, setshowClearBtn] = useState(false);

  const handleChange = (e) => {
    let value = e.target.value;

    if (value) setshowClearBtn(true);
    else setshowClearBtn(false);
  }

  return <div className="input__wrapper" style={{ ...style }}>
    {headerIcon && headerIcon}
    <input type={type || "text"} placeholder={placeholder || ""} onChange={handleChange} />
    <div className="input__icons">
      {showClearBtn && <div className="box">
        <CloseIcon />
      </div>}
      {endIcon && endIcon}
    </div>
  </div>;
}

export default InputComponent;
