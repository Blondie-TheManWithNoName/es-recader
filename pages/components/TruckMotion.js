import React from "react";
import HouseMotion from "./HouseMotion";
import { delay, motion } from "framer-motion";

export default function TruckMotion({ array, delay, slow, fast }) {
  return (
    <div className="w-7 h-20 bottom-16 absolute w-screen">
      {array.map((_, index) => (
        <HouseMotion
          key={index}
          extraDelay={
            index + 1 >= array.length / 2
              ? index * 0.35 + array.length / 2
              : index
          }
          delay={delay}
          duration={index + 1 >= array.length / 2 ? fast : slow}
        />
      ))}
    </div>
  );
}
