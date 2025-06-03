import { connection } from "next/server";
import CabinCard from "./CabinCard";
import { getCabins } from "../_lib/data-service";

async function CabinList({ fillter }) {
  await connection();
  const cabins = await getCabins();
  if (cabins.length === 0) return null;

  let filteredCabins = cabins;
  if (fillter === "all" || !fillter) {
    filteredCabins = cabins;
  } else if (fillter === "small") {
    filteredCabins = cabins.filter((cabin) => cabin.maxCapacity <= 2);
  } else if (fillter === "medium") {
    filteredCabins = cabins.filter(
      (cabin) => cabin.maxCapacity >= 3 && cabin.maxCapacity <= 7
    );
  } else if (fillter === "large") {
    filteredCabins = cabins.filter((cabin) => cabin.maxCapacity >= 8);
  }

  if (filteredCabins.length === 0) {
    return <p className='text-gray-500'>No cabins found for this filter.</p>;
  }

  return (
    <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14'>
      {filteredCabins.map((cabin) => (
        <CabinCard cabin={cabin} key={cabin.id} />
      ))}
    </div>
  );
}

export default CabinList;
