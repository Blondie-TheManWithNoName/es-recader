import { delay, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { LightPedal } from "./components/LighPedal";
import title from "../public/title.svg";
import serveis from "../public/serveis.svg";
import servei10 from "../public/servei10.svg";
import servei14 from "../public/servei14.svg";
import serveiBici from "../public/serveiBici.svg";
import spain from "../public/spain-smooth.svg";
import phone from "../public/phone.svg";
import mail from "../public/mail.svg";
import whatsapp from "../public/whatsapp.svg";
import Image from "next/image";
import guy from "../public/guy-white-circle-2.jpg";
import line from "../public/line-2.svg";
import truck from "../public/truck.svg";
import cavalls from "../public/cavalls.svg";
import maritim from "../public/maritim.svg";
import package2 from "../public/package-open.svg";
import TruckMotion from "./components/TruckMotion";
import Head from "next/head";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
import Modal from "./components/Modal";

export default function App() {
  const form = useRef();
  const [capVal, setCapVal] = useState(null);
  const [modal, setModal] = useState(false);
  const [modalText, setModalText] = useState(null);

  // Function to handle form submission
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("", "", form.current, "") //REPLACE WITH KEYS
      .then(
        () => {
          setModalText({
            title: "Missatge enviat correctament!",
            text: "Espereu una propera resposta al vostre correu",
          });
          console.log("SUCCESS!");
        },
        (error) => {
          setModalText({
            title: "ERROR!",
            text: "Ha sorgit un error, torna a provar!",
          });
          console.log("FAILED...", error.text);
        }
      );
  };

  function callbackModal() {
    setModal(false);
    setModalText(null);
  }

  return (
    <main className="relative w-full">
      <Head>
        <title>es Recader • Paqueteria en Menorca</title>
        <meta
          name="description"
          content="Servicio de envio de maletas, paquetes por la peninsula e islas baleares."
          key="desc"
        />
        {/* Canonical Tag */}
        <link rel="canonical" href="https://www.esrecader.com/" />

        {/* Meta Robots */}
        {/* <meta name="robots" content="index, follow" /> */}

        {/* Open Graph Meta Tags */}
        <meta
          property="og:site_name"
          content="es Recader • Paqueteria en Menorca"
        />
        <meta property="og:title" content="esRecader • Paqueteria en Menorca" />
        <meta
          property="og:description"
          content="Servicio de envio de maletas, paquetes por la peninsula e islas baleares."
        />
        <meta property="og:image" content={title} />
        <meta property="og:url" content="https://www.esrecader.com/" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="" />
        <meta
          name="twitter:title"
          content="es Recader • Paqueteria en Menorca"
        />
        <meta
          name="twitter:description"
          content="Servicio de envio de maletas, paquetes por la peninsula e islas baleares."
        />
        <meta name="twitter:image" content={title} />
        <meta name="twitter:site" content="@EsRecader" />

        {/* Viewport Meta Tag */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Charset Meta Tag */}
        <meta charSet="UTF-8" />

        {/* Language Meta Tag */}
        <meta httpEquiv="Content-Language" content="es" />

        {/* Content Type Meta Tag */}
        <meta http-equiv="Content-Type" content="text/html" />

        {/* Author Meta Tag */}
        <meta name="author" content="es Recader & Co" />
      </Head>

      <header className="grid grid-cols-2 justify-center  justify-items-center mt-28 w-full pl-60 pr-40 relative">
        <h1 className="grid justify-center">
          <Image
            src={title}
            alt="Es Recader - Paqueteria i Missatgeria"
            className="mt-32 scale-125"
          />
        </h1>
        <Image
          src={guy}
          alt="Delivery guy carryng a package"
          className="w-[34rem]"
        />
        <Image
          src={line}
          alt="Line"
          className="w-[60%] left-0 absolute bottom-0 z-20"
          onerror="this.style.display='none';"
        />
        <Image
          src={truck}
          alt="Truck animation"
          className="absolute bottom-16  origin-bottom-left left-[75%] z-10 truck-animation"
        />
        <TruckMotion
          array={Array.from({ length: 7 })}
          delay={0}
          slow={1.5}
          fast={1}
        ></TruckMotion>
      </header>

      <section className="mt-60 grid justify-items-center relative">
        <h2 className="text-vsm leading-snug text-[#312F2F] w-[55%] -ml-10 whitespace-nowrap tracking-tighter">
          Som una empresa menorquina <br /> dedicada al{" "}
          <span className=" font-medium">lliurament</span> i{" "}
          <span className=" font-medium">recollida</span> <br /> de paqueteria i
          missatgeria.
        </h2>
        <Image
          src={package2}
          alt="title"
          className="w-[65%] lg:w-[25%] absolute -rotate-[35deg] right-52 -bottom-[22rem] opacity-70"
          // className="w-[65%] lg:w-[45%] absolute -rotate-[40deg] right-0 -bottom-[27rem] z-10 opacity-20"
        />
      </section>

      <div className="mb-64 flex flex-col items-center mt-[25rem]">
        <h2 className="text-vlg font-extrabold uppercase italic relative z-10 flex flex-col">
          <span className="text-vsm pl-7"> Els nostres</span>
          <span style={{ marginTop: "-3rem" }}>Serveis</span>
        </h2>
        <div className="flex flex-col lg:flex-row w-full justify-center items-center mt-20 lg:mt-40 gap-20 lg:gap-28">
          <p className=" text-vlg lg:text-vsm leading-tight tracking-tight whitespace-nowrap">
            Oferim recollides i <br />
            lliuraments a tota la <br />
            <span className=" font-medium">peninsula</span> i a totes <br />
            les <span className=" font-medium">illes balears</span>
          </p>
          <Image
            src={spain}
            alt="title"
            className="w-[65%] lg:w-[30%] relative"
          />
        </div>
      </div>

      {/* Light Pedal */}
      <LightPedal />

      {/* Services Section */}
      <section className=" flex flex-col items-center mt-52 relative">
        <dl className="grid grid-cols-[5rem_auto] grid-rows-[auto_auto] gap-x-10 pl-24 sm:pr-5 ">
          {/* Bike Service */}
          <Servei
            title="Pedal Lleuger*"
            desc="Transport de maletes per ciclistes"
            img={serveiBici}
          />

          {/* Hike Service */}
          <Servei
            title="Servei camí de cavalls*"
            desc="Transport de maletes entre hotels/estàncies"
            img={cavalls}
          />

          {/* 10h Service */}
          <Servei
            title="Servei 10"
            desc="Entrega de paqueteria l'endemà abans de les 10h"
            img={servei10}
            scale={105}
          />

          {/* 14h Service */}
          <Servei
            title="Servei 14"
            desc="Entrega de paqueteria l'endemà abans de les 14h"
            img={servei14}
            scale={105}
          />

          {/* Sea Service */}
          <Servei
            title="Servei marítim*"
            desc="Entrega entre 2/3 dies laborals"
            img={maritim}
          />

          <p className="col-span-2 ml-8 mt-10">
            * Serveis nomes disponibles a Menorca
          </p>
        </dl>
      </section>

      <footer className="bg-[#312F2F] w-screen lg:h-[85vh] mt-48 relative">
        <div className="h-5 bg-[#FF6262] absolute top-0 w-full"></div>
        <div className="flex flex-col-reverse w-full items-center lg:items-start relative pt-[5vw] lg:flex-row ">
          <div className="flex flex-col items-center  bg-[#312f2f] lg:w-1/2">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="lg:w-[70%] ml-10 pt-[10vw] lg:pt-[2vw]"
            >
              <div className="grid grid-cols-2 gap-x-8">
                <label htmlFor="name" className="text-white">
                  Nom*
                </label>
                <label htmlFor="email" className="text-white">
                  Email*
                </label>
                <input
                  type="text"
                  name="user_name"
                  id="user_name"
                  placeholder="Jon Doe"
                  className="mb-10 rounded-xl px-5 py-2"
                />
                <input
                  type="email"
                  name="user_email"
                  id="user_email"
                  placeholder="hola@email.com"
                  className="mb-10 rounded-xl px-5 py-2"
                />
              </div>

              <label htmlFor="message" className="text-white">
                Missatge*
              </label>
              <textarea
                name="message"
                id="message"
                placeholder="Missatge"
                className="pb-64 h-40 min-h-36 rounded-xl px-5 py-2"
              ></textarea>
              <div className="flex flex-row mt-10 justify-between items-center w-full">
                <ReCAPTCHA
                  onChange={(val) => setCapVal(val)}
                />
                <input
                  disabled={!capVal}
                  type="submit"
                  value="Enviar"
                  className="w-40 border-none bg-[#FF6262] rounded-xl px-5 py-2 font-semibold text-[#312f2f] uppercase cursor-pointer hover:bg-[#ff7e7e]"
                />
              </div>
            </form>
          </div>

          <div className="text-white flex flex-col items-center  bg-[#312f2f] lg:pr-32 w-1/2">
            <h4 className="relative leading-none">
              {" "}
              <span className="text-[11vw] lg:text-[6.25vw] tracking-tighter text-center">
                Contacta'ns <br />
              </span>{" "}
              <span className="text-[6vw] lg:text-[3.5vw] tracking-tighter absolute top-18 w-full text-center">
                i demana pressupost!
              </span>
            </h4>
            <div className="grid grid-cols-[6vw_18vw_auto] lg:grid-cols-[5vw_12vw_auto] items-center justify-center w-full mt-[15vw] lg:mt-[7.5vw] gap-y-[2rem] lg:gap-y-[2vw] gap-x-[4vw] lg:gap-x-[0vw]">
              <Image src={phone} alt="phone" className="w-[5vw] lg:w-[3vw]" />
              <p className="text-[3vw] lg:text-[1.5vw] font-bold">Telefon</p>
              <p className="text-[3vw] lg:text-[1.5vw] whitespace-nowrap">
                612 22 57 36
              </p>

              <Image src={mail} alt="e-mail" className="w-[5vw] lg:w-[3vw]" />
              <p className="text-[3vw] lg:text-[1.5vw] font-bold">Correu</p>
              <p className="text-[3vw] lg:text-[1.5vw] whitespace-nowrap">
                info@esrecader.com
              </p>

              <Image
                src={whatsapp}
                alt="Whatsapp"
                className="w-[5vw] lg:w-[3vw]"
              />
              <p className="text-[3vw] lg:text-[1.5vw] font-bold">WhatsApp</p>
              <p className="text-[3vw] lg:text-[1.5vw] whitespace-nowrap">
                612 22 57 36
              </p>
            </div>
          </div>
        </div>
      </footer>
      {modalText ? (
        <Modal callback={callbackModal} text={modalText}></Modal>
      ) : null}
    </main>
  );
}

function Servei({ img, title, desc, scale = 100 }) {
  return (
    <>
      <Image
        src={img}
        alt={`${title} Image`}
        className={`row-span-2 scale-${scale} mt-10`}
      />
      <dt className="text-4xl font-bold tracking-tighter mt-10">{title}</dt>
      <dd className="text-3xl h-8">{desc}</dd>
    </>
  );
}
