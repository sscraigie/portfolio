import React from "react";

export const Pins = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="flex w-1/2 flex-col gap-5 rounded-lg border border-solid border-[#31363d] p-3 ">
      <div className="flex justify-between gap-10">
        <div className="flex gap-2">
          <svg
            aria-hidden="true"
            height="16"
            viewBox="0 0 16 16"
            version="1.1"
            width="16"
            data-view-component="true"
            className="fill-[#7e8590]"
          >
            <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path>
          </svg>
          <a className="font-semibold text-[#3b62ba] hover:underline">
            {title}
          </a>
          <div className="w-12 rounded-full border border-solid border-[#747b85]  p-0.5 text-[#747b85]">
            Public
          </div>
        </div>
        <svg
          aria-hidden="true"
          height="16"
          viewBox="0 0 16 16"
          version="1.1"
          width="16"
          data-view-component="true"
          className="fill-[#7e8590]"
        >
          <path d="M10 13a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0-4a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm-4 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm5-9a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM6 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path>
        </svg>
      </div>
      <div className="text-[#747b85]">{description}</div>
      <div className="flex">
        <div className="h-3 w-3 rounded-full bg-[#4778c7]"></div>
        <span className="text-[#747b85]"> Typescript</span>
      </div>
    </div>
  );
};

export const PinnedSection = () => {
  return (
    <div className="w-full ">
      <p className="text-white">Pinned</p>
      <div className="flex gap-3">
        <Pins title="daily-ui" description="100 Days of Frontend Code" />
        <Pins
          title="LeetCode"
          description="LeetCode problems solved in TypeScript."
        />
      </div>
    </div>
  );
};
