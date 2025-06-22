import { useFormStatus } from "react-dom";

function SubmitButton({ children, submitLable, disabled }) {
  const { pending } = useFormStatus();
  return (
    <button
      disabled={pending || disabled}
      className='bg-accent-500 px-6 py-3 sm:px-8 sm:py-4 text-primary-800 font-semibold hover:bg-accent-600 transition-all disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300 text-sm sm:text-base'
    >
      {pending ? submitLable : children}
    </button>
  );
}

export default SubmitButton;
