const UpArrowIcon = (props) => (
  <svg
    fill="#FFFFFF"
    width={props.width || "15px"}
    height={props.height || "15px"}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    className="icon flat-color"
    opacity={props.opacity !== undefined ? props.opacity : 1}
  >
    <path
      d="M13,21V5.41l5.29,5.3a1,1,0,1,0,1.42-1.42l-7-7a1,1,0,0,0-1.42,0l-7,7a1,1,0,1,0,1.42,1.42L11,5.41V21a1,1,0,0,0,2,0Z"
      style={{ fill: "#FFFFFF" }}
    />
  </svg>
);

export default UpArrowIcon;
