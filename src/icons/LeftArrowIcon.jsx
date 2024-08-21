const LeftArrowIcon = (props) => (
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
      d="M21,11H5.41l5.3-5.29A1,1,0,1,0,9.29,4.29l-7,7a1,1,0,0,0,0,1.42l7,7a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L5.41,13H21a1,1,0,0,0,0-2Z"
      style={{ fill: "#FFFFFF" }}
    />
  </svg>
);

export default LeftArrowIcon;
