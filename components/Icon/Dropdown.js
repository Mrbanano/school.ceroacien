export const DropDown = (props) => {
  return (
    <svg
      width={props.width}
      height={props.height}
      fill={props.color}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      onClick={props.drop}
      className={props.isOpen ? "rotate-180" : "rotate-0"}
    >
      <path
        d="M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41Z"
        fill="#323232"
      />
    </svg>
  );
};
