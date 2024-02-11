"use client";
import Motion from "@/components/Motion";
import React, { useState } from "react";

// const Popup = (props: {
//   open: boolean;
//   setOpen: React.Dispatch<React.SetStateAction<boolean>>;
// }) => {
//   return (
//     <div className="flex h-52 w-52 flex-col items-center justify-center gap-3 rounded bg-white p-2 text-center shadow">
//       <div className="absolute right-[-10px] top-[-10px]">
//         <button
//           onClick={() => {
//             props.setOpen(!open);
//           }}
//           className="rounded-full border-none text-red-600 shadow"
//         >
//           <XIcon />
//         </button>
//       </div>
//       <CheckIcon className="text-green-600" />
//       <b className="text-lg">Woohoo!</b>
//       <b className="text-sm">Your order has been placed</b>
//       <p className="text-sm text-neutral-500">
//         Pull up a chair, sit back and relax as your order is on its way to you!
//       </p>
//     </div>
//   );
// };

const Page = () => {
  const [open, setOpen] = useState<boolean>(true);
  return (
    <div className="flex h-full w-full items-center justify-center">
      <button
        onClick={() => setOpen(!open)}
        className="rounded-lg bg-neutral-900 p-2 px-4 text-lg text-white  hover:scale-105 hover:bg-neutral-700"
      >
        Place Order
      </button>
      {open && (
        <Motion
          duration={0.25}
          className="absolute top-0 z-10 flex h-full w-full items-center justify-center  bg-slate-500 bg-opacity-50 transition-all ease-in-out"
        >
          <div className="relative flex h-52 w-52 flex-col items-center justify-center gap-3 rounded bg-white p-2 text-center shadow">
            <div className="absolute right-[-10px] top-[-10px]">
              <button
                onClick={() => {
                  setOpen(!open);
                }}
                className="flex h-8 w-8 items-center justify-center rounded-full border-none bg-white text-red-600 shadow"
              >
                <XIcon />
              </button>
            </div>
            <CheckIcon className="text-green-600" />
            <b className="text-lg">Woohoo!</b>
            <b className="text-sm">Your order has been placed</b>
            <p className="text-sm text-neutral-500">
              Pull up a chair, sit back and relax as your order is on its way to
              you!
            </p>
          </div>
        </Motion>
      )}
    </div>
  );
};

function CheckIcon(props: { className?: string }) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function XIcon(props: { className?: string }) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

export default Page;
