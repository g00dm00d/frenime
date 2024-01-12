export const getAnimeresponse = async (resource, query) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`
  );
  const anime = await response.json();
  return anime.data;
};

export const getNestedAnimeResponse = async (resource, gap) => {
  const response = await getAnimeresponse(resource);
  const animes = response?.flatMap((anime) => anime.entry);

  const first = Math.floor(Math.random() * (animes.length - gap + 1));
  const last = first + gap;

  const slicedAnimes = animes.slice(first, last);
  return slicedAnimes;
};
