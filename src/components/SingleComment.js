import React, { useState } from "react";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";

const SingleComment = ({ item }) => {
  const [showComment, setShowComment] = useState(false);
  const { authorProfileImageUrl, authorDisplayName, textOriginal } =
    item?.snippet?.topLevelComment?.snippet;

  return (
    <div
      className={`flex gap-x-7 justify-start items-start sm:w-full lg:w-11/12 overflow-hidden`}
    >
      <img
        src={authorProfileImageUrl}
        className="w-12 h-12 rounded-full object-cover"
        alt="user-profile-img"
      />
      <div className="">
        <p className="text-sm font-semibold">{authorDisplayName}</p>
        <div>
          <p>
            {showComment ? textOriginal : textOriginal.slice(0, 200) + " ..."}
          </p>
          {textOriginal.length >= 200 ? (
            <button
              className="font-semibold cursor-pointer mt-2"
              onClick={() => setShowComment(!showComment)}
            >
              {showComment ? "Show less" : "Read more"}
            </button>
          ) : null}
        </div>
        <div className="flex flex-row items-center gap-x-3 mt-2">
          <AiOutlineLike className="text-2xl" />
          <AiOutlineDislike className="text-2xl" />
          <span className="text-sm font-semibold">Reply</span>
        </div>
      </div>
    </div>
  );
};

export default SingleComment;
