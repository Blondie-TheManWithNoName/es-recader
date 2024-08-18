import React from "react";
import { motion } from "framer-motion";
import { useWindowSize } from "../hooks/useWindowSize";

const paintPath = {
  hidden: { pathLength: 0, opacity: 1 },
  visible: ([delay, start, end]) => ({
    pathLength: [start, 1, 1, end, end],
    transition: {
      pathLength: {
        delay,
        duration: 15,
        times: [0, 0.1, 0.4, 0.4, 1],
        ease: "easeInOut",
        repeat: Infinity,
      },
    },
  }),
};

const color = "#FF6262";
const bgColor = "#FFFFFF";
const strokeWidth = 30;

export default function MotionSVG({ path = "", delay, start, end, extraPath }) {
  const size = useWindowSize();

  const height = size.height ? size.height / 1.6 + strokeWidth / 2 : 0;

  const validPath =
    typeof path === "string" && path.trim() !== "" ? path : "M0,0"; // Fallback to a default path

  return (
    <motion.svg
      width="100vw"
      height={`${height}px`}
      initial="hidden"
      animate="visible"
      key={`path-${start}`}
      style={{ zIndex: 2 }}
    >
      {extraPath && <path d={extraPath} fill={bgColor} />}

      <motion.path
        d={validPath}
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        fill="none"
        variants={paintPath}
        custom={[delay, start, end, end]}
      />
    </motion.svg>
  );
}
