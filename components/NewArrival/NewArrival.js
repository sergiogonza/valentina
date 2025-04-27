"use client";
import Product from "./Product";
import Title from "./Title";
import img1 from "@/public/Images/11.webp";
import img2 from "@/public/Images/12.webp";
import img3 from "@/public/Images/13.webp";
import img4 from "@/public/Images/14.webp";
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
        <Product img={img1} title="Expansión Empresarial" />
        <Product img={img2} title="Prevención de Riesgos Regulatorios" />
        <Product img={img3} title="Alianzas Estratégicas" />
        <Product img={img4} title="Mapeo de Escenarios" />
      </div>
      <div className="hidden md:absolute md:top-0 md:right-0 md:w-[20%] text-lg font-light p-8 z-11 text-primary">
        Descubre el poder de la previsión estratégica con nuestras estrategias
        personalizadas. Diseñadas para ayudar a las empresas a adaptarse y
        sobresalir en mercados globales inciertos, nuestros métodos combinan
        inteligencia regulatoria con perspectivas económicas. Desde el análisis
        de políticas hasta la gestión de riesgos geopolíticos, cada estrategia
        refleja un pensamiento proactivo. Eleva tu negocio con nuestra
        experiencia: una fusión de innovación y aplicaciones reales.
      </div>
    </section>
  );
}

export default NewArrival;
