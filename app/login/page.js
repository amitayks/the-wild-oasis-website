import SignInButton from "../_components/SignInButton";

export const metadata = {
  title: "Login",
  description: "Sign in to access your guest area",
};

export default function Page() {
  return (
    <div className='flex flex-col gap-8 sm:gap-10 mt-6 sm:mt-10 items-center px-4'>
      <h2 className='text-2xl sm:text-3xl font-semibold text-center'>
        Sign in to access your guest area
      </h2>
      <SignInButton />
    </div>
  );
}
