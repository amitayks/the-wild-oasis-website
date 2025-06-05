import { BookingSummary } from "@/app/_components/updateReservation/BookingSummary";
import { CabinDetails } from "@/app/_components/updateReservation/CabinDetails";
import { GuestInformation } from "@/app/_components/updateReservation/GuestInformation";
import { ReservationDetails } from "@/app/_components/updateReservation/ReservationDetails";
import { auth } from "@/app/_lib/auth";
import { getGuest, getBooking, getCabin } from "@/app/_lib/data-service";
import Image from "next/image";

export default async function Page({ params }) {
  const { editId } = await params;
  const session = await auth();

  const guest = getGuest(session?.user?.id);
  const booking = await getBooking(editId);
  const cabin = await getCabin(booking.cabinId);

  return (
    <div className='min-h-screen bg-primary-950 text-primary-100'>
      {/* Header */}
      <div className='relative w-full h-64'>
        <Image
          src={cabin.image}
          alt={cabin.name}
          fill
          className='object-cover rounded-lg'
          priority
        />
        <div className='absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-6 flex flex-col md:flex-row md:items-end md:justify-between rounded-b-lg '>
          <h1 className='text-3xl font-bold text-accent-400 drop-shadow-md bg-primary-800 bg-opacity-85 px-6 pb-1 pt-2 rounded-lg '>
            Update Reservation {editId}
          </h1>
        </div>
      </div>

      <div className='max-w-6xl mx-auto px-6 py-8'>
        <form className='grid lg:grid-cols-2 gap-8'>
          {/* Left Column - Form */}
          <div className='space-y-6'>
            <GuestInformation fullName={guest.fullName} email={guest.email} />

            <ReservationDetails
              maxCapacity={cabin.maxCapacity}
              numGuests={cabin.numGuests}
              hasBreakfast={cabin.hasBreakfast}
              observations={cabin.observations}
              extraPrice={cabin.extraPrice}
            />
          </div>

          {/* Right Column - Cabin Details and Summary */}
          <div className='space-y-6'>
            <CabinDetails cabin={cabin} />

            <BookingSummary
              startDate={booking.startDate}
              endDate={booking.endDate}
              numNights={booking.numNights}
              numGuests={booking.numGuests}
              regularPrice={booking.regularPrice}
              discount={booking.discount}
              hasBreakfast={booking.hasBreakfast}
              extraPrice={booking.extraPrice}
              totalPrice={booking.totalPrice}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
