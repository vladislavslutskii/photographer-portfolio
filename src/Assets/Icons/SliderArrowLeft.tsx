export const SliderArrowLeft = ({ width, height }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
    >
      <circle
        cx="20"
        cy="20"
        r="20"
        transform="rotate(180 20 20)"
        fill="#1D1D1D"
      />
      <path
        d="M22 26L15 20L22 14"
        stroke="#F2F2F2"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
