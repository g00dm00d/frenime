import Header from "../components/AnimeList/Header";
import AnimeList from "../components/AnimeList";
import { getNestedAnimeResponse, getAnimeresponse } from "../libs/api-libs";
import AnimeScrollX from "../components/AnimeScrollX";

export default async function Page() {
  const topManga = await getAnimeresponse("top/manga", "limit=6");
  const recomAnime = await getNestedAnimeResponse("recommendations/anime", 7);
  const recomManga = await getNestedAnimeResponse("recommendations/manga", 7);
  const topAnime = await getAnimeresponse("top/anime", "limit=6");

  return (
    <>
      {/* RECOMMENDATIONS ANIME */}
      <section className="mb-5 mt-32 sm:mt-20">
        <Header title="ANIME RECOMMENDATIONS" />
        <AnimeScrollX type="anime" api={recomAnime} />
      </section>

      {/* RECOMMENDATIONS MANGA*/}
      <section className="mb-5">
        <Header title="MANGA RECOMMENDATIONS" />
        <AnimeScrollX type="manga" api={recomManga} />
      </section>

      {/* TOP ANIME */}
      <section className="mb-5">
        <Header title="TOP ANIME" linkHref="/topanime" type />
        <AnimeList type="anime" api={topAnime} />
      </section>

      {/* TOP MANGA */}
      <section className="mb-5">
        <Header title="TOP MANGA" linkHref="/topmanga" />
        <AnimeList type="manga" api={topManga} />
      </section>
    </>
  );
}
