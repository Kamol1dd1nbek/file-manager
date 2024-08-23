const PasteIcon = (props) => (
  <svg
    width={props.width || "15"}
    height={props.height || "15"}
    viewBox="0 0 32 32"
    enableBackground="new 0 0 32 32"
    xmlSpace="preserve"
    className="icon icon-paste"
    opacity={props.opacity !== undefined ? props.opacity : 1}
    {...props}
  >
    <path
      fill="none"
      stroke="#FFFFFF"
      strokeWidth="2"
      strokeMiterlimit="10"
      d="M17,6c0-1.1-0.9-2-2-2s-2,0.9-2,2h-3v4h10V6H17z"
    />
    <polyline
      fill="none"
      stroke="#FFFFFF"
      strokeWidth="2"
      strokeMiterlimit="10"
      points="10,6 6,6 6,27 14,27 "
    />
    <polyline
      fill="none"
      stroke="#FFFFFF"
      strokeWidth="2"
      strokeMiterlimit="10"
      points="24,15 24,6 20,6 "
    />
    <rect
      x="14"
      y="15"
      fill="none"
      stroke="#FFFFFF"
      strokeWidth="2"
      strokeMiterlimit="10"
      width="12"
      height="14"
    />
  </svg>
);

export default PasteIcon;
