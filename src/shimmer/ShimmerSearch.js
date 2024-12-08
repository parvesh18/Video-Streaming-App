import React from "react";

const ShimmerSearch = () => {
  const arr = new Array(7).fill(0);
  return (
    <div className="sm:mx-5 md:mx-10 p-5 w-full flex flex-col gap-y-10 sm:gap-y-5">
      {arr.map((_, index) => (
        <div
          key={index}
          className="flex flex-col sm:flex-row gap-y-2 gap-x-5 w-10/12"
        >
          <div className="bg-slate-200 h-40 rounded-md w-full sm:w-2/5 md:h-[200px] lg:h-[215px]"></div>
          <div className="w-full sm:w-3/5 flex flex-col gap-y-4">
            <div className="bg-slate-200 h-6 w-10/12 rounded-md"></div>
            <div className="h-3 w-2/5 bg-slate-200 rounded-md"></div>
            <div className="h-3 w-7/12 bg-slate-200 rounded-md"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShimmerSearch;
