import Image from "next/image";
import Link from "next/link";

export default function AnimeList({ api }) {
  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4">
        {api?.map((anime: any) => (
          <Link
            href={`/anime/${anime.mal_id}`}
            key={anime.mal_id}
            className="bg-secondary dark:bg-dark-secondary shadow-slate-600 shadow-lg cursor-pointer"
          >
            <Image
              src={anime.images.webp.image_url}
              alt={anime.title}
              width={350}
              height={350}
              className="w-full max-h-64 md:max-h-80 object-cover"
            />

            <h3 className="text-third dark:text-dark-contrast text-center font-semibold p-2">
              {anime.title}
            </h3>
          </Link>
        ))}
      </div>
    </>
  );
}
