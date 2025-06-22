import { getCabin, getCabins } from "@/app/_lib/data-service";
import { Suspense } from "react";

import Cabin from "@/app/_components/Cabin";
import Resevation from "@/app/_components/Resevation";
import Spinner from "@/app/_components/Spinner";

export const generateMetadata = async ({ params }) => {
  const { cabinId } = await params;
  const { name, maxCapacity } = await getCabin(cabinId);

  return {
    title: `Cabin ${name}`,
    description: `Discover the tranquility of Cabin ${name}, nestled in the heart of the Dolomites. Perfect for up to ${maxCapacity} guests, with 100% privacy guaranteed.`,
  };
};

export const generateStaticParams = async () => {
  const cabins = await getCabins();
  const ids = cabins.map((cabin) => ({
    cabinId: cabin.id.toString(),
  }));

  return ids;
};

export default async function Page({ params }) {
  const { cabinId } = await params;
  const cabin = await getCabin(cabinId);

  return (
    <div className='max-w-6xl mx-auto mt-4 sm:mt-8'>
      <Cabin cabin={cabin} />
      <div>
        <h2 className='text-3xl sm:text-4xl lg:text-5xl font-semibold text-center text-accent-400 mb-6 sm:mb-10 px-4'>
          Reserve {cabin.name} today. Pay on arrival.
        </h2>

        <Suspense fallback={<Spinner />}>
          <Resevation cabin={cabin} />
        </Suspense>
      </div>
    </div>
  );
}
