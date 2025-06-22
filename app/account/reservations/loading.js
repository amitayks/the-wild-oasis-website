import Spinner from "@/app/_components/Spinner";

export default function Loading() {
  return (
    <div className='flex flex-col items-center justify-center min-h-[50vh]'>
      <Spinner />
      <p className='text-lg sm:text-xl text-primary-200 mt-4'>
        Loading Your Info...
      </p>
    </div>
  );
}
