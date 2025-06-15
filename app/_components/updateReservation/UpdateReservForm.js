import { updateBooking } from "@/app/_lib/action";
import { BookingSummary } from "./BookingSummary";
import { CabinDetails } from "./CabinDetails";
import { GuestInformation } from "./GuestInformation";
import { ReservationDetails } from "./ReservationDetails";

export default async function UpdateReservForm({
  cabin,
  guest,
  booking,
  settings,
  bookingId,
}) {
  const breakfastPrice = await settings.breakfastPrice;

  return (
    <div className='max-w-6xl mx-auto px-6 py-8'>
      <form action={updateBooking} className='grid lg:grid-cols-2 gap-8'>
        <input type='hidden' name='bookingId' defaultValue={bookingId} />
        {/* Left Column - Form */}
        <div className='space-y-6'>
          <GuestInformation guest={guest} />

          <ReservationDetails
            booking={booking}
            cabin_maxCapacity={cabin.maxCapacity}
          />
        </div>

        <div className='space-y-6'>
          <CabinDetails cabin={cabin} />

          <BookingSummary
            breakfastPrice={breakfastPrice}
            cabin={cabin}
            startDate={booking.startDate}
            endDate={booking.endDate}
            numNights={booking.numNights}
          />
        </div>
      </form>
    </div>
  );
}
