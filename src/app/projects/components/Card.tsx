"use client";
import React from "react";
import { PinContainer } from "@/components/ui/3d-pin";

export function Card(props: {
  title: string;
  description: string;
  href: string;
  image?: string;
}) {
  return (
    <div className="flex h-[40rem] w-full items-center justify-center ">
      <PinContainer title={props.href} href={`https://${props.href}`}>
        <div className="flex h-[20rem] w-[20rem] basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 ">
          <h3 className="!m-0 max-w-xs !pb-2 text-base  font-bold text-slate-100">
            {props.title}
          </h3>
          <div className="!m-0 !p-0 text-base font-normal">
            <span className="text-slate-500 ">{props.description}</span>
          </div>
          <div className="mt-4 flex w-full flex-1 rounded-lg bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500">
            <img
              src={props.image}
              alt={props.title}
              className="h-full w-full rounded-lg object-cover"
            />
          </div>
        </div>
      </PinContainer>
    </div>
  );
}
