import React from "react";
import { motion } from "framer-motion";

export default function Modal({ text, callback }) {
  return (
    <motion.div
      className="fixed bg-black/50 w-full h-full top-0 grid items-center justify-items-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ type: "spring", stiffness: 500, damping: 30 }}
    >
      <motion.div
        className=" bg-slate-200 rounded-2xl flex flex-col items-center gap-10 overflow-hidden relative"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0, opacity: 0 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      >
        <p className="text-center text-2xl text-[#312f2f] font-medium px-10 mt-10">
          {text.title}
        </p>
        <p className="text-center text-xl text-[#312f2f] font-medium px-10">
          {text.text}
        </p>
        <button
          className="w-40 border-none bg-[#FF6262] rounded-xl px-5 py-2 font-semibold text-[#312f2f] uppercase cursor-pointer hover:bg-[#ff7e7e] mb-10"
          onClick={() => callback()}
        >
          OK
        </button>
      </motion.div>
    </motion.div>
  );
}
