import React from "react";

import { delay, motion } from "framer-motion";
import { useEffect, useState } from "react";
import styles from "../../styles/lightPedal.module.scss";
import SVGMotion from "./SVGMotion";
import BikeMotion from "./BikeMotion";
import { useWindowSize } from "../hooks/useWindowSize";

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

export function LightPedal() {
  const [heightSVG, setHeightSVG] = useState(0);
  const [first, setFirst] = useState(0);
  const size = useWindowSize();
  // const { widthNew } = useViewport();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setFirst(1);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    setHeightSVG(size.height / 1.6);
  }, [size.height]);

  const time = 15;
  const r = 150;
  const validWidth = size.width || 0;
  const validHeightSVG = heightSVG || 0;

  const path = `M0 15
                H${validWidth - validHeightSVG / 2}
                A 1 1, 0, 0 1, ${validWidth - validHeightSVG / 2} ${
    validHeightSVG / 2
  }
                H${validHeightSVG / 2}
                A 1 1, 0, 0 0, ${validHeightSVG / 2} ${validHeightSVG}
                H${validWidth}`;

  const pathWhite1 = `M${validHeightSVG / 2} ${validHeightSVG / 2}
                      A 1 1, 0, 0 0, ${validHeightSVG / 2} ${validHeightSVG}
                      H0
                      V${validHeightSVG / 2}
                      Z`;

  const path2 = `M0 ${validHeightSVG} H${validWidth}`;

  const pathWhite2 = `M${validWidth - validHeightSVG / 1.25} ${validHeightSVG}
                      A ${r} ${r}, 0, 0 0, ${
    validWidth - validHeightSVG / 1.25 + r
  } ${validHeightSVG - r}
                      V${validHeightSVG / 2}
                      H${validWidth}
                      V${validHeightSVG}
                      Z`;

  const path3 = `M0 ${validHeightSVG} 
                 H${validWidth - validHeightSVG / 1.25}
                 A ${r} ${r}, 0, 0 0, ${
    validWidth - validHeightSVG / 1.25 + r
  } ${validHeightSVG - r}
                 V${15 + r}
                 A ${r} ${r}, 0, 0 1, ${
    validWidth - validHeightSVG / 1.25 + r * 2
  } 15
                 H${validWidth}`;

  return (
    <motion.div
      initial="initial"
      animate="moved"
      variants={moveLeft}
      className={styles.container}
    >
      <div className={styles.scene}>
        <h2>
          Pedal <br /> Lleuger
        </h2>
        <SVGMotion
          path={path}
          delay={0}
          start={first}
          end={1}
          extraPath={pathWhite1}
          heightSVG={heightSVG}
        />
        <BikeMotion />
      </div>
      <div className={styles.scene}>
        <section>
          <p>
            Gaudeix de les teves rutes <br /> en bici sense cap càrrega.
          </p>
        </section>
        <SVGMotion path={path2} delay={time / 6 - 1 / 3} start={0} end={0} />
      </div>
      <div className={styles.scene}>
        <section>
          <p>
            Pedala i gaudeix del viatge
            <br /> mentre nosaltres et portem <br />
            les maletes!
          </p>
        </section>
        <SVGMotion
          path={path3}
          delay={time / 2 - 1 / 3}
          start={0}
          end={0}
          extraPath={pathWhite2}
        />
      </div>
      <div className={styles.scene}>
        <SVGMotion
          path={path}
          delay={(5 / 6) * time - 1 / 3}
          start={0}
          end={0}
          extraPath={pathWhite1}
        />
        <h2>
          Pedal <br /> Lleuger
        </h2>
      </div>
    </motion.div>
  );
}
