import React from "react";

import Image from "next/image";

export const SideProfile = () => {
  return (
    <div className="flex h-full flex-col justify-center p-2">
      <Image
        className="rounded-full border border-[#7e8590]"
        src={`/profile-picture.jpg`}
        alt="side"
        width={250}
        height={250}
      />
    </div>
  );
};

export default SideProfile;
