const CopyIcon = (props) => (
    <svg
        width={props.width || "15"}
        height={props.height || "15"}
        viewBox="0 0 24 24"
        fill="#616060"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M4 2h11v2H6v13H4V2zm4 4h12v16H8V6zm2 2v12h8V8h-8z"
            fill="#000000"
        />
    </svg>
);

export default CopyIcon;