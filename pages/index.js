import { delay, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { LightPedal } from "./components/LighPedal";
import title from "../public/title.svg";
import Image from "next/image";
import mask from "../public/mask_group.png";

export default function App() {
  return (
    <div className="relative">
      <div className="flex flex-col items-center mt-28">
        <Image src={title} alt="title" className="scale-125 mt-8 absolute" />
        <Image src={mask} alt="mask" className="w-screen" />
      </div>
      <LightPedal />
    </div>
  );
}
