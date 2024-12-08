import React, { useState } from "react";
import { timeAgo, integerToFormat } from "../utils/constants";

const Description = ({ description, publishedAt, viewCount, tags }) => {
  const [open, setOpen] = useState(false);

  const viewNum = integerToFormat(viewCount);
  const publishedTime = timeAgo(publishedAt);

  return (
    <div className="mt-5 ml-5 bg-gray-100 p-4 rounded-2xl w-11/12">
      <div className="flex gap-x-3 font-semibold">
        <p>{viewNum} views</p>
        <p>{publishedTime}</p>
      </div>
      {/* description */}
      <div className="overflow-hidden">
        <p className="mt-2">
          <span>{open ? description : description.slice(0, 150) + "..."}</span>
        </p>
        <div className="my-3 text-blue-700">
          {open &&
            tags &&
            tags.map((item) => <span className="mr-2">#{item}</span>)}
        </div>
        <span
          className="font-semibold cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          {open ? "Show less" : "Read more"}
        </span>
      </div>
    </div>
  );
};

export default Description;
