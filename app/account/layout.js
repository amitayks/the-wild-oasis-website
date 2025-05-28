import SideNavigation from "../_components/SideNavigation";

export default function layout({ children }) {
  return (
    <div className='grid grid-cols-[16rem_1fr] h-full gap-12'>
      <nav className=''>
        <SideNavigation />
      </nav>

      <main className='py-1'>{children}</main>
    </div>
  );
}
