import React from "react";

const courseSummary = () => {
  return (
    <div className="w-full mt-10 flex gap-x-20">
      <div className="w-2/5 flex flex-col text-left gap-2">
        <p className="text-sm tracking-wider">Packages Include</p>
        <p className="text-xl text-primary">
          JavaScript + ReactJS + Mock Interviews
        </p>
      </div>
      <div className="w-3/5 flex flex-col -translate-y-5">
        <div className="grid grid-cols-3 text-sm border-b-2 border-dashed pb-10">
          <p>Sub Total</p>
          <p className="-translate-x-10">$ 2654</p>
          <p className="text-primary translate-x-8">-$2233</p>
        </div>
        <div className="flex gap-6 pt-10">
          <h3 className="text-lg font-bold tracking-wide uppercase">
            Total Amount
          </h3>
          <h3 className="text-lg font-bold tracking-wide uppercase text-primary">
            $2654
          </h3>
        </div>
      </div>
    </div>
  );
};

export default courseSummary;
