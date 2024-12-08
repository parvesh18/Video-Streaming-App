import React from "react";

const ShimmerVideo = () => {
  return (
    <div className="w-11/12 mx-10">
      <div className="rounded-lg w-full lg:w-11/12 h-64 sm:h-80 lg:h-[400px] bg-slate-200"></div>
      <div className="mt-2 w-8/12 lg:w-7/12 bg-slate-200 h-6 rounded-lg"></div>
      <div className="mt-2 w-6/12 lg:w-5/12 bg-slate-200 h-6 rounded-lg"></div>
      <div className="mt-2 w-7/12 lg:w-10/12 bg-slate-200 h-6 rounded-lg"></div>
      <div className="mt-2 w-9/12 lg:w-9/12 bg-slate-200 h-6 rounded-lg"></div>
    </div>
  );
};

export default ShimmerVideo;
