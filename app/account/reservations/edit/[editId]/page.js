import { BookingSummary } from "@/app/_components/updateReservation/BookingSummary";
import { CabinDetails } from "@/app/_components/updateReservation/CabinDetails";
import { GuestInformation } from "@/app/_components/updateReservation/GuestInformation";
import { ReservationDetails } from "@/app/_components/updateReservation/ReservationDetails";

import Header from "@/app/_components/updateReservation/Header";
import { updateBooking } from "@/app/_lib/action";
import { auth } from "@/app/_lib/auth";
import {
  getBooking,
  getCabin,
  getGuest,
  getSettings,
} from "@/app/_lib/data-service";
import UpdateReservForm from "@/app/_components/updateReservation/UpdateReservForm";
import { UpdateReservProvider } from "@/app/_components/updateReservation/UpdateReservContext";

export const generateMetadata = async ({ params }) => {
  const { editId } = await params;
  return {
    title: `Edit Reservation ${editId}`,
    description: `Edit the details of your reservation with ID ${editId}.`,
  };
};

export default async function Page({ params }) {
  const { editId } = await params;

  const [session, booking, settings] = await Promise.all([
    auth(),
    getBooking(editId),
    getSettings(),
  ]);

  const [guest, cabin] = await Promise.all([
    getGuest(session?.user?.email),
    getCabin(booking.cabinId),
  ]);

  return (
    <UpdateReservProvider>
      <div className='min-h-screen bg-primary-950 text-primary-100'>
        <Header cabin={cabin} editId={editId} />

        <UpdateReservForm
          bookingId={editId}
          cabin={cabin}
          booking={booking}
          guest={guest}
          settings={settings}
        />
      </div>
    </UpdateReservProvider>
  );
}

// const {
//   startDate,
//   endDate,
//   numNights,
//   numGuests,
//   extraPrice,
//   totalPrice,
//   hasBreakfast,
//   observations,
//   cabinId,
// } = booking;
// const { id, name, maxCapacity, regularPrice, discount, description, image } =
//   cabin;
