"use client";
import React from "react";
import { PinContainer } from "@/components/ui/3d-pin";
import { project } from "../page";
import  Image  from "next/image"

export default function Card({ project }: { project: project }) {
  const { title, description, href, image } = project;
  return (
    <PinContainer title={href} href={`https://${href}`}>
      <div className="flex h-[20rem] w-[20rem] basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 ">
        <h3 className="!m-0 max-w-xs !pb-2 text-base  font-bold text-slate-100">
          {title}
        </h3>
        <div className="!m-0 !p-0 text-base font-normal">
          <span className="text-slate-500 ">{description}</span>
        </div>
        <div className="mt-4 flex w-full flex-1 rounded-lg bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500">
          {image && (
            <Image
              src={image}
              alt={title}
              className="h-full w-full rounded-lg object-cover"
            />
          )}
        </div>
      </div>
    </PinContainer>
  );
}
