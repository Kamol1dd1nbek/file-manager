const RefreshIcon = (props) => (
  <svg
    width={props.width || "15"}
    height={props.height || 15}
    viewBox="0 0 16 16"
    className="icon icon-refresh"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    {...props}
  >
    <path
      fill="#FFFFFF"
      d="M7.248 1.307A.75.75 0 118.252.193l2.5 2.25a.75.75 0 010 1.114l-2.5 2.25a.75.75 0 01-1.004-1.114l1.29-1.161a4.5 4.5 0 103.655 2.832.75.75 0 111.398-.546A6 6 0 118.018 2l-.77-.693z"
    />
  </svg>
);

export default RefreshIcon;
