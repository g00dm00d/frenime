import { NoteBlank } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen grid place-items-center">
      <div className="flex flex-wrap gap-4 text-2xl font-bold text-red-600 text-center">
        <div className=" mx-auto">
          <NoteBlank size={40} className="w-full" />
          404 | NOT FOUND
        </div>
        <Link
          href="/"
          className="w-full text-sm text-blue-700 hover:text-blue-600 underline"
        >
          Kembali
        </Link>
      </div>
    </div>
  );
}
