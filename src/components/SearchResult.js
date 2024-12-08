import React, { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_VIDEOS_API } from "../utils/constants";
import SearchResultVideo from "./SearchResultVideo";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import ShimmerSearch from "../shimmer/ShimmerSearch";

const SearchResult = () => {
  const [resultVideos, setResultVideos] = useState([]);
  const searchQuery = useSelector((store) => store.app.searchQuery);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("q");

  useEffect(() => {
    setResultVideos([]);
    getVideos();
  }, [searchQuery]);

  async function getVideos() {
    const data = await fetch(YOUTUBE_SEARCH_VIDEOS_API(query));
    const json = await data.json();
    setResultVideos(json);
  }

  if (resultVideos.length === 0) return <ShimmerSearch />;

  return (
    <div className="sm:mx-5 md:mx-10 p-5 w-full flex flex-col gap-y-10 sm:gap-y-5">
      {resultVideos.items.map((item) => {
        return (
          item.id.videoId && (
            <SearchResultVideo key={item.etag} videoData={item} />
          )
        );
      })}
    </div>
  );
};

export default SearchResult;
