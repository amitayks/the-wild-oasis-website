import { EyeSlashIcon, MapPinIcon, UsersIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import TextExpander from "./TextExpander";

function Cabin({ cabin }) {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-[3fr_4fr] gap-8 sm:gap-12 lg:gap-20 border border-primary-800 py-6 px-6 sm:py-8 sm:px-10 mb-12 sm:mb-24'>
      <div className='relative h-64 sm:h-96 lg:h-auto lg:scale-[1.15] lg:-translate-x-3'>
        <Image
          src={cabin.image}
          fill
          className='object-cover'
          alt={`Cabin ${cabin.name}`}
        />
      </div>

      <div>
        <h3 className='text-accent-100 font-black text-4xl sm:text-5xl lg:text-7xl mb-5 lg:translate-x-[-254px] bg-primary-950 p-4 sm:p-6 pb-1 lg:w-[150%]'>
          Cabin {cabin.name}
        </h3>

        <div className='mb-6'>
          <TextExpander description={cabin.description} />
        </div>

        <ul className='flex flex-col gap-4 mb-7'>
          <li className='flex gap-3 items-center'>
            <UsersIcon className='h-5 w-5 text-primary-600' />
            <span className='text-base sm:text-lg'>
              For up to <span className='font-bold'>{cabin.maxCapacity}</span>{" "}
              guests
            </span>
          </li>
          <li className='flex gap-3 items-center'>
            <MapPinIcon className='h-5 w-5 text-primary-600' />
            <span className='text-base sm:text-lg'>
              Located in the heart of the{" "}
              <span className='font-bold'>Dolomites</span> (Italy)
            </span>
          </li>
          <li className='flex gap-3 items-center'>
            <EyeSlashIcon className='h-5 w-5 text-primary-600' />
            <span className='text-base sm:text-lg'>
              Privacy <span className='font-bold'>100%</span> guaranteed
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Cabin;
