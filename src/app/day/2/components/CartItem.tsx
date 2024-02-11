"use client";
import Image from "next/image";
import React, { useState } from "react";

export default function CartItem({
  name,
  price,
  image,
  quantitys,
  setQuantitys,
}: {
  name: string;
  price: number;
  image: string;
  quantitys?: number;
  setQuantitys?: React.Dispatch<React.SetStateAction<number>>;
}) {
  const [quantity, setQuantity] = useState(2);
  return (
    <div className="h-15 flex w-full justify-between gap-5 rounded bg-white p-2 shadow ">
      <div className=" flex items-center justify-center ">
        <Image
          className="rounded"
          src={`/d2/${image}`}
          alt="side"
          width={50}
          height={50}
        />
      </div>
      <div className="flex grow flex-col">
        <p>{name}</p>
        <b>${price}</b>
      </div>
      <div
        id="counter"
        className="flex h-auto flex-col items-center justify-center"
      >
        <button
          className="rounded border-none"
          onClick={() => setQuantity(quantity + 1)}
        >
          +
        </button>
        <div className="text-center">{quantity}</div>
        <button
          className="rounded border-none"
          onClick={() => quantity !== 0 && setQuantity(quantity - 1)}
        >
          -
        </button>
      </div>
    </div>
  );
}
