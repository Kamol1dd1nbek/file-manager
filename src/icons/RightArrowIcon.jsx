const RightArrowIcon = (props) => (
  <svg
    fill="#FFFFFF"
    width={props.width || "15px"}
    height={props.height || "15px"}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    className="icon icon-rightArrow"
    opacity={props.opacity !== undefined ? props.opacity : 1}
    {...props}
  >
    <path
      d="M3,13H18.59l-5.3,5.29a1,1,0,0,0,1.42,1.42l7-7a1,1,0,0,0,0-1.42l-7-7a1,1,0,0,0-1.42,1.42L18.59,11H3a1,1,0,0,0,0,2Z"
      style={{ fill: "#FFFFFF" }}
    />
  </svg>
);

export default RightArrowIcon;
