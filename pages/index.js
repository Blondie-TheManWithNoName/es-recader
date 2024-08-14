import { delay, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { LightPedal } from "./components/LighPedal";
import title from "../public/title.svg";
import serveis from "../public/serveis.svg";
import servei10 from "../public/servei10.svg";
import servei14 from "../public/servei14.svg";
import serveiBici from "../public/serveiBici.svg";
import serveiInmediat from "../public/serveiInmediat.svg";
import ship from "../public/ship.svg"
import spain from "../public/spain.svg";
import phone from "../public/phone.svg";
import Image from "next/image";
import mask from "../public/hero.png";
import vector from "../public/vector.svg";
import guy from "../public/guy.jpg";
import line from "../public/line.svg";
import truck from "../public/truck.svg";
import house from "../public/house.svg";
import building from "../public/building.svg";

export default function App() {
  // const size = useWindowSize();

  return (
    <div className="relative">
      <div className="flex flex-col items-center mt-28">
        {/* {size.width}px / {size.height}px */}
        <Image
          src={title}
          alt="title"
          className="scale-125 mt-14 ml-8 absolute"
        />
        <div className="relative">
          <Image src={vector} alt="mask" className="w-screen" />
          <div className="w-screen h-[75vh] bg-[#312F2F] relative flex items-center justify-end">
            <h2 className="text-6xl text-white pr-32">
              Recollida i lliurament <br /> de paquets amb{" "}
              <span className="font-bold text-[#FF6262] italic">
                <br />
                esRecader
              </span>
            </h2>
            <Image
              src={guy}
              alt="mask"
              className="scale-[70%] origin-bottom-left absolute bottom-0 left-24 border-x-[5rem]  border-[#312F2F]"
            />
            <Image
              src={truck}
              alt="mask"
              className=" absolute bottom-6  origin-bottom-left left-[75%] z-10 truck-animation"
            />
            <Image
              src={line}
              alt="mask"
              className="w-screen absolute bottom-0 z-20"
            />
            <Image
              src={house}
              alt="mask"
              className="absolute w-7 h-16 scale-[400%] bottom-10 bg-animation z-0 delay-1000"
            />{" "}
            <Image
              src={house}
              alt="mask"
              className="absolute w-7 h-16 scale-[400%] bottom-10 bg-animation z-0 delay-500"
            />{" "}
            {/* <div className="absolute w-7 h-16 bg-slate-300 bottom-6 bg-animation z-0 delay-75"></div>
            <div
              className="absolute w-7 h-16 bg-slate-300 bottom-6 bg-animation z-0 delay-700
            "
            ></div> */}
          </div>
        </div>
      </div>
      {/* <div className="h-[80vh] w-screen flex justify-center items-center"> */}
      {/* </div> */}
      <div className="mb-64 flex flex-col items-center mt-60">
        <div className="w-screen">
          <div className="relative">
            <h2 className="text-stone-50 text-8xl font-extrabold uppercase italic relative ml-60 z-10">
              Serveis
            </h2>
            <Image src={serveis} alt="title" className="absolute top-0" />
          </div>
        </div>
        <div className="flex flex-row w-9/12 mt-60 gap-28 ml-40">
          <p className="text-6xl tracking-tight ">
            Oferim recollides i <br />
            lliuraments a tota la <br />{" "}
            <span className="font-bold">peninsula</span> i a totes <br />
            les <span className="font-bold">illes balears.</span>
          </p>
          <Image src={spain} alt="title" className="" />
        </div>
      </div>

      <LightPedal />

      <div className=" flex flex-col items-center mt-52 relative">
        <div className="grid grid-cols-[5rem_auto] gap-x-10 gap-y-10 ">
          <Image src={serveiBici} alt="title" />
          <div>
            <h4 className="text-4xl font-bold tracking-tighter">
              Pedal Lleuger
            </h4>
            <p className="text-3xl">Transport de maletes per ciclistes*</p>
          </div>
          <Image src={serveiInmediat} alt="title" />
          <div className="">
            <h4 className="text-4xl font-bold tracking-tighter">Servei camí de cavalls</h4>
            <p className="text-3xl">Transport de maletes entre hotels/estàncies*</p>
          </div>
          <Image src={servei10} alt="title" className="scale-105" />
          <div className="">
            <h4 className="text-4xl font-bold tracking-tighter">Servei 10</h4>
            <p className="text-3xl">Entrega de paqueteria l'endemà abans de les 10h</p>
          </div>
          <Image src={servei14} alt="title" className="scale-105" />
          <div className="">
            <h4 className="text-4xl font-bold tracking-tighter">Servei 14</h4>
            <p className="text-3xl">Entrega de paqueteria l'endemà abans de les 14h</p>
          </div>
          <Image src={ship} alt="title" />
          <div className="">
            <h4 className="text-4xl font-bold tracking-tighter">Servei marítim</h4>
            <p className="text-3xl">Entrega entre 2/3 dies laborals</p>
          </div>
          <p className="col-span-2 ml-8">
            *Serveis nomes disponibles a Menorca
          </p>
        </div>
      </div>

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
