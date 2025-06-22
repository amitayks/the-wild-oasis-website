import { auth } from "../_lib/auth";

export const metadata = {
  title: "account",
};

async function page() {
  const session = await auth();
  const firstName = session?.user?.name?.split(" ")[0] || "Guest";

  return (
    <h1 className='text-xl sm:text-2xl font-semibold'>
      Welcome back, {firstName}!
    </h1>
  );
}

export default page;
