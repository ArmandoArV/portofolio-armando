import React from "react";
import Image from "next/image";
import { aboutMe } from "../../Constants";
import pfp from "../../assets/ProfilePicture/pfp.jpg";

export const AboutMe = () => {
  return (
    <div className="flex flex-col md:flex-row gap-10 p-10 rounded-10 justify-between w-full md:w-90 mx-auto mt-10">
      <div className="w-full h-full flex justify-center items-center">
        <div className="w-72 h-72 bg-custom-gradient bg-[400% 400%] border-7 shadow-2xl rounded-full flex justify-center items-center animate-gradient">
          <Image
            src={pfp}
            alt="Picture of the author"
            width={275}
            height={200}
            className="rounded-full"
          />
        </div>
      </div>

      <div className="w-full h-full mt-20
      bg-white bg-opacity-10 rounded-10 shadow-2xl
      ">
        <h1 className="text-left ml-10 bg-custom-gradient bg-clip-text text-transparent font-bold text-5xl md:text-2xl animate-gradient bg-[400% 400%]">
          {aboutMe.name}
        </h1>
        <p className="text-1.5xl 
        font-normal text-justify ml-10 mt-5 text-white">
          {aboutMe.description}
        </p>
      </div>
    </div>
  );
};
