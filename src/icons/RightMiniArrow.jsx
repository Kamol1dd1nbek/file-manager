const RightMiniArrow = (props) => {
  return (
    <svg width={props.width || "15px"} height={props.height || "15px"} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="48" fill="#fff" fillOpacity="0.01" />
      <path d="M19 12L31 24L19 36" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

export default RightMiniArrow;