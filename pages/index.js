import { delay, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { LightPedal } from "./components/LighPedal";
import title from "../public/title.svg";
import serveis from "../public/serveis.svg";
import servei10 from "../public/servei10.svg";
import servei14 from "../public/servei14.svg";
import serveiBici from "../public/serveiBici.svg";
import serveiInmediat from "../public/serveiInmediat.svg";
import ship from "../public/ship.svg";
import spain from "../public/spain-smooth.svg";
import phone from "../public/phone.svg";
import Image from "next/image";
import mask from "../public/hero.png";
import vector from "../public/vector.svg";
import guy from "../public/guy-white-circle-2.jpg";
import line from "../public/line-2.svg";
import truck from "../public/truck.svg";
import cavalls from "../public/cavalls.svg";
import maritim from "../public/maritim.svg";
import building from "../public/building.svg";
import package2 from "../public/package-open.svg";
import TruckMotion from "./components/TruckMotion";

export default function App() {
  // const size = useWindowSize();

  return (
    <div className="relative w-full">
      <div className="grid grid-cols-2 justify-center  justify-items-center mt-28 w-full pl-60 pr-40 relative">
        <div className="grid justify-center">
          <Image src={title} alt="title" className="mt-32 scale-125 " />
        </div>
        <Image src={guy} alt="mask" className="w-[34rem]" />
        <Image
          src={line}
          alt="mask"
          className="w-[60%] left-0 absolute bottom-0 z-20"
        />
        <Image
          src={truck}
          alt="mask"
          className=" absolute bottom-16  origin-bottom-left left-[75%] z-10 truck-animation"
        />
        <TruckMotion
          array={Array.from({ length: 7 })}
          delay={0}
          slow={1.5}
          fast={1}
        ></TruckMotion>
      </div>

      <div className="mt-60 grid justify-items-center relative">
        <h2 className="text-vsm leading-snug text-[#312F2F] w-[55%] -ml-10 whitespace-nowrap tracking-tighter">
          Som una empresa menorquina <br /> dedicada al{" "}
          <span className=" font-medium">lliurament</span> i{" "}
          <span className=" font-medium">recollida</span> <br /> de paqueteria i
          missatgeria.
        </h2>
        <Image
          src={package2}
          alt="title"
          className="w-[65%] md:w-[25%] absolute -rotate-[35deg] right-52 -bottom-[22rem] opacity-70"
          // className="w-[65%] md:w-[45%] absolute -rotate-[40deg] right-0 -bottom-[27rem] z-10 opacity-20"
        />
      </div>
      <div className="mb-64 flex flex-col items-center mt-[25rem]">
        <h2 className="text-vlg font-extrabold uppercase italic relative z-10 flex flex-col">
          <span className="text-vsm pl-7"> Els nostres</span>
          <span style={{ marginTop: "-3rem" }}>Serveis</span>
        </h2>
        <div className="flex flex-col md:flex-row w-full justify-center items-center mt-20 md:mt-40 gap-20 md:gap-28">
          <p className=" text-vlg md:text-vsm leading-tight tracking-tight whitespace-nowrap">
            Oferim recollides i <br />
            lliuraments a tota la <br />
            <span className=" font-medium">peninsula</span> i a totes <br />
            les <span className=" font-medium">illes balears</span>
          </p>
          <Image
            src={spain}
            alt="title"
            className="w-[65%] md:w-[30%] relative"
          />
        </div>
      </div>

      <LightPedal />

      <div className=" flex flex-col items-center mt-52 relative">
        <div className="grid grid-cols-[5rem_auto] gap-x-10 gap-y-10 pl-24 sm:pr-5">
          <Image src={serveiBici} alt="title" />
          <div>
            <h4 className="text-4xl font-bold tracking-tighter">
              Pedal Lleuger
            </h4>
            <p className="text-3xl">Transport de maletes per ciclistes*</p>
          </div>
          <Image src={cavalls} alt="title" />
          <div className="">
            <h4 className="text-4xl font-bold tracking-tighter">
              Servei camí de cavalls
            </h4>
            <p className="text-3xl">
              Transport de maletes entre hotels/estàncies*
            </p>
          </div>
          <Image src={servei10} alt="title" className="scale-105" />
          <div className="">
            <h4 className="text-4xl font-bold tracking-tighter">Servei 10</h4>
            <p className="text-3xl">
              Entrega de paqueteria l'endemà abans de les 10h
            </p>
          </div>
          <Image src={servei14} alt="title" className="scale-105" />
          <div className="">
            <h4 className="text-4xl font-bold tracking-tighter">Servei 14</h4>
            <p className="text-3xl">
              Entrega de paqueteria l'endemà abans de les 14h
            </p>
          </div>
          <Image src={maritim} alt="title" />
          <div className="">
            <h4 className="text-4xl font-bold tracking-tighter">
              Servei marítim
            </h4>
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
