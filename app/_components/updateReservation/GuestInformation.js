import { auth } from "@/app/_lib/auth";

export async function GuestInformation({ guest: { fullName, email } }) {
  return (
    <div className='space-y-4'>
      <h3 className='text-xl font-semibold text-accent-400'>
        Guest Information
      </h3>

      <div className='space-y-2'>
        <label className='block text-primary-200 text-sm'>Full name</label>
        <input
          disabled
          defaultValue={fullName}
          className='w-full px-4 py-3 bg-primary-800 text-primary-300 rounded border border-primary-700 disabled:cursor-not-allowed'
        />
      </div>

      <div className='space-y-2'>
        <label className='block text-primary-200 text-sm'>Email address</label>
        <input
          disabled
          defaultValue={email}
          className='w-full px-4 py-3 bg-primary-800 text-primary-300 rounded border border-primary-700 disabled:cursor-not-allowed'
        />
      </div>
    </div>
  );
}
