/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import Header from "../../components/Utilities/Header";
import Pagination from "../../components/Utilities/Pagination";
import { useEffect, useState } from "react";
import { getAnimeresponse } from "../../libs/api-libs";
import AnimeList from "../../components/AnimeList";

export default function Page() {
  const [page, setPage] = useState(1);
  const lastPage = 2686;
  const [topManga, setTopManga] = useState([]);

  async function fetchData() {
    const data = await getAnimeresponse("top/manga", `page=${page}`);
    setTopManga(data);
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
      <Header title={`TOP MANGA #${page}`} />
      <AnimeList api={topManga} type="manga" />
      <Pagination
        page={page}
        lastPage={lastPage}
        onPrevPage={handlePrevPage}
        onNextPage={handleNextPage}
      />
    </div>
  );
}
