"use client";
import Product from "./Product";
import Title from "./Title";
import img1 from "@/public/Images/11.jpg";
import img2 from "@/public/Images/12.jpg";
import img3 from "@/public/Images/13.jpg";
import img4 from "@/public/Images/14.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

function NewArrival() {
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);
  const horizontalRef = useRef(null);

  useEffect(() => {
    const pin = gsap.fromTo(
      ref.current,
      {
        y: 0,
      },
      {
        y: "-100%",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: horizontalRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
          pin: true,
        },
      }
    );

    return () => {
      pin.kill();
    };
  }, []);

  return (
    <section
      className="min-h-screen w-screen flex items-center justify-center relative "
      style={{
        margin: "0 auto",
      }}
      ref={horizontalRef}
      id="new-arrival"
    >
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] md:w-[30vw] h-[90vh] z-20"
        style={{
          boxShadow: "0 0 0 5vw white",
          border: "3px solid #202020",
        }}
      ></div>
      <Title />
      <div
        ref={ref}
        className="absolute top-0 left-1/2 -translate-x-1/2 translate-y-0 w-[55vw] md:w-[25vw] h-auto flex flex-col justify-center items-center"
      >
        <Product img={img1} title="Diagnóstico Geopolítico y Macroeconómico del Sector" />
        <Product img={img2} title="Diagnóstico Empresarial para PYMES" />
        <Product img={img3} title="PDF: Información Estratégica Básica" />
        <Product img={img4} title="PDF: Conociendo la Incertidumbre del Mercado" />
      </div>
      <div className="hidden md:absolute md:top-0 md:right-0 md:w-[20%] text-lg font-light p-8 z-11 text-primary">
        Descubre el poder de la previsión estratégica con nuestras herramientas de diagnóstico gratuitas. Ofrecemos un análisis detallado del panorama global y del sector, proporcionando perspectivas sobre la economía, riesgos regulatorios y escenarios geopolíticos. Además, te brindamos materiales esenciales como diagnósticos para PYMES y documentos PDF sobre cómo enfrentar la incertidumbre del mercado. Prepárate para transformar tu estrategia empresarial y sobresalir en mercados dinámicos e inciertos.
      </div>
    </section>
  );
}

export default NewArrival;
