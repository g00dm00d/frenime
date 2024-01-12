import Link from "next/link";
import InputSearch from "./InputSearch";

export default function Navbar() {
  return (
    <div className="fixed top-0 right-0 left-0 z-10 bg-third dark:bg-dark-contrast px-6">
      <div className="flex flex-col sm:flex-row justify-between sm:items-center py-4">
        <Link
          href="/"
          className="text-primary text-3xl font-bold text-center md:text-left"
        >
          フレニメ
        </Link>
        <InputSearch />
      </div>
    </div>
  );
}
