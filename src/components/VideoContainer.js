import React, { useEffect, useState } from "react";
import {
  YOUTUBE_VIDEOS_API,
  YOUTUBE_SEARCH_VIDEOS_API,
} from "../utils/constants";
import VideoCard from "./VideoCard";
import { useSelector } from "react-redux";
import ShimmerHome from "../shimmer/ShimmerHome";

const VideoContainer = () => {
  const [videosData, setVideosData] = useState([]);
  const category = useSelector((store) => store.app.category);

  useEffect(() => {
    setVideosData([]);
    category === "" ? getVideos() : getCategoryVideos();
  }, [category]);

  async function getVideos() {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    setVideosData(json.items);
  }

  async function getCategoryVideos() {
    const data = await fetch(YOUTUBE_SEARCH_VIDEOS_API(category));
    const json = await data.json();
    const filterData = json.items.filter((item) =>
      item.id.hasOwnProperty("videoId")
    );
    setVideosData(filterData);
  }

  if (videosData.length === 0) return <ShimmerHome />;

  return (
    <div className="flex flex-wrap justify-center items-start gap-4 gap-y-8 my-4">
      {videosData.map((item) => {
        return <VideoCard key={item.etag} videoData={item} />;
      })}
    </div>
  );
};

export default VideoContainer;
