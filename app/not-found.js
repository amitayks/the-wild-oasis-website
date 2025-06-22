import Link from "next/link";

function NotFound() {
  return (
    <main className='text-center space-y-6 mt-4 px-4'>
      <h1 className='text-2xl sm:text-3xl font-semibold'>
        This page could not be found :(
      </h1>
      <Link
        href='/'
        className='inline-block bg-accent-500 text-primary-800 px-4 py-2 sm:px-6 sm:py-3 text-base sm:text-lg'
      >
        Go back home
      </Link>
    </main>
  );
}

export default NotFound;
