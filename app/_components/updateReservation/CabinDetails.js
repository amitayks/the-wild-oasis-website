export function CabinDetails({ cabin }) {
  return (
    <div className='bg-primary-900 rounded-lg overflow-hidden p-4 sm:p-6 space-y-4'>
      <div className='flex flex-wrap items-center justify-between gap-2 sm:gap-4 text-primary-200 text-xs sm:text-sm'>
        <div className='flex items-center gap-1'>
          <span>Up to {cabin.maxCapacity} guests</span>
        </div>
        <div className='flex items-center gap-1'>
          <span>Cabin {cabin.id}</span>
        </div>
      </div>
    </div>
  );
}
