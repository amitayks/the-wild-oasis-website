import React from "react";

// Using a simple SVG spinner since react-icons/bi isn't available
const SpinnerMini = ({ className = "", ...props }) => {
  return (
    <svg
      className={`w-6 h-6 animate-spin ${className}`}
      style={{ animation: "spin 1.5s linear infinite" }}
      fill='none'
      viewBox='0 0 24 24'
      {...props}
    >
      <circle
        className='opacity-25'
        cx='12'
        cy='12'
        r='10'
        stroke='currentColor'
        strokeWidth='4'
      />
      <path
        className='opacity-75'
        fill='currentColor'
        d='M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0 1 4 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
      />
    </svg>
  );
};

export default SpinnerMini;
