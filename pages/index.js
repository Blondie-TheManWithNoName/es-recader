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
      <footer className="bg-[#312F2F] w-screen h-[85vh] mt-48 relative">
        <div className="h-5 bg-[#FF6262] absolute top-0 w-full"></div>
        <div className="grid grid-cols-2 w-full h-full relative pt-24">
          <div className="flex flex-col items-center bg-[#312f2f]">
            <form action="" className="w-[70%] ml-10">
              <label htmlFor="" className="text-white">
                Nom*
              </label>
              <input
                type="text"
                name="name"
                id=""
                placeholder="Jon Doe"
                className="mb-10"
              />
              <label htmlFor="" className="text-white">
                Email*
              </label>
              <input
                type="text"
                name="name"
                id=""
                placeholder="hola@email.com"
                className="mb-10"
              />
              <label htmlFor="" className="text-white">
                Missatge*
              </label>
              <textarea
                type="text"
                name="name"
                id=""
                placeholder="Missatge"
                className="pb-64 h-80 min-h-80"
              ></textarea>
            </form>
          </div>
          <div className="text-white flex flex-col items-center bg-[#312f2f]">
            <h4 className="relative leading-none">
              {" "}
              <span className="text-[6.8rem] tracking-tighter">
                Contacta'ns <br />
              </span>{" "}
              <span className="text-6xl tracking-tighter absolute top-18 w-full">
                i demana pressupost!
              </span>
            </h4>
            <div className="grid grid-cols-[5rem_12rem_auto] items-center w-[50%] mt-36 gap-y-12">
              <Image src={phone} alt="title" />
              <p className="text-3xl font-bold">Telefon</p>
              <p className="text-3xl whitespace-nowrap">612 22 57 36</p>

              <Image src={phone} alt="title" />
              <p className="text-3xl font-bold">Correu</p>
              <p className="text-3xl whitespace-nowrap">612 22 57 36</p>

              <Image src={phone} alt="title" />
              <p className="text-3xl font-bold">WhatsApp</p>
              <p className="text-3xl whitespace-nowrap">612 22 57 36</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
