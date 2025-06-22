import Link from "next/link";

function NotFound() {
  return (
    <main className='text-center space-y-6 mt-4 px-4'>
      <h1 className='text-2xl sm:text-3xl font-semibold'>
        Cabin could not be found :(
      </h1>
      <Link
        href='/cabins'
        className='inline-block bg-accent-500 text-primary-800 px-4 py-2 sm:px-6 sm:py-3 text-base sm:text-lg'
      >
        Go To All Cabins
      </Link>
    </main>
  );
}

export default NotFound;
