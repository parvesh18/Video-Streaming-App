import React from "react";

const ShimmerHome = () => {
  const arr = new Array(16).fill(0);
  return (
    <div className="flex flex-wrap justify-center items-start gap-4 gap-y-8 my-4">
      {arr.map((_, index) => (
        <div
          key={index}
          className="w-full mx-8 sm:mx-0 sm:w-80 flex flex-col gap-y-2"
        >
          <div className="bg-slate-200 h-40 rounded-md"></div>
          <div className="bg-slate-200 h-6 w-10/12 rounded-md"></div>
          <div className="h-3 w-2/5 bg-slate-200 rounded-md"></div>
          <div className="h-3 w-7/12 bg-slate-200 rounded-md"></div>
        </div>
      ))}
    </div>
  );
};

export default ShimmerHome;
