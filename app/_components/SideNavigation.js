"use client";
import {
  CalendarDaysIcon,
  HomeIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import SignOutButton from "./SignOutButton";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    name: "Home",
    href: "/account",
    icon: <HomeIcon className='h-5 w-5 text-primary-600' />,
  },
  {
    name: "Reservations",
    href: "/account/reservations",
    icon: <CalendarDaysIcon className='h-5 w-5 text-primary-600' />,
  },
  {
    name: "Guest profile",
    href: "/account/profile",
    icon: <UserIcon className='h-5 w-5 text-primary-600' />,
  },
];

function SideNavigation() {
  const pathName = usePathname();

  return (
    <nav className='h-full'>
      <ul className='flex lg:flex-col gap-2 h-full text-base lg:text-lg overflow-x-auto lg:overflow-x-visible px-4 lg:px-0'>
        {navLinks.map((link) => (
          <li key={link.name} className='flex-shrink-0'>
            <Link
              className={`py-3 px-3 sm:px-5 hover:bg-primary-900 hover:text-primary-100 transition-colors flex items-center gap-2 sm:gap-4 font-semibold text-primary-200 whitespace-nowrap rounded-md lg:rounded-none ${
                pathName === link.href ? "bg-primary-900 text-primary-100" : ""
              }`}
              href={link.href}
            >
              {link.icon}
              <span>{link.name}</span>
            </Link>
          </li>
        ))}

        <li className='mt-auto ml-auto lg:ml-0'>
          <SignOutButton />
        </li>
      </ul>
    </nav>
  );
}
export default SideNavigation;
