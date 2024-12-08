import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Comments from "./Comments";
import {
  integerToFormat,
  YOUTUBE_CHANNEL_BY_ID,
  YOUTUBE_VIDEO_BY_ID,
} from "../utils/constants";
import Description from "./Description";
import VideoInfo from "./VideoInfo";
import { useSelector } from "react-redux";
import ShimmerVideo from "../shimmer/ShimmerVideo";

const WatchPage = () => {
  const [videoData, setVideoData] = useState([]);
  const [channelData, setChannelData] = useState([]);

  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  const { id } = useParams();

  useEffect(() => {
    getSingleVideoData();
  }, []);

  useEffect(() => {
    if (videoData.length !== 0) getChannelData();
  }, [videoData]);

  const getSingleVideoData = async () => {
    const data = await fetch(YOUTUBE_VIDEO_BY_ID(id));
    const json = await data.json();
    setVideoData(json);
  };

  const getChannelData = async () => {
    const data = await fetch(
      YOUTUBE_CHANNEL_BY_ID(videoData?.items[0]?.snippet?.channelId)
    );
    const json = await data.json();
    setChannelData(json);
  };

  if (videoData.length === 0) return <ShimmerVideo />;
  if (channelData.length === 0) return <ShimmerVideo />;

  const { title, channelTitle, publishedAt, description, tags } =
    videoData.items[0].snippet;

  const { viewCount, likeCount, commentCount } =
    videoData?.items[0]?.statistics;

  const { thumbnails } = channelData?.items[0]?.snippet;

  const { subscriberCount } = channelData?.items[0]?.statistics;

  const subscribersNum = integerToFormat(subscriberCount);
  const likeNum = integerToFormat(likeCount);
  const commentNum = integerToFormat(commentCount);

  return (
    <div className={`w-11/12 sm:w-full ${isMenuOpen ? "ml-10" : "ml-4  mr-4"}`}>
      <div className="select-none">
        <iframe
          className="rounded-xl w-full lg:w-11/12 h-64 sm:h-96 lg:h-[450px]"
          src={`https://www.youtube.com/embed/${id}?si=RQr7Cn06Plethk2y`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <VideoInfo
        subscribersNum={subscribersNum}
        likeNum={likeNum}
        thumbnails={thumbnails}
        title={title}
        channelTitle={channelTitle}
      />
      <Description
        description={description}
        publishedAt={publishedAt}
        viewCount={viewCount}
        tags={tags}
      />
      <Comments commentNum={commentNum} id={id} />
    </div>
  );
};

export default WatchPage;
