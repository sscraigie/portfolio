import React from "react";
import Image from "next/image";

export const Logos = () => (
  <div className="w-full">
    <div className="flex justify-around">
      {["disney", "netflix", "microsoft"].map((image) => (
        <div key={image} className="flex items-center justify-center p-2">
          <Image
            src={`/d3/logos/${image}.svg`}
            alt="hero"
            width={150}
            height={150}
            layout="intrinsic"
          />
        </div>
      ))}
    </div>
    <div className="flex justify-around px-10">
      {["airbnb", "xd", "verizon"].map((image) => (
        <div key={image} className="flex items-center justify-center p-2">
          <Image
            src={`/d3/logos/${image}.svg`}
            alt="hero"
            width={image === "xd" ? 50 : 150}
            height={50}
            layout="intrinsic"
          />
        </div>
      ))}
    </div>
  </div>
);

export default Logos;
