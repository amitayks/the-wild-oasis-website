"use client";

import { updateGuest } from "@/app/_lib/action";
import SpinnerMini from "./SpinnerMini";
import { useActionState } from "react";

function UpdateProfileForm({ children, guest }) {
  const [state, formAction, isPending] = useActionState(updateGuest, guest);
  const { fullName, nationalID, countryFlag, email } = guest || {};

  return (
    <form
      action={formAction}
      className='bg-primary-900 py-6 px-6 sm:py-8 sm:px-12 text-base sm:text-lg flex gap-6 flex-col'
    >
      <div className='space-y-2'>
        <label>Full name</label>
        <input
          disabled
          name='fullName'
          defaultValue={fullName}
          className='px-4 sm:px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400'
        />
      </div>

      <div className='space-y-2'>
        <label>Email address</label>
        <input
          disabled
          name='email'
          defaultValue={email}
          className='px-4 sm:px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400'
        />
      </div>

      <div className='space-y-2'>
        <div className='flex items-center justify-between'>
          <label htmlFor='nationality'>Where are you from?</label>
          <img
            src={countryFlag}
            alt='Country flag'
            className='h-5 rounded-sm'
          />
        </div>

        {children}
      </div>

      <div className='space-y-2'>
        <label htmlFor='nationalID'>National ID number</label>
        <input
          name='nationalID'
          defaultValue={nationalID}
          className='px-4 sm:px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm'
        />
      </div>

      <div className='flex justify-end items-center gap-6'>
        <button
          disabled={isPending}
          className='bg-accent-500 px-6 py-3 sm:px-8 sm:py-4 text-primary-800 font-semibold hover:bg-accent-600 transition-all disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300'
        >
          {isPending ? (
            <SpinnerMini className='mx-6 sm:mx-10' />
          ) : (
            "Update profile"
          )}
        </button>
      </div>
    </form>
  );
}

export default UpdateProfileForm;
