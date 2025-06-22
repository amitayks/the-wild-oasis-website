"use client";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

const filters = [
  { label: "All cabins", value: "all" },
  { label: "1 - 2 guests", value: "small" },
  { label: "4 - 7 guests", value: "medium" },
  { label: "8 - 12 guests", value: "large" },
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
    <div className='flex border border-primary-800 overflow-x-auto scrollbar-hide'>
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
      className={`px-3 py-2 sm:px-5 hover:bg-primary-700 whitespace-nowrap text-sm sm:text-base ${
        activeFillter === fillter ? "bg-primary-700 " : ""
      }`}
      onClick={() => handleFillter(fillter)}
    >
      {children}
    </button>
  );
}

export default Fillter;
