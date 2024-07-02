import React from "react";
import Image from "next/image";

const GitLabPage = () => {
  return (
    <div className="relative w-100 h-screen  ">
      <Image
        src="/img/Screenshot 2024-07-01 094806.png" // Make sure to add your profile image in the public/images directory
        alt="Profile Image"
        layout="fill"
        objectFit="cover"
      />
    </div>
  );
};

export default GitLabPage;
