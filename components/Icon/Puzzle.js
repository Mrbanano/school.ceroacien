import React from "react";

export const Puzzle = (props) => {
  return (
    <div className=" h-[55px] w-[55px] self-center flex justify-center items-center">
      <svg
        width={"100%"}
        height={"100%"}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M8.902 32.008a6.428 6.428 0 1 1 8.044 9.938L25 50l8.054-8.054a6.428 6.428 0 0 1-1.047-9.938 6.428 6.428 0 0 1 9.939 1.046L50 25l-8.054-8.054a6.428 6.428 0 1 0-8.892-8.892L25 0l-8.054 8.054a6.428 6.428 0 1 0-8.892 8.892L0 25l8.054 8.054c.24-.37.523-.721.848-1.046Z"
          fill="#403BF9"
        />
      </svg>
    </div>
  );
};
