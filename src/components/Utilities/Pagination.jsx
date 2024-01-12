export default function Pagination({ page, lastPage, onPrevPage, onNextPage }) {
  return (
    <div className="mt-7 mb-3 flex justify-center items-center gap-2 font-semibold">
      {page != 1 && (
        <button
          onClick={onPrevPage}
          className="text-sm text-primary bg-contrast dark:bg-dark-contrast hover:bg-opacity-80 px-2 py-1 rounded-md transition-all"
        >
          Prev
        </button>
      )}

      <h1>
        {page} of {lastPage}
      </h1>

      {page != lastPage && (
        <button
          onClick={onNextPage}
          className="text-sm text-primary bg-contrast dark:bg-dark-contrast hover:bg-opacity-80 px-2 py-1 rounded-md transition-all"
        >
          Next
        </button>
      )}
    </div>
  );
}
