import Spinner from "../_components/Spinner";

export default function Loading() {
  return (
    <div className='grid items-center justify-center h-full'>
      <Spinner />
      <p className='text-xl text-primary-200 mt-4'>Loading Your Info... </p>
    </div>
  );
}
