const AddIcon = (props) => (
  <svg 
    width={props.width || "15"}
    height={props.height || "15"}
    viewBox="0 0 256 256"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    strokeWidth="16"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeMiterlimit="4"
    strokeDasharray="none"
    strokeOpacity="1"
    {...props}
  >
    <circle
      cx="128"
      cy="128"
      r="112.00011"
    />
    <path d="M 79.999992,128 H 176.0001" />
    <path d="m 128.00004,79.99995 v 96.0001" />
  </svg>
);

export default AddIcon;