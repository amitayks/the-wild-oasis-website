"use client";
import { TrashIcon } from "@heroicons/react/24/solid";
import { useTransition } from "react";
import SpinnerMini from "./SpinnerMini";

function DeleteReservation({ bookingId, handleDelete }) {
  const [isPending, startTransition] = useTransition();

  // const handleDelete = () => {
  //   startTransition(async () => {
  //     handleDelete(bookingId);
  //   });
  // };

  return (
    <button
      onClick={() => {
        // console.log("click");
        handleDelete(bookingId);
      }}
      disabled={isPending}
      className='group flex items-center gap-2 uppercase text-xs font-bold text-primary-300 flex-grow px-3 hover:bg-accent-600 transition-colors hover:text-primary-900'
    >
      {isPending ? (
        <div className='flex items-center justify-center w-full h-full'>
          <SpinnerMini />
        </div>
      ) : (
        <>
          <TrashIcon className='h-5 w-5 text-primary-600 group-hover:text-primary-800 transition-colors' />
          <span className='mt-1'>Delete</span>
        </>
      )}
    </button>
  );
}

export default DeleteReservation;
