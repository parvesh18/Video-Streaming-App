import React, { useEffect, useState } from "react";
import { YOUTUBE_COMMENTS_API } from "../utils/constants";
import SingleComment from "./SingleComment";

const Comments = ({ commentNum, id }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getCommentsData();
  }, []);

  const getCommentsData = async () => {
    const data = await fetch(YOUTUBE_COMMENTS_API(id));
    const json = await data.json();
    setComments(json);
  };

  if (comments.length === 0) return;

  return (
    <div className="my-10 overflow-hidden sm:w-full lg:w-11/12">
      <h3 className="text-2xl font-semibold">{commentNum} Comments</h3>
      <div className="flex flex-col gap-y-6 sm:mx-10 my-5">
        {comments.items.map((item) => {
          return <SingleComment key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
};

export default Comments;
