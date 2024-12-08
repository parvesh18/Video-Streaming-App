import React from "react";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { PiShareFat } from "react-icons/pi";
import { TfiDownload } from "react-icons/tfi";

const VideoInfo = ({
  subscribersNum,
  likeNum,
  thumbnails,
  title,
  channelTitle,
}) => {
  return (
    <div className="mt-5 w-full lg:w-11/12">
      <h3 className="text-2xl font-bold">{title}</h3>
      <div className="mt-4 flex flex-col md:flex-row justify-between md:items-center gap-y-7 mx-3">
        <div className="flex items-center gap-x-6">
          <div className="flex items-center gap-x-2">
            <img
              src={thumbnails?.default?.url}
              className="h-12 rounded-full"
              alt="channel-logo"
            />
            <div className="ml-2">
              <p className="font-semibold">{channelTitle}</p>
              <p>{subscribersNum} subscribers</p>
            </div>
          </div>
          <button className="bg-red-600 hover:bg-red-500 hover:scale-105 transition duration-200 text-white px-6 font-semibold py-2 rounded-3xl">
            Subscribe
          </button>
        </div>
        <div className="flex gap-x-7 ml-1 md:ml-0">
          <div className="flex gap-x-4">
            <div className="flex font-semibold gap-x-1">
              <AiOutlineLike className="text-2xl" />
              <span>{likeNum}</span>
            </div>
            <AiOutlineDislike className="text-2xl" />
          </div>
          <div className="flex gap-x-1">
            <PiShareFat className="text-2xl" />
            <span className="font-semibold">Share</span>
          </div>
          <div className="flex gap-x-1 items-center">
            <TfiDownload className="text-xl" />
            <span className="font-semibold">Download</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoInfo;
