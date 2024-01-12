import Link from "next/link";

export default function Header({ title, linkHref, linkTitle }) {
  return (
    <div className="flex items-center justify-between p-4">
      <h1 className="text-xl font-semibold text-contrast">{title}</h1>
      {linkHref && linkTitle && (
        <Link
          href={linkHref}
          className="text-md font-semibold text-third underline"
        >
          {linkTitle}
        </Link>
      )}
    </div>
  );
}
