import react from "react";

export const CloseMenu = ({ width, height }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 28 28"
      fill="none"
    >
      <path
        d="M4 4L24 24M24 4L4 24"
        stroke="#1D1D1D"
        strokeWidth="8"
        strokeLinecap="round"
      />
    </svg>
  );
};
