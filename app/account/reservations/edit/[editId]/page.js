import Header from "@/app/_components/updateReservation/Header";
import { UpdateReservProvider } from "@/app/_components/updateReservation/UpdateReservContext";
import UpdateReservForm from "@/app/_components/updateReservation/UpdateReservForm";
import { auth } from "@/app/_lib/auth";
import {
  getBooking,
  getCabin,
  getGuest,
  getSettings,
} from "@/app/_lib/data-service";

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
      <div className='min-h-screen bg-primary-950 text-primary-100 -mx-4 sm:-mx-6 lg:-mx-8 -my-6 sm:-my-8 lg:-my-12'>
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
