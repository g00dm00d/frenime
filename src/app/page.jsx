import Header from "../components/AnimeList/Header";
import AnimeList from "../components/AnimeList";
import MangaList from "../components/MangaList";
import { getNestedAnimeResponse, getAnimeresponse } from "../libs/api-libs";

export default async function Page() {
  const recomAnime = await getNestedAnimeResponse("recommendations/anime", 6);
  const recomManga = await getNestedAnimeResponse("recommendations/manga", 6);
  const topAnime = await getAnimeresponse("top/anime", "limit=6");
  const topManga = await getAnimeresponse("top/manga", "limit=6");

  return (
    <>
      {/* rekomendasi anime */}
      <section className="mb-7 mt-28 sm:mt-20">
        <Header title="RECOMMENDATIONS ANIME" />
        <AnimeList api={recomAnime} />
      </section>

      {/* anime terpopuler */}
      <section className="mb-7">
        <Header
          title="TOP ANIME"
          linkHref="/topanime"
          linkTitle="Lihat semua"
        />
        <AnimeList api={topAnime} />
      </section>

      {/* rekomendasi manga */}
      <section className="mb-7">
        <Header title="RECOMMENDATIONS MANGA" />
        <MangaList api={recomManga} />
      </section>

      {/* manga terpopuler */}
      <section className="mb-7">
        <Header
          title="TOP MANGA"
          linkHref="/topmanga"
          linkTitle="Lihat semua"
        />
        <MangaList api={topManga} />
      </section>
    </>
  );
}
