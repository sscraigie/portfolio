import Link from "next/link";
import React from "react";
import Image from "next/image";

export const InfoCard = (props: { day: number; title: string }) => {
  return (
    <Link
      href={`/day/${props.day}`}
      className=" flex h-60 w-80 appearance-none flex-col justify-between rounded-md bg-white no-underline shadow-lg shadow-slate-400 transition hover:scale-105"
    >
      <Image
        alt={props.title}
        className=" h-40 w-full rounded-t-md object-cover"
        height="200"
        src={`/${props.day}.png`}
        style={{
          aspectRatio: "200/200",
          objectFit: "cover",
        }}
        width="200"
      />
      <div className=" flex flex-col gap-2 p-3">
        <h2 className=" m-0 text-lg font-semibold text-black no-underline">
          Day {props.day}
        </h2>
        <p className="m-0 text-gray-600 no-underline">{props.title}</p>
      </div>
    </Link>
  );
};

const Page = () => {
  return (
    <div className="flex items-center justify-center p-20">
      <InfoCard day={1} title="Sign Up"></InfoCard>
    </div>
  );
};

export default Page;
