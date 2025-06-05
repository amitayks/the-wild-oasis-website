import Image from "next/image";

export default function Header({ cabin, editId }) {
  return (
    <div className='relative w-full h-64'>
      <Image
        src={cabin.image}
        alt={cabin.name}
        fill
        className='object-cover rounded-lg'
        priority
      />
      <div className='absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-6 flex flex-col md:flex-row md:items-end md:justify-between rounded-b-lg '>
        <h1 className='text-3xl font-bold text-accent-400 drop-shadow-md bg-primary-800 bg-opacity-85 px-6 pb-1 pt-2 rounded-lg '>
          Update Reservation {editId}
        </h1>
      </div>
    </div>
  );
}
