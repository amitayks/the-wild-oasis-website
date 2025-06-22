import { Suspense } from "react";
import CabinList from "../_components/CabinList";
import Fillter from "../_components/Fillter";
import ReservationReminder from "../_components/ReservationReminder";
import Spinner from "../_components/Spinner";

// export const revalidate = 15;

export const metadata = {
	title: "cabins",
};

export default async function Page({ searchParams }) {
	const { capacity } = await searchParams;

	return (
		<div>
			<h1 className="text-3xl sm:text-4xl mb-5 text-accent-400 font-medium">
				Our Luxury Cabins
			</h1>
			<p className="text-primary-200 text-base sm:text-lg mb-6 sm:mb-10">
				Cozy yet luxurious cabins, located right in the heart of the Italian
				Dolomites. Imagine waking up to beautiful mountain views, spending your
				days exploring the dark forests around, or just relaxing in your private
				hot tub under the stars. Enjoy nature&apos;s beauty in your own little
				home away from home. The perfect spot for a peaceful, calm vacation.
				Welcome to paradise.
			</p>

			<div className="mb-6 sm:mb-8 flex justify-end">
				<Fillter />
			</div>

			<Suspense fallback={<Spinner />} key={capacity}>
				<CabinList fillter={capacity} />
				<ReservationReminder />
			</Suspense>
		</div>
	);
}
