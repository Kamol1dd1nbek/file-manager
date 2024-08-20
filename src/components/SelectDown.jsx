// style
import "./SelectDown.css";

import { useState } from "react";
import DownMiniArrowIcon from "../icons/DownMiniArrowIcon";

const SelectDown = ({
  options,
  title,
  selectedValue,
  onChange,
  headerIcon,
  showIcon = true,
}) => {
  const [isShow, setIsShow] = useState(false);

  const openSelect = () => {
    setIsShow((prev) => !prev);
  };

  return (
    <div onClick={openSelect} className="dropdown__wrapper">
      <div className="dropdown">
        {headerIcon && headerIcon}
        {title && <span style={{ marginLeft: "6px" }}>{title}</span>}
        {isShow && (
          <>
            <div className="dropdown__items__container">
              <div className="dropdown__item">dddd</div>
              <div className="dropdown__item">dddd</div>
              <div className="dropdown__item">dddd</div>
              <div className="dropdown__item">dddd</div>
            </div>
          </>
        )}
        {showIcon && (
          <DownMiniArrowIcon
            className="dropdown__arrow"
            with={10}
            height={10}
          />
        )}
      </div>
    </div>
  );
};

export default SelectDown;
