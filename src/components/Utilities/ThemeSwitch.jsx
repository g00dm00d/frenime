// app/components/ThemeSwitch.tsx
"use client";

import { Sun, Moon } from "@phosphor-icons/react/dist/ssr";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import React from "react";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted)
    return (
      <Image
        src="data:image/svg+xml;base64,PHN2ZyBzdHJva2U9IiNGRkZGRkYiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjIwMHB4IiB3aWR0aD0iMjAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB4PSIyIiB5PSIyIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIHJ4PSIyIj48L3JlY3Q+PC9zdmc+Cg=="
        width={36}
        height={36}
        sizes="36x36"
        alt="Loading Light/Dark Toggle"
        priority={false}
        title="Loading Light/Dark Toggle"
      />
    );

  if (resolvedTheme === "dark") {
    return (
      <Sun
        width={40}
        height={40}
        onClick={() => setTheme("light")}
        className="fixed z-10 bottom-2 left-2 sm:bottom-1 sm:left-1 cursor-pointer p-2 dark:bg-dark-contrast dark:text-dark-third rounded-full"
      />
    );
  }

  if (resolvedTheme === "light") {
    return (
      <Moon
        width={40}
        height={40}
        onClick={() => setTheme("dark")}
        className="fixed z-10 bottom-2 left-2 sm:bottom-1 sm:left-1 cursor-pointer p-2 bg-third text-primary rounded-full"
      />
    );
  }
}
