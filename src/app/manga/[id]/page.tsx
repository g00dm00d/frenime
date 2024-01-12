import { getAnimeresponse } from "../../../libs/api-libs";
import Image from "next/image";

function HeroManga({ manga }) {
  return (
    <div className="mt-32 sm:mt-24 flex flex-col items-center">
      <div className="w-full flex justify-center text-center">
        <Image
          src={manga.images.webp.image_url}
          alt={manga.title}
          width={350}
          height={350}
          className="max-w-40 sm:max-w-56 object-cover rounded"
        />
      </div>
      <h1 className="text-4xl sm:text-5xl font-bold text-contrast dark:text-dark-third text-center px-2 pt-2">
        {manga.title}
      </h1>
      <h1 className="text-sm sm:text-lg font-bold text-third dark:text-dark-third text-center px-2 pb-2">
        {manga.genres?.map((genre: any) => genre.name).join(", ")}
      </h1>
    </div>
  );
}

function StatManga({ manga }) {
  return (
    <div className="flex justify-center mx-4">
      <div className="flex overflow-x-auto gap-2 text-primary dark:text-dark-contrast text-center text-xs font-semibold text-nowrap">
        {manga.authors && manga.authors.length !== 0 && (
          <div className="bg-contrast dark:bg-dark-secondary grid place-content-center p-2 rounded-lg">
            <p className="text-sm font-bold">AUTHOR</p>
            <p>{manga.authors?.map((author: any) => author.name).join(", ")}</p>
          </div>
        )}
        {manga.themes && manga.themes.length !== 0 && (
          <div className="bg-contrast dark:bg-dark-secondary grid place-content-center p-2 rounded-lg">
            <p className="text-sm font-bold">THEME</p>
            <p>{manga.themes?.map((theme: any) => theme.name).join(", ")}</p>
          </div>
        )}
        {manga.volumes && (
          <div className="bg-contrast dark:bg-dark-secondary grid place-content-center p-2 rounded-lg">
            <p className="text-sm font-bold">VOLUME</p>
            <p>{manga.volumes}</p>
          </div>
        )}
        {manga.chapters && (
          <div className="bg-contrast dark:bg-dark-secondary grid place-content-center p-2 rounded-lg">
            <p className="text-sm font-bold">CHAPTER</p>
            <p>{manga.chapters}</p>
          </div>
        )}
        {manga.status && (
          <div className="bg-contrast dark:bg-dark-secondary grid place-content-center p-2 rounded-lg">
            <p className="text-sm font-bold">STATUS</p>
            <p>{manga.status}</p>
          </div>
        )}
        {manga.published && (
          <div className="bg-contrast dark:bg-dark-secondary grid place-content-center p-2 rounded-lg">
            <p className="text-sm font-bold">PUBLISHED</p>
            <p>{manga.published.string}</p>
          </div>
        )}
        {manga.Serialization && (
          <div className="bg-contrast dark:bg-dark-secondary grid place-content-center p-2 rounded-lg">
            <p className="text-sm font-bold">SERIALIZATION</p>
            <p>{manga.Serialization}</p>
          </div>
        )}
        {manga.autor && (
          <div className="bg-contrast dark:bg-dark-secondary grid place-content-center p-2 rounded-lg">
            <p className="text-sm font-bold">SEASON</p>
            <p>{manga.season}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default async function Page({ params: { id } }) {
  const manga = await getAnimeresponse(`manga/${id}`);
  return (
    <>
      <HeroManga manga={manga} />
      <StatManga manga={manga} />
      <div className="max-w-5xl mx-auto m-2">
        <p className="text-justify px-4">{manga.synopsis}</p>
      </div>
    </>
  );
}
