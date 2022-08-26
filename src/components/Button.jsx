export const Button = ({ buttonText, className, setSteps }) => {
  return (
    <button
      className={className}
      onClick={(e) => {
        e.preventDefault();
        setSteps((prev) => prev + 1);
      }}
    >
      {buttonText}
    </button>
  );
};
