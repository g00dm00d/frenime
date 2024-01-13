/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import AnimeList from "../../components/AnimeList";
import Header from "../../components/Utilities/Header";
import Pagination from "../../components/Utilities/Pagination";
import { useEffect, useState } from "react";
import { getAnimeresponse } from "../../libs/api-libs";

export default function Page() {
  const [page, setPage] = useState(1);
  const lastPage = 1046;
  const [topAnime, setTopAnime] = useState([]);

  async function fetchData() {
    const data = await getAnimeresponse("top/anime", `page=${page}`);
    setTopAnime(data);
  }

  useEffect(() => {
    fetchData();
  }, [page]);

  function scrollTop() {
    scrollTo({
      behavior: "smooth",
      top: 0,
    });
  }

  function handlePrevPage() {
    setPage(page - 1);
    scrollTop();
  }

  function handleNextPage() {
    setPage(page + 1);
    scrollTop();
  }

  return (
    <div className="mt-32 sm:mt-20">
      <Header title={`TOP ANIME #${page}`} />
      <AnimeList api={topAnime} type="anime" />
      <Pagination
        page={page}
        lastPage={lastPage}
        onPrevPage={handlePrevPage}
        onNextPage={handleNextPage}
      />
    </div>
  );
}
