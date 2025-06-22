import SideNavigation from "../_components/SideNavigation";

export default function layout({ children }) {
  return (
    <div className='flex flex-col lg:grid lg:grid-cols-[16rem_1fr] h-full gap-6 lg:gap-12'>
      <nav className='border-b lg:border-b-0 lg:border-r border-primary-900 pb-4 lg:pb-0'>
        <SideNavigation />
      </nav>

      <main className='py-1'>{children}</main>
    </div>
  );
}
