import Image from "next/image";
import Link from "next/link";

export default function MangaList({ api }) {
  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4">
        {api?.map((manga: any) => (
          <Link
            href={`/manga/${manga.mal_id}`}
            key={manga.mal_id}
            className="bg-secondary dark:bg-dark-secondary shadow-slate-600 shadow-lg cursor-pointer"
          >
            <Image
              src={manga.images.webp.image_url}
              alt={manga.title}
              width={350}
              height={350}
              className="w-full max-h-64 md:max-h-80 object-cover"
            />

            <h3 className="text-third dark:text-dark-contrast text-center font-semibold p-2">
              {manga.title}
            </h3>
          </Link>
        ))}
      </div>
    </>
  );
}
