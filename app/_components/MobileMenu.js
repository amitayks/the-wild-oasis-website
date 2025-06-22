"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/solid";
// import Logo from "./Logo";

function MobileMenu({ session }) {
  const [isOpen, setIsOpen] = useState(false);

  // Close menu when route changes
  useEffect(() => {
    const handleRouteChange = () => setIsOpen(false);
    window.addEventListener("popstate", handleRouteChange);
    return () => window.removeEventListener("popstate", handleRouteChange);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className='lg:hidden p-2 hover:bg-primary-800 rounded-md transition-colors'
        aria-label='Open menu'
      >
        <Bars3Icon className='h-6 w-6 text-primary-100' />
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className='fixed inset-0 bg-black/50 z-40 lg:hidden'
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Slide-out Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-primary-950 border-l border-primary-800 z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className='flex flex-col h-full'>
          {/* Menu Header */}
          <div className='flex items-center justify-between p-6 border-b border-primary-800'>
            <span className='text-xl font-semibold text-primary-100'>Menu</span>
            <button
              onClick={() => setIsOpen(false)}
              className='p-2 hover:bg-primary-800 rounded-md transition-colors'
              aria-label='Close menu'
            >
              <XMarkIcon className='h-6 w-6 text-primary-100' />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className='flex-1 overflow-y-auto'>
            <ul className='flex flex-col p-6 space-y-2'>
              <li>
                <Link
                  href='/cabins'
                  onClick={() => setIsOpen(false)}
                  className='block py-3 px-4 text-lg hover:bg-primary-800 hover:text-accent-400 rounded-md transition-colors'
                >
                  Cabins
                </Link>
              </li>
              <li>
                <Link
                  href='/about'
                  onClick={() => setIsOpen(false)}
                  className='block py-3 px-4 text-lg hover:bg-primary-800 hover:text-accent-400 rounded-md transition-colors'
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href='/account'
                  onClick={() => setIsOpen(false)}
                  className='block py-3 px-4 text-lg hover:bg-primary-800 hover:text-accent-400 rounded-md transition-colors'
                >
                  <div className='flex items-center justify-between'>
                    <span>Guest area</span>
                    {session?.user?.image && (
                      <Image
                        src={session.user.image}
                        width={32}
                        height={32}
                        alt='User Avatar'
                        className='rounded-full'
                        referrerPolicy='no-referrer'
                      />
                    )}
                  </div>
                </Link>
              </li>
            </ul>
          </nav>

          {/* User Info (if logged in) */}
          {session?.user && (
            <div className='p-6 border-t border-primary-800'>
              <div className='flex items-center gap-3'>
                <Image
                  src={session.user.image}
                  width={40}
                  height={40}
                  alt='User Avatar'
                  className='rounded-full'
                  referrerPolicy='no-referrer'
                />
                <div className='flex-1 min-w-0'>
                  <p className='text-sm font-medium text-primary-100 truncate'>
                    {session.user.name}
                  </p>
                  <p className='text-xs text-primary-400 truncate'>
                    {session.user.email}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default MobileMenu;
