"use client";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { format } from "date-fns";
import { useResevation } from "./ResevationContext";

function ReservationReminder() {
  const { range, resetRange } = useResevation();

  if (!range.from || !range.to) return null;

  return (
    <div className='fixed bottom-4 sm:bottom-6 left-4 right-4 sm:left-1/2 sm:right-auto sm:-translate-x-1/2 sm:w-auto py-4 px-6 sm:py-5 sm:px-8 rounded-full bg-accent-500 text-primary-800 text-sm sm:text-base font-semibold shadow-xl shadow-slate-900 flex gap-4 sm:gap-8 items-center'>
      <p>
        <span>👋</span> Don&apos;t forget to reserve your dates{" "}
        <br className='hidden sm:inline' />
        <span className='block sm:inline'>
          from {format(new Date(range.from), "MMM dd")} to{" "}
          {format(new Date(range.to), "MMM dd")}
        </span>
      </p>
      <button
        onClick={resetRange}
        className='rounded-full p-1 hover:bg-accent-600 transition-all flex-shrink-0'
      >
        <XMarkIcon className='h-5 w-5' />
      </button>
    </div>
  );
}

export default ReservationReminder;
