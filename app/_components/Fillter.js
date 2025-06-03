"use client";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

const filters = [
  { label: "All cabins", value: "all" },
  { label: "1 - 2", value: "small" },
  { label: "4 - 7", value: "medium" },
  { label: "8 - 12", value: "large" },
];

function Fillter() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const activeFillter = searchParams.get("capacity") || "all";

  const handleFillter = (value) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("capacity", value);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <div className='flex border border-primary-800 '>
      {filters.map((f) => (
        <Button
          key={f.value}
          fillter={f.value}
          handleFillter={handleFillter}
          activeFillter={activeFillter}
        >
          {f.label}
        </Button>
      ))}
    </div>
  );
}

function Button({ fillter, handleFillter, activeFillter, children }) {
  return (
    <button
      className={`px-5 py-2 hover:bg-primary-700 ${
        activeFillter === fillter ? "bg-primary-700 " : ""
      }`}
      onClick={() => handleFillter(fillter)}
    >
      {children}
    </button>
  );
}

export default Fillter;
