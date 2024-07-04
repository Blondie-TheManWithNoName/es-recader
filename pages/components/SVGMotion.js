import React from "react";
import { delay, motion } from "framer-motion";
import { useWindowSize } from "../hooks/useWindowSize";

const paintPath = {
  hidden: { pathLength: 0, opacity: 1 },
  visible: ([delay, start, end]) => {
    return {
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
    };
  },
};

const color = "#FF6262";
const bgColor = "#FFFFFF";
const strokeWidth = 30;

export default function motionSVG({
  path,
  delay,
  start,
  end,
  extraPath,
  heightSVG,
}) {
  const size = useWindowSize();
  return (
    <motion.svg
      width="100vw"
      height={size.height / 1.6 + strokeWidth / 2}
      initial="hidden"
      animate="visible"
      key={`path-${start}`}
      style={{ zIndex: 2 }}
    >
      {extraPath && <path d={extraPath} fill={bgColor} />}

      <motion.path
        d={path}
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
