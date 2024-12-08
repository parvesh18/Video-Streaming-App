import React from "react";
import { timeAgo, integerToFormat } from "../utils/constants";
import { Link } from "react-router-dom";

const VideoCard = ({ videoData }) => {
  const { thumbnails, title, channelTitle, publishedAt } = videoData.snippet;

  const viewCountRandom =
    Math.floor(Math.random() * (9000000 - 80000 + 1)) + 80000;

  const viewsNum = integerToFormat(
    videoData?.statistics?.viewCount || viewCountRandom
  );

  const publishedTime = timeAgo(publishedAt);

  const id = videoData?.id?.videoId || videoData?.id;

  return (
    <div className="w-full mx-8 sm:mx-0 sm:w-80">
      <Link to={"/watch/" + id}>
        <img
          src={thumbnails.medium.url}
          className="rounded-lg mb-2 w-full"
          alt="video-img"
        />
        <p className="font-semibold">{title}</p>
        <p className="">{channelTitle}</p>
        <div className="flex gap-x-2 text-sm">
          <p>{viewsNum} views</p>
          <p>•</p>
          <p>{publishedTime}</p>
        </div>
      </Link>
    </div>
  );
};

export default VideoCard;
