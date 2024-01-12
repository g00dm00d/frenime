import Link from "next/link";

export default function Header({ title, linkHref }) {
  return (
    <div className="flex items-center justify-between py-3">
      <h1 className="text-xl font-bold text-contrast dark:text-dark-contrast">
        {title}
      </h1>
      {linkHref && (
        <Link
          href={linkHref}
          className="text-md font-semibold text-third dark:text-dark-contrast underline"
        >
          View More
        </Link>
      )}
    </div>
  );
}
