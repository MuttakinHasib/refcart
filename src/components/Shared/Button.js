const Button = ({ label, block, onClick }) => {
  return (
    <button
      className={`focus:outline-none uppercase font-medium rounded border border-primary w-full py-2 flex items-center justify-center space-x-2 bg-primary text-white hover:text-primary hover:bg-transparent transition`}
      {...{ onClick }}
    >
      {label}
    </button>
  );
};

export default Button;
