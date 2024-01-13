"use client";

import { useState } from "react";
import YouTube from "react-youtube";

export default function VideoPlayer({ youtubeID }) {
  const [isOpen, setIsOpen] = useState(true);
  const [isHidden, setIsHidden] = useState(false);
  const [isError, setIsError] = useState(false);

  const option = {
    width: "200",
    height: "200",
  };

  function ScreenShow() {
    return (
      <>
        <div className={`${isHidden ? "hidden" : "fixed"} bottom-0 right-0`}>
          <div className="flex justify-end bg-contrast dark:bg-dark-contrast text-primary text-xl sm:text-2xl">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="py-1 px-2 hover:bg-sky-600 dark:hover:bg-emerald-300 dark:text-black"
            >
              -
            </button>
            <button
              onClick={() => setIsHidden(true)}
              className="py-1 px-2 hover:bg-red-500 dark:text-black transition-all"
            >
              &times;
            </button>
          </div>
          <YouTube
            videoId={youtubeID}
            onReady={(e) => e.target.pauseVideo()}
            opts={option}
          />
        </div>
      </>
    );
  }

  function ScreenMinimize() {
    return (
      <>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="fixed bottom-0 right-0 bg-contrast dark:bg-dark-contrast rounded-tl-lg"
        >
          <h1 className="text-xl font-bold text-white text-center p-2 ">
            Trailer Anime
          </h1>
        </button>
      </>
    );
  }

  return isOpen ? <ScreenShow /> : <ScreenMinimize />;
}
