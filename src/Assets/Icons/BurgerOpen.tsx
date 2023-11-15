import react from "react";

export const BurgerOpen = ({ width, height }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={height}
      viewBox="0 -960 960 960"
      width={width}
    >
      <path d="M120-240v-60h520v60H120Zm678-52L609-481l188-188 43 43-145 145 146 146-43 43ZM120-452v-60h400v60H120Zm0-208v-60h520v60H120Z" />
    </svg>
  );
};
