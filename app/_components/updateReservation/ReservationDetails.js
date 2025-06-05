"use client";

import { useEffect } from "react";
import { useUpdateResev } from "./UpdateReservContext";

export function ReservationDetails({ booking, cabin_maxCapacity }) {
  const { state, setState } = useUpdateResev();

  useEffect(() => {
    setState({
      numGuests: booking.numGuests,
      hasBreakfast: booking.hasBreakfast,
    });
  }, []);

  function handleUpdateGuest(e) {
    const value = e.target.value;
    setState({ ...state, numGuests: value });
  }
  function handleUpdateBreakfast(e) {
    const value = e.target.checked;
    setState({
      ...state,
      hasBreakfast: value,
    });
  }

  return (
    <div className='space-y-4'>
      <h3 className='text-xl font-semibold text-accent-400'>
        Reservation Details
      </h3>

      <div className='space-y-2'>
        <label className='block text-primary-200 text-sm'>
          How many guests?
        </label>
        <select
          name='numGuests'
          defaultValue={booking.numGuests}
          onChange={handleUpdateGuest}
          className='w-full px-4 py-3 bg-primary-800 text-primary-100 rounded border border-primary-700 focus:outline-none focus:border-accent-500'
        >
          {[...Array(cabin_maxCapacity)].map((_, i) => (
            <option key={i + 1} value={i + 1}>
              {i + 1} guest{i > 0 ? "s" : ""}
            </option>
          ))}
        </select>
      </div>

      <div className='space-y-2'>
        <label className='block text-primary-200 text-sm'>
          Anything we should know about your stay?
        </label>
        <textarea
          name='observations'
          defaultValue={booking.observations}
          rows='4'
          placeholder='Any pets, allergies, special requirements, etc?'
          className='w-full px-4 py-3 bg-primary-800 text-primary-100 rounded border border-primary-700 focus:outline-none focus:border-accent-500 resize-vertical placeholder-primary-400'
        />
      </div>

      <div className='flex items-center gap-3'>
        <input
          type='checkbox'
          name='hasBreakfast'
          onClick={handleUpdateBreakfast}
          defaultChecked={booking.hasBreakfast}
          className='w-4 h-4 text-accent-500 bg-primary-800 border-primary-600 rounded focus:ring-accent-500'
        />
        <label className='text-primary-200'>I want to add breakfast</label>
      </div>
    </div>
  );
}
