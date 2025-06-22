const Spinner = () => {
  const spinnerStyle = {
    background: `
      radial-gradient(farthest-side, #3C546C 94%, transparent) top/10px 10px no-repeat,
      conic-gradient(transparent 30%, #3C546C)
    `,
    WebkitMask:
      "radial-gradient(farthest-side, transparent calc(100% - 10px), black 0)",
    mask: "radial-gradient(farthest-side, transparent calc(100% - 10px), black 0)",
    animation: "spin 1.5s linear infinite",
  };

  return (
    <div
      className='mx-auto my-12 sm:my-20 w-12 h-12 sm:w-16 sm:h-16 rounded-full'
      style={spinnerStyle}
    ></div>
  );
};

export default Spinner;
