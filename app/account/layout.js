import SideNavigation from "../_components/SideNavigation";

export default function AccountLayout({ children }) {
  return (
    <div className='grid grid-cols-[16rem_1fr] h-full gap-12'>
      <nav className='bg-gray-800 text-white p-4'>
        <SideNavigation />
      </nav>

      <main className='flex-1'>{children}</main>
    </div>
  );
}
