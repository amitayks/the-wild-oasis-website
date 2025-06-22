import { PencilSquareIcon } from "@heroicons/react/24/solid";
import { format, formatDistance, isPast, isToday, parseISO } from "date-fns";
import DeleteReservation from "./DeleteReservation";
import Image from "next/image";
import Link from "next/link";
import { formatCurrency } from "@/utils/helpers";

export const formatDistanceFromNow = (dateStr) =>
  formatDistance(parseISO(dateStr), new Date(), {
    addSuffix: true,
  }).replace("about ", "");

function ReservationCard({ booking, handleDelete }) {
  const {
    id,
    guestId,
    startDate,
    endDate,
    numNights,
    totalPrice,
    numGuests,
    status,
    created_at,
    cabins: { name, image },
  } = booking;

  return (
    <div className='flex flex-col sm:flex-row border border-primary-800'>
      <div className='relative h-32 sm:h-32 sm:aspect-square'>
        <Image
          src={image}
          fill
          alt={`Cabin ${name}`}
          className='object-cover'
        />
      </div>

      <div className='flex-grow px-4 py-3 sm:px-6 flex flex-col'>
        <div className='flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2'>
          <h3 className='text-lg sm:text-xl font-semibold'>
            {numNights} nights in Cabin {name}
          </h3>
          {isPast(new Date(startDate)) ? (
            <span className='bg-yellow-800 text-yellow-200 h-7 px-3 uppercase text-xs font-bold flex items-center rounded-sm self-start'>
              past
            </span>
          ) : (
            <span className='bg-green-800 text-green-200 h-7 px-3 uppercase text-xs font-bold flex items-center rounded-sm self-start'>
              upcoming
            </span>
          )}
        </div>

        <p className='text-sm sm:text-lg text-primary-300 mb-2'>
          {format(new Date(startDate), "EEE, MMM dd yyyy")} (
          {isToday(new Date(startDate))
            ? "Today"
            : formatDistanceFromNow(startDate)}
          ) &mdash; {format(new Date(endDate), "EEE, MMM dd yyyy")}
        </p>

        <div className='flex flex-wrap gap-2 sm:gap-5 mt-auto items-baseline text-sm sm:text-base'>
          <p className='text-lg sm:text-xl font-semibold text-accent-400'>
            {formatCurrency(totalPrice)}
          </p>
          <p className='text-primary-300'>&bull;</p>
          <p className='text-primary-300'>
            {numGuests} guest{numGuests > 1 && "s"}
          </p>
          <p className='ml-auto text-xs sm:text-sm text-primary-400 hidden sm:block'>
            Booked {format(new Date(created_at), "EEE, MMM dd yyyy, p")}
          </p>
        </div>
      </div>

      {!isPast(startDate) && (
        <div className='flex flex-row sm:flex-col border-t sm:border-t-0 sm:border-l border-primary-800'>
          <Link
            href={`/account/reservations/edit/${id}`}
            className='group flex items-center justify-center gap-2 uppercase text-xs font-bold text-primary-300 border-r sm:border-r-0 sm:border-b border-primary-800 flex-1 px-3 py-3 hover:bg-accent-600 transition-colors hover:text-primary-900'
          >
            <PencilSquareIcon className='h-5 w-5 text-primary-600 group-hover:text-primary-800 transition-colors' />
            <span className='mt-1'>Edit</span>
          </Link>
          <div className='flex-1'>
            <DeleteReservation bookingId={id} handleDelete={handleDelete} />
          </div>
        </div>
      )}
    </div>
  );
}

export default ReservationCard;
