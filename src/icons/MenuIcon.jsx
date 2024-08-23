const MenuIcon = (props) => (
  <svg
    fill={props.fill || "#000000"}
    width={props.width || "16px"}
    height={props.height || "16px"}
    viewBox="0 0 16 16"
    className="icon icon-menu"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <path
      d="M2 3h12a1 1 0 0 1 0 2H2a1 1 0 1 1 0-2zm0 4h12a1 1 0 0 1 0 2H2a1 1 0 1 1 0-2zm0 4h12a1 1 0 0 1 0 2H2a1 1 0 0 1 0-2z"
      fill="#fff"
    />
  </svg>
);

export default MenuIcon;
