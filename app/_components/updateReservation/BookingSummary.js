"use client";
import { useUpdateResev } from "./UpdateReservContext";

export function BookingSummary({
  startDate,
  endDate,
  numNights,
  cabin,
  breakfastPrice,
}) {
  const { state } = useUpdateResev();

  const cabinPrice = (cabin.regularPrice - cabin.discount) * numNights;
  const totalBraekfastPrice = breakfastPrice * state.numGuests;

  const totalPrice = cabinPrice + totalBraekfastPrice;

  return (
    <div className='bg-primary-900 p-6 rounded-lg space-y-4'>
      <h3 className='text-xl font-semibold text-accent-400'>Booking Summary</h3>

      <div className='space-y-3 text-primary-200'>
        <div className='flex justify-between'>
          <span>Check-in:</span>
          <span className='font-medium text-primary-100'>
            {new Date(startDate).toLocaleDateString()}
          </span>
        </div>
        <div className='flex justify-between'>
          <span>Check-out:</span>
          <span className='font-medium text-primary-100'>
            {new Date(endDate).toLocaleDateString()}
          </span>
        </div>
        <div className='flex justify-between'>
          <span>Nights:</span>
          <span className='font-medium text-primary-100'>{numNights}</span>
        </div>
        <div className='flex justify-between'>
          <span>Guests:</span>
          <span className='font-medium text-primary-100'>
            {state.numGuests}
          </span>
        </div>
        <hr className='border-primary-700' />
        <div className='flex justify-between'>
          <span>Cabin rate:</span>
          <span>${cabinPrice}</span>
        </div>
        {state.hasBreakfast && (
          <div className='flex justify-between'>
            <span>Breakfast:</span>
            <span>+${breakfastPrice * state.numGuests}</span>
          </div>
        )}
        <hr className='border-primary-700' />
        <div className='flex justify-between text-lg font-bold text-primary-100'>
          <span>Total:</span>
          <span>${state.hasBreakfast ? totalPrice : cabinPrice}</span>
        </div>
      </div>

      <div className='pt-4 space-y-3'>
        <button
          type='submit'
          className='w-full bg-accent-500 hover:bg-accent-600 text-primary-900 font-semibold py-3 px-6 rounded transition-colors'
        >
          Update reservation
        </button>
      </div>
    </div>
  );
}
