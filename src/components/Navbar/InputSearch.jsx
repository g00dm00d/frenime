"use client";

import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr";
import { useRouter } from "next/navigation";
import { useRef } from "react";

export default function InputSearch() {
  const searchRef = useRef();
  const router = useRouter();

  function handleSearch(event) {
    event.preventDefault();
    const keyword = searchRef.current.value;
    if (!keyword || keyword.length <= 2 || keyword.trim() == "") return;
    router.push(`/search/${keyword}`);
    searchRef.current.value = null;
  }

  return (
    <form onSubmit={handleSearch} className="relative">
      <input
        className="w-full sm:w-72 rounded-lg p-2 mt-2 sm:mt-0 bg-primary dark:bg-dark-primary"
        placeholder="Search Anime and Manga..."
        type="text"
        ref={searchRef}
      />
      <button className="absolute top-4 sm:top-2 end-2">
        <MagnifyingGlass size={23} />
      </button>
    </form>
  );
}
