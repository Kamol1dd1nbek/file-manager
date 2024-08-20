// style
import "./InputComponent.css";

function InputComponent({type, headerIcon, endIcon}) {
  return <div className="input__wrapper">
    {headerIcon && headerIcon}
    df
    <input type={type || "text"} />
    {endIcon && endIcon}
  </div>;
}

export default InputComponent;
