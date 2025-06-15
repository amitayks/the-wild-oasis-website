"use client";
import { useOptimistic, useTransition } from "react";
import ReservationCard from "./ReservationCard";
import { deleteBooking } from "../_lib/action";
import Error from "next/error";

function ReservationList({ bookings }) {
  const [isPending, startTransition] = useTransition();
  const [optimisticBookings, deleteOptimisticBooking] = useOptimistic(
    bookings,
    (curBooking, bookinId) =>
      curBooking.filter((booking) => booking.id !== bookinId)
  );

  async function handleDelete(bookingId) {
    startTransition(async () => {
      try {
        deleteOptimisticBooking(bookingId);
        await deleteBooking(bookingId);
      } catch (error) {
        throw new Error(error.massage);
      }
    });
  }

  return (
    <ul className='space-y-6'>
      {optimisticBookings.map((booking) => (
        <ReservationCard
          booking={booking}
          key={booking.id}
          handleDelete={handleDelete}
        />
      ))}
    </ul>
  );
}

export default ReservationList;
