"use client";
import { useOptimistic, useTransition } from "react";
import ReservationCard from "./ReservationCard";
import { deleteBooking } from "../_lib/action";

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
        console.log(bookingId, " start ");
        deleteOptimisticBooking(bookingId);
        await deleteBooking(bookingId);
      } catch (error) {}
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
