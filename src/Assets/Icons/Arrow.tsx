import react from "react";

export const Arrow = ({ width, height }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 25 22"
      fill="none"
    >
      <path
        d="M12 19L3 11M3 11L12 3M3 11L22 11"
        stroke="#1D1D1D"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
