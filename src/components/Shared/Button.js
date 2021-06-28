import Loader from 'react-loader-spinner';

const Button = ({ label, submit, formId, disabled, loading, onClick }) => {
  return (
    <button
      form={formId ? formId : null}
      type={submit ? 'submit' : 'button'}
      className={`tracking-[1px] focus:outline-none uppercase font-medium rounded border border-primary px-5 py-2 space-x-2 bg-primary text-white hover:bg-opacity-80 transition ${
        disabled ? 'bg-opacity-50 cursor-not-allowed' : ''
      }`}
      {...{ onClick, disabled }}
    >
      {loading ? (
        <Loader type='ThreeDots' color='#fff' height={20} width={30} />
      ) : (
        label
      )}
    </button>
  );
};

export default Button;
