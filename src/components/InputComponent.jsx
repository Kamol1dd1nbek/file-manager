// style
import "./InputComponent.css";

import { useRef, useState } from "react";
import CloseIcon from "../icons/CloseIcon";

function InputComponent({ type, headerIcon, endIcon, placeholder, style }) {
  const [data, setData] = useState("");
  const [showClearBtn, setshowClearBtn] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const inputRef = useRef();

  const handleChange = (e) => {
    let value = e.target.value;
    setData(value);
    if (value) return setshowClearBtn(true);
    setshowClearBtn(false);
  };

  const handleClick = () => {
    setIsActive(true);
    setData("");
    setshowClearBtn(false);
  };

  return (
    <label
      className={`input__wrapper ${isActive ? "input__wrapper--active" : ""}`}
      style={{ ...style }}
    >
      {headerIcon && headerIcon}
      <input
        ref={inputRef}
        type={type || "text"}
        placeholder={placeholder || ""}
        onChange={handleChange}
        onFocus={() => setIsActive(true)}
        onBlur={() => setIsActive(false)}
        value={data}
      />
      <div className="input__icons">
        {showClearBtn && (
          <div className="box" onClick={handleClick}>
            <CloseIcon />
          </div>
        )}
        {endIcon && endIcon}
      </div>
    </label>
  );
}

export default InputComponent;
