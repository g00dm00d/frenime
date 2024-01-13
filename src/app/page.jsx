import Header from "../components/AnimeList/Header";
import AnimeList from "../components/AnimeList";
import { getNestedAnimeResponse, getAnimeresponse } from "../libs/api-libs";

export default async function Page() {
  const recomAnime = await getNestedAnimeResponse("recommendations/anime", 6);
  const recomManga = await getNestedAnimeResponse("recommendations/manga", 6);
  const topAnime = await getAnimeresponse("top/anime", "limit=6");
  const topManga = await getAnimeresponse("top/manga", "limit=6");

  return (
    <>
      {/* RECOMMENDATIONS ANIME */}
      <section className="mb-7 mt-28 sm:mt-20">
        <Header title="RECOMMENDATIONS ANIME" />
        <AnimeList type="anime" api={recomAnime} />
      </section>

      {/* TOP ANIME */}
      <section className="mb-7">
        <Header
          title="TOP ANIME"
          linkHref="/topanime"
          linkTitle="Lihat semua"
          type
        />
        <AnimeList type="anime" api={topAnime} />
      </section>

      {/* RECOMMENDATIONS MANGA*/}
      <section className="mb-7">
        <Header title="RECOMMENDATIONS MANGA" />
        <AnimeList type="manga" api={recomManga} />
      </section>

      {/* TOP MANGA */}
      <section className="mb-7">
        <Header
          title="TOP MANGA"
          linkHref="/topmanga"
          linkTitle="Lihat semua"
        />
        <AnimeList type="manga" api={topManga} />
      </section>
    </>
  );
}
