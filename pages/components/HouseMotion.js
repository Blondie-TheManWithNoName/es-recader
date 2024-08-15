import { delay, motion } from "framer-motion";
import React from "react";
import house from "../../public/house.svg";
import Image from "next/image";

export default function HouseMotion({ extraDelay, delay, duration }) {
  const baseDuration = duration;
  const baseRepeatDelay = 7 - baseDuration;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        right: ["50%", `${40 * 0.3 + 50}%`, `${40 * 0.75 + 50}%`, "90%"],
        opacity: [0, 1, 1, 0],
      }}
      transition={{
        duration: baseDuration,
        times: [0, 0.3, 0.75, 1], // Control the timing for keyframes
        ease: "linear", // Linear timing function for smooth animation
        repeat: Infinity, // Repeat the animation infinitely
        repeatType: "loop",
        delay: delay + extraDelay,
        repeatDelay: baseRepeatDelay,
      }}
      className="absolute bottom-5"
    >
      <Image src={house} alt="mask" className="w-7 h-16 scale-[400%]" />
    </motion.div>
  );
}
