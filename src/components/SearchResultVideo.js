import React from "react";
import { integerToFormat, timeAgo } from "../utils/constants";
import { Link } from "react-router-dom";

const SearchResultVideo = ({ videoData }) => {
  const { thumbnails, title, channelTitle, publishedAt } = videoData.snippet;

  const publishedTime = timeAgo(publishedAt);

  const viewCountRandom =
    Math.floor(Math.random() * (9000000 - 80000 + 1)) + 80000;

  const viewNum = integerToFormat(viewCountRandom);

  const id = videoData?.id?.videoId;

  return (
    <Link to={"/watch/" + id}>
      <div className="flex flex-col sm:flex-row gap-x-5 w-full">
        <div className="w-full sm:w-2/5 md:h-[200px] lg:h-[215px]">
          <img
            src={thumbnails?.high?.url}
            className="rounded-lg mb-2 w-full h-full object-cover"
            alt="video-img"
          />
        </div>
        <div className="w-full sm:w-3/5 flex flex-col gap-y-1">
          <p className="font-semibold text-lg">{title}</p>
          <div className="flex gap-x-2">
            <p>{viewNum} views</p>
            <p>•</p>
            <p>{publishedTime}</p>
          </div>
          <p className="font-thin">{channelTitle}</p>
        </div>
      </div>
    </Link>
  );
};

export default SearchResultVideo;
