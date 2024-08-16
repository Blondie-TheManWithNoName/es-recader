import React from "react";

export default function Modal({ text, callback }) {
  return (
    <div className="fixed bg-black/50 w-full h-full top-0 grid items-center justify-items-center z-50 ">
      <div className="w-[20vmax] h-[20vmax] bg-slate-200  rounded-2xl flex flex-col items-center gap-10">
        <p className="text-center text-2xl text-[#312f2f] font-medium px-10 mt-[20%]">
          {text.title}
        </p>{" "}
        <p className="text-center text-xl text-[#312f2f] font-medium px-10">
          {text.text}
        </p>
        <button
          className="w-40 border-none bg-[#FF6262] rounded-xl px-5 py-2 font-semibold text-[#312f2f] uppercase cursor-pointer hover:bg-[#ff7e7e]"
          onClick={() => callback()}
        >
          OK
        </button>
      </div>
    </div>
  );
}
