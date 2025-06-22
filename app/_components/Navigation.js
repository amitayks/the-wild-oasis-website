import Link from "next/link";
import { auth } from "@/app/_lib/auth";
import Image from "next/image";
import MobileMenu from "./MobileMenu";

export default async function Navigation() {
  const session = await auth();

  return (
    <>
      {/* Desktop Navigation - Hidden on mobile */}
      <nav className='z-10 text-xl hidden lg:block'>
        <ul className='flex gap-16 items-center'>
          <li>
            <Link
              href='/cabins'
              className='hover:text-accent-400 transition-colors'
            >
              Cabins
            </Link>
          </li>
          <li>
            <Link
              href='/about'
              className='hover:text-accent-400 transition-colors'
            >
              About
            </Link>
          </li>
          <li>
            {session?.user?.image ? (
              <Link
                href='/account'
                className='hover:text-accent-400 transition-colors'
              >
                <div className='flex items-center gap-10 '>
                  <span>Guest area</span>
                  <Image
                    src={session.user.image}
                    width={40}
                    height={40}
                    alt='User Avatar'
                    className='rounded-full'
                    referrerPolicy='no-referrer'
                  />
                </div>
              </Link>
            ) : (
              <Link
                href='/account'
                className='hover:text-accent-400 transition-colors'
              >
                Guest area
              </Link>
            )}
          </li>
        </ul>
      </nav>

      {/* Mobile Navigation */}
      <MobileMenu session={session} />
    </>
  );
}
