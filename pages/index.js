import { delay, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { BikeComponent } from "./components/BikeComponent";

export default function App() {
  return (
    <>
      <BikeComponent />
      <BikeComponent />
      <BikeComponent />
    </>
  );
}
