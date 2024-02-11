import React from "react";

const Toggle = () => {
  return (
    <div className="flex h-full w-full items-center justify-center gap-10">
      <label className="relative inline-flex cursor-pointer items-center">
        <input type="checkbox" value="" className="peer sr-only" />
        <div className="rtl:peer-checked:after:-translate-x-ful peer peer h-6 w-11 rounded-full bg-gray-300 after:absolute after:start-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full   peer-checked:after:border-white"></div>
        <span className="ms-3 text-sm font-medium text-gray-900">Toggle</span>
      </label>
    </div>
  );
};

export default Toggle;
