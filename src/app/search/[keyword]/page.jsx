import { getAnimeresponse } from "../../../libs/api-libs";
import AnimeList from "../../../components/AnimeList";

export default async function Page({ params }) {
  const { keyword } = params;
  const decodedKeyword = decodeURI(keyword);
  const searchAnime = await getAnimeresponse("anime", `q=${decodedKeyword}`);
  const searchManga = await getAnimeresponse("manga", `q=${decodedKeyword}`);

  return (
    <>
      <section className="mt-28 sm:mt-20">
        <h1 className="text-xl font-bold text-contrast dark:text-white py-2">{`Search Results for Anime "${decodedKeyword}"`}</h1>
        <AnimeList api={searchAnime} type="anime" />
      </section>
      <section className="mt-5 sm:mt-10">
        <h1 className="text-xl font-bold text-contrast dark:text-white py-2">{`Search Results for Manga "${decodedKeyword}"`}</h1>
        <AnimeList api={searchManga} type="manga" />
      </section>
    </>
  );
}
