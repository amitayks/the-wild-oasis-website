const fullNameId = "fullName";
const emailId = "fullName";

export async function GuestInformation({ guest: { fullName, email } }) {
  return (
    <div className='space-y-4'>
      <h3 className='text-lg sm:text-xl font-semibold text-accent-400'>
        Guest Information
      </h3>

      <div className='space-y-2'>
        <label htmlFor={fullNameId} className='block text-primary-200 text-sm'>
          Full name
        </label>
        <input
          id={fullNameId}
          disabled
          defaultValue={fullName}
          className='w-full px-3 sm:px-4 py-2 sm:py-3 bg-primary-800 text-primary-300 rounded border border-primary-700 disabled:cursor-not-allowed text-sm sm:text-base'
        />
      </div>

      <div className='space-y-2'>
        <label htmlFor={emailId} className='block text-primary-200 text-sm'>
          Email address
        </label>
        <input
          id={emailId}
          disabled
          defaultValue={email}
          className='w-full px-3 sm:px-4 py-2 sm:py-3 bg-primary-800 text-primary-300 rounded border border-primary-700 disabled:cursor-not-allowed text-sm sm:text-base'
        />
      </div>
    </div>
  );
}
