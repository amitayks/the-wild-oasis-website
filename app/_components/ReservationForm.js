"use client";
import { differenceInDays } from "date-fns";
import Image from "next/image";
import { useResevation } from "./ResevationContext";
import { createBooking } from "../_lib/action";
import SubmitButton from "./SubmitButton";

function ReservationForm({ cabin, user }) {
  const { range, resetRange } = useResevation();
  const { maxCapacity, regularPrice, discount, id } = cabin || {};

  const startDate = range.from;
  const endDate = range.to;
  const numNights = differenceInDays(range.to, range.from);
  const cabinPrice = numNights * (regularPrice - discount);

  const bookingData = { startDate, endDate, cabinPrice, cabinId: id };

  const createBookingWithBind = createBooking.bind(null, bookingData);

  return (
    <div className='scale-100 lg:scale-[1.01]'>
      <div className='bg-primary-800 text-primary-300 px-6 sm:px-10 lg:px-16 py-2 flex justify-between items-center'>
        <p className='text-sm sm:text-base'>Logged in as</p>
        <p className='hidden sm:block'>-</p>
        <div className='flex gap-2 sm:gap-4 items-center'>
          <p className='text-sm sm:text-base truncate max-w-[150px] sm:max-w-none'>
            {user.name}
          </p>
          <Image
            referrerPolicy='no-referrer'
            className='h-6 w-6 sm:h-8 sm:w-8 rounded-full'
            width={30}
            height={30}
            src={user.image}
            alt={user.name}
          />
        </div>
      </div>

      <form
        action={(formData) => {
          createBookingWithBind(formData);
          resetRange();
        }}
        className='bg-primary-900 py-6 px-6 sm:py-8 sm:px-10 lg:py-10 lg:px-16 text-base sm:text-lg flex gap-5 flex-col'
      >
        <div className='space-y-2'>
          <label htmlFor='numGuests'>How many guests?</label>
          <select
            name='numGuests'
            id='numGuests'
            className='px-4 sm:px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm'
            required
          >
            <option value='' key=''>
              Select number of guests...
            </option>
            {Array.from({ length: maxCapacity }, (_, i) => i + 1).map((x) => (
              <option value={x} key={x}>
                {x} {x === 1 ? "guest" : "guests"}
              </option>
            ))}
          </select>
        </div>

        <div className='space-y-2'>
          <label htmlFor='observations'>
            Anything we should know about your stay?
          </label>
          <textarea
            name='observations'
            id='observations'
            className='px-4 sm:px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm'
            placeholder='Any pets, allergies, special requirements, etc.?'
            rows='3'
          />
        </div>

        <div className='flex flex-col sm:flex-row justify-end items-center gap-4 sm:gap-6'>
          <p className='text-primary-300 text-sm sm:text-base'>
            Start by selecting dates
          </p>

          <SubmitButton
            disabled={!range.from || !range.to ? true : false}
            submitLable='Placing your order'
          >
            Reserve now
          </SubmitButton>
        </div>
      </form>
    </div>
  );
}

export default ReservationForm;
