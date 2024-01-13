import Image from "next/image";
import Link from "next/link";
import Header from "../../components/Utilities/Header";

export default function AnimeScrollX({ api, type }) {
  return (
    <>
      <div className="flex overflow-x-auto gap-1 sm:gap-4 no-scrollbar">
        {api.map((anime: any) => (
          <Link
            href={`/${type}/${anime.mal_id}`}
            key={anime.mal_id}
            className="cursor-pointer min-w-20 min-h-32 hover:opacity-80"
          >
            <Image
              src={anime.images.webp.large_image_url}
              alt={anime.title}
              width={350}
              height={350}
              className="w-full h-full object-cover"
            />
          </Link>
        ))}
      </div>
    </>
  );
}
