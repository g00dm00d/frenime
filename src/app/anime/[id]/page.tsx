import { getAnimeresponse } from "../../../libs/api-libs";
import VideoPlayer from "../../../components/Utilities/VideoPlayer";
import Image from "next/image";

function HeroAnime({ anime }) {
  return (
    <div className="mt-32 sm:mt-24 flex flex-col items-center">
      <div className="w-full flex justify-center">
        <Image
          src={anime.images.webp.large_image_url}
          alt={anime.title}
          width={350}
          height={350}
          className="max-w-40 sm:max-w-56 object-cover rounded"
        />
      </div>
      <h1 className="text-3xl sm:text-5xl font-bold text-contrast dark:text-dark-third text-center px-2 pt-2">
        {anime.title}
      </h1>
      <h1 className="text-sm sm:text-lg font-bold text-third dark:text-dark-third text-center px-2 pb-2">
        {anime.genres?.map((genre: any) => genre.name).join(", ")}
      </h1>
    </div>
  );
}

function StatAnime({ anime }) {
  return (
    <div className="flex justify-center mx-2">
      <div className="flex overflow-x-auto gap-2 text-primary dark:text-dark-contrast trast text-center text-sm text-nowrap">
        {anime.studios && anime.studios.length > 0 && (
          <div className="bg-contrast dark:bg-dark-secondary grid place-content-center p-2 rounded-lg">
            <p className="text-sm font-bold">STUDIO</p>
            <p>{anime.studios?.map((theme: any) => theme.name).join(", ")}</p>
          </div>
        )}
        {anime.themes && anime.themes.length > 0 && (
          <div className="bg-contrast dark:bg-dark-secondary grid place-content-center p-2 rounded-lg">
            <p className="text-sm font-bold">THEME</p>
            <p>{anime.themes?.map((theme: any) => theme.name).join(", ")}</p>
          </div>
        )}
        {anime.episodes && anime.episodes > 1 && (
          <div className="bg-contrast dark:bg-dark-secondary grid place-content-center p-2 rounded-lg">
            <p className="text-sm font-bold">EPISODE</p>
            <p>{anime.episodes}</p>
          </div>
        )}
        {anime.year && (
          <div className="bg-contrast dark:bg-dark-secondary grid place-content-center p-2 rounded-lg">
            <p className="text-sm font-bold">YEAR</p>
            <p>{anime.year}</p>
          </div>
        )}
        {anime.status && (
          <div className="bg-contrast dark:bg-dark-secondary grid place-content-center p-2 rounded-lg">
            <p className="text-sm font-bold">STATUS</p>
            <p>{anime.status}</p>
          </div>
        )}
        {anime.aired && (
          <div className="bg-contrast dark:bg-dark-secondary grid place-content-center p-2 rounded-lg">
            <p className="text-sm font-bold">AIRED</p>
            <p>{anime.aired.string}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default async function Page({ params: { id } }) {
  const anime = await getAnimeresponse(`anime/${id}`);
  return (
    <>
      <VideoPlayer youtubeID={anime.trailer.youtube_id} />
      <HeroAnime anime={anime} />
      <StatAnime anime={anime} />
      <div className="max-w-5xl mx-auto m-2">
        <p className="text-justify px-2">{anime.synopsis}</p>
      </div>
    </>
  );
}
