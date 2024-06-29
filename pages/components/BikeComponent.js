import React from "react";

import { delay, motion } from "framer-motion";
import { useEffect, useState } from "react";

const paintPath = {
  hidden: { pathLength: 0, opacity: 1 },
  visible: ([i, start, end]) => {
    const delay = i;
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

const moveLeft = {
  initial: { x: 0 },
  moved: {
    x: [
      "0vw",
      "0vw",
      "-100vw",
      "-100vw",
      "-200vw",
      "-200vw",
      "-300vw",
      "-300vw",
    ], // Array of keyframes
    transition: {
      // times: [0, 0.2, 0.25, 0.45, 0.5, 0.7, 0.75, 0.95, 1],
      times: [
        0,

        1 / 6 - 1 / 40,
        1 / 6 + 1 / 40,

        1 / 2 - 1 / 40,
        1 / 2 + 1 / 40,

        5 / 6 - 1 / 40,
        5 / 6 + 1 / 40,

        1,
      ],
      duration: 15,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
};

const bikeMove = {
  initial: { x: -800 },
  moved: {
    x: 3300,
    transition: {
      delay: 1.5,
      duration: 15,
      // ease: "linear",
      ease: [0.33, 1, 0.68, 1],
      repeat: Infinity,
    },
  },
};

export function BikeComponent() {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [first, setFirst] = useState(0);

  useEffect(() => {
    const resize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setFirst(1);
    }, 3000);

    return () => clearTimeout(timeout); // Cleanup the timeout on component unmount
  }, []);

  const time = 15;
  const heightSVG = 600;

  const path = `M0 15
                H${width - heightSVG / 2}
                A 1 1, 0, 0 1, ${width - heightSVG / 2} ${heightSVG / 2}
                H${heightSVG / 2}
                A 1 1, 0, 0 0, ${heightSVG / 2} ${heightSVG}
                H${width}`;

  const pathWhite1 = `M${heightSVG / 2} ${heightSVG / 2}
                      A 1 1, 0, 0 0, ${heightSVG / 2} ${heightSVG}
                      H0
                      V${heightSVG / 2}
                      Z`;

  const path2 = `M0 ${heightSVG} H${width}`;

  const r = 150;
  const path3 = `M0 ${heightSVG} 
                 H${width - heightSVG / 1.25}
                 A ${r} ${r}, 0, 0 0, ${width - heightSVG / 1.25 + r} ${
    heightSVG - r
  }
                 V${15 + r}
                 A ${r} ${r}, 0, 0 1, ${width - heightSVG / 1.25 + r * 2} 15
                 H${width}
                 `;
  return (
    <motion.div
      initial="initial"
      animate="moved"
      variants={moveLeft}
      className="container"
    >
      <div className="scene">
        <div className="text-wrap-2">
          <h2 className="title-2">
            Pedal <br /> Lleuger
          </h2>
        </div>

        <motion.svg
          width="100vw"
          height={heightSVG + 15}
          initial="hidden"
          animate="visible"
          key={`path1-${first}`}
          style={{ zIndex: 2 }}
        >
          <path d={pathWhite1} fill="#ffffff" />
          <motion.path
            d={path}
            stroke="#FF6262"
            strokeWidth="30"
            strokeLinecap="round"
            fill="none"
            variants={paintPath}
            custom={[0, first, 1, 1]}
          />
        </motion.svg>
        <motion.div
          className="bike"
          initial="initial"
          animate="moved"
          variants={bikeMove}
        >
          <motion.svg viewBox="0 0 640 325" className="bike" fill="#312F2F">
            <path d="M312 32c-13.3 0-24 10.7-24 24s10.7 24 24 24h25.7l34.6 64H222.9l-27.4-38C191 99.7 183.7 96 176 96H120c-13.3 0-24 10.7-24 24s10.7 24 24 24h43.7l22.1 30.7-26.6 53.1c-10-2.5-20.5-3.8-31.2-3.8C57.3 224 0 281.3 0 352s57.3 128 128 128c65.3 0 119.1-48.9 127-112h49c8.5 0 16.3-4.5 20.7-11.8l84.8-143.5 21.7 40.1C402.4 276.3 384 312 384 352c0 70.7 57.3 128 128 128s128-57.3 128-128s-57.3-128-128-128c-13.5 0-26.5 2.1-38.7 6L375.4 48.8C369.8 38.4 359 32 347.2 32H312zM458.6 303.7l32.3 59.7c6.3 11.7 20.9 16 32.5 9.7s16-20.9 9.7-32.5l-32.3-59.7c3.6-.6 7.4-.9 11.2-.9c39.8 0 72 32.2 72 72s-32.2 72-72 72s-72-32.2-72-72c0-18.6 7-35.5 18.6-48.3zM133.2 368h65c-7.3 32.1-36 56-70.2 56c-39.8 0-72-32.2-72-72s32.2-72 72-72c1.7 0 3.4 .1 5.1 .2l-24.2 48.5c-9 18.1 4.1 39.4 24.3 39.4zm33.7-48l50.7-101.3 72.9 101.2-.1 .1H166.8zm90.6-128H365.9L317 274.8 257.4 192z" />
          </motion.svg>
        </motion.div>
      </div>
      <div className="scene">
        <div className="text-wrap">
          <p className="text">
            Gaudeix de les teves rutes en bici sense cap càrrega.
          </p>
        </div>
        <motion.svg
          width="100vw"
          height={heightSVG + 15}
          initial="hidden"
          animate="visible"
        >
          <motion.path
            d={path2}
            stroke="#FF6262"
            strokeWidth="30"
            strokeLinecap="round"
            fill="none"
            variants={paintPath}
            custom={[time / 6 - 1 / 3, 0, 0, 0]}
          />
        </motion.svg>
      </div>
      <div className="scene">
        <div className="text-wrap">
          <p className="text">
            Pedala i gaudeix del viatge mentre nosaltres et portem les maletes!
          </p>
        </div>
        <motion.svg
          width="100vw"
          height={heightSVG + 15}
          initial="hidden"
          animate="visible"
        >
          <motion.path
            d={path3}
            stroke="#FF6262"
            strokeWidth="30"
            strokeLinecap="round"
            fill="none"
            variants={paintPath}
            custom={[time / 2 - 1 / 3, 0, 0, 0]}
          />
        </motion.svg>
      </div>
      <div className="scene">
        <motion.svg
          width="100vw"
          height={heightSVG + 15}
          initial="hidden"
          animate="visible"
        >
          <motion.path
            d={path}
            stroke="#FF6262"
            strokeWidth="30"
            strokeLinecap="round"
            fill="none"
            variants={paintPath}
            custom={[(5 / 6) * time - 1 / 3, 0, 0, 0]}
          />
        </motion.svg>
        <div className="text-wrap-2">
          <h2 className="title-2">
            Pedal <br /> Lleuger
          </h2>
        </div>
      </div>
    </motion.div>
  );
}
