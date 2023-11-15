import react from "react";

export const Burger = ({ width, height }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 44 36"
      fill="none"
    >
      <rect y="28" width="44" height="8" rx="4" fill="#F2F2F2" />
      <rect y="14" width="44" height="8" rx="4" fill="#F2F2F2" />
      <rect width="44" height="8" rx="4" fill="#F2F2F2" />
    </svg>
  );
};
