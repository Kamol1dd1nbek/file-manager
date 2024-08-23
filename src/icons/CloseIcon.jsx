const CloseIcon = (props) => (
    <svg
        width={props.width || "15px"}
        height={props.height || "15px"}
        viewBox="0 0 18 18"
        className="icon icon-close"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <g id="out" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <path
                d="M14.25,4.8075 L13.1925,3.75 L9,7.9425 L4.8075,3.75 L3.75,4.8075 L7.9425,9 L3.75,13.1925 L4.8075,14.25 L9,10.0575 L13.1925,14.25 L14.25,13.1925 L10.0575,9 L14.25,4.8075 Z"
                id="path"
                fill="#fff"
            />
        </g>
    </svg>
);

export default CloseIcon;