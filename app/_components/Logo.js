import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.png";

function Logo() {
  return (
    <Link href='/' className='flex items-center gap-2 sm:gap-4 z-10'>
      <Image
        src={logo}
        height='60'
        quality={100}
        width='60'
        alt='The Wild Oasis logo'
        className='h-12 w-12 sm:h-[60px] sm:w-[60px]'
      />
      <span className='text-lg sm:text-xl font-semibold text-primary-100'>
        The Wild Oasis
      </span>
    </Link>
  );
}

export default Logo;
