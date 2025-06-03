import { auth } from "../_lib/auth";

export const metadata = {
  title: "account",
};

async function page() {
  const session = await auth();
  const firstName = session?.user?.name?.split(" ")[0] || "Guest";

  return <h1>Manage Your Account - {firstName}</h1>;
}

export default page;
