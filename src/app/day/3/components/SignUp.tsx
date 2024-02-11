"use client";
import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

//Submit API
// curl 'https://form.flodesk.com/forms/64a0c28286cf36e606ac5b72/submit' \
//   -H 'authority: form.flodesk.com' \
//   -H 'accept: */*' \
//   -H 'accept-language: en-US,en;q=0.9' \
//   -H 'content-type: application/json;charset=UTF-8' \
//   -H 'dnt: 1' \
//   -H 'origin: https://www.dailyui.co' \
//   -H 'referer: https://www.dailyui.co/' \
//   -H 'sec-ch-ua: "Brave";v="117", "Not;A=Brand";v="8", "Chromium";v="117"' \
//   -H 'sec-ch-ua-mobile: ?0' \
//   -H 'sec-ch-ua-platform: "Windows"' \
//   -H 'sec-fetch-dest: empty' \
//   -H 'sec-fetch-mode: cors' \
//   -H 'sec-fetch-site: cross-site' \
//   -H 'sec-gpc: 1' \
//   -H 'user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36' \
//   --data-raw '{"csrf":"88aef7ea3a1c26fbfd5465f895b92b07dd4b0a38ee638a78721d759a2cac751683d74c7779b0b6d55f0be91f38f2148434ab69abb5f0187180336e5f7533df88","aVVMWVE":"TEST@THISISATEST.COM","VMWVEaV":"","VVMWVEa":"","VMWEaVV":""}' \
//   --compressed

export const SignUp = () => {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-around gap-2 text-center">
      <KeyboardArrowDownIcon className="gap-3 text-7xl text-blue-600 hover:text-blue-800" />
      <div className="flex flex-col gap-7">
        <h1 className="m-1 text-4xl font-extrabold text-blue-600 md:text-6xl">
          Become a Better <br /> Developer
        </h1>
        <p className="text-blue-300">
          See why over 351,208+ designers have <br />
          joined the Daily UI challenge
        </p>
        <form className=" max-w-40 flex flex-col gap-3">
          <input
            type="email"
            placeholder="Email address..."
            className="h-10 appearance-none border-solid rounded-xl border border-blue-400 px-5 text-blue-400 placeholder:text-blue-400 focus:border-blue-600 focus:outline-none"
          />

          <button className="text-bold md:text-md h-10 rounded-xl border-none bg-blue-600 px-7 text-center font-extrabold text-white active:border-blue-600">
            Get Started
          </button>
        </form>
      </div>
      <KeyboardArrowUpIcon className="gap-5 text-7xl text-blue-600 hover:text-blue-800" />
    </div>
  );
};
