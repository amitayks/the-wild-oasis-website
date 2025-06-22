"use client";

import {
  differenceInDays,
  isPast,
  isSameDay,
  isWithinInterval,
} from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { useResevation } from "./ResevationContext";
import { useEffect, useState } from "react";

function isAlreadyBooked(range, datesArr) {
  return (
    range?.from &&
    range?.to &&
    datesArr.some((date) =>
      isWithinInterval(date, { start: range.from, end: range.to })
    )
  );
}

function DateSelector({ cabin, settings, bookedDates }) {
  const { range, setRange, resetRange } = useResevation();
  const [numberOfMonths, setNumberOfMonths] = useState(2);

  useEffect(() => {
    const handleResize = () => {
      setNumberOfMonths(window.innerWidth < 768 ? 1 : 2);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const displayRange = isAlreadyBooked(range, bookedDates) ? {} : range;

  const { regularPrice, discount } = cabin || {};
  const { minBookingLength, maxBookingLength } = settings || {};

  const numNights = differenceInDays(displayRange.to, displayRange.from);
  const cabinPrice = numNights * (regularPrice - discount);

  return (
    <div className='flex flex-col justify-between'>
      <DayPicker
        className='pt-6 sm:pt-12 place-self-center px-4 sm:px-0'
        mode='range'
        captionLayout='dropdown'
        numberOfMonths={numberOfMonths}
        onSelect={setRange}
        selected={displayRange}
        defaultMonth={new Date()}
        strartMonth={new Date()}
        endMonth={new Date(2026, 8)}
        min={minBookingLength + 1}
        max={maxBookingLength}
        disabled={(curDate) =>
          isPast(curDate) ||
          bookedDates.some((date) => isSameDay(date, curDate))
        }
      />

      <div className='flex flex-col sm:flex-row items-center justify-between px-4 sm:px-8 bg-accent-500 text-primary-800 py-4 sm:h-[72px] gap-4 sm:gap-0'>
        <div className='flex flex-wrap items-baseline gap-2 sm:gap-6 justify-center sm:justify-start'>
          <p className='flex gap-2 items-baseline'>
            {discount > 0 ? (
              <>
                <span className='text-xl sm:text-2xl'>
                  ${regularPrice - discount}
                </span>
                <span className='line-through font-semibold text-primary-700'>
                  ${regularPrice}
                </span>
              </>
            ) : (
              <span className='text-xl sm:text-2xl'>${regularPrice}</span>
            )}
            <span className=''>/night</span>
          </p>
          {numNights ? (
            <>
              <p className='bg-accent-600 px-2 sm:px-3 py-1 sm:py-2 text-xl sm:text-2xl'>
                <span>&times;</span> <span>{numNights}</span>
              </p>
              <p>
                <span className='text-base sm:text-lg font-bold uppercase'>
                  Total
                </span>{" "}
                <span className='text-xl sm:text-2xl font-semibold'>
                  ${cabinPrice}
                </span>
              </p>
            </>
          ) : null}
        </div>

        {displayRange?.from || displayRange?.to ? (
          <button
            className='border border-primary-800 py-2 px-4 text-sm font-semibold'
            onClick={resetRange}
          >
            Clear
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default DateSelector;
