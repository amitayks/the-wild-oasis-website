import Link from "next/link";

function LoginMessage() {
  return (
    <div className='flex items-center justify-center bg-primary-800 p-8 sm:p-12'>
      <p className='text-center text-base sm:text-xl'>
        Please{" "}
        <Link href='/login' className='underline text-accent-500'>
          login
        </Link>{" "}
        to reserve this
        <br /> cabin right now
      </p>
    </div>
  );
}

export default LoginMessage;
