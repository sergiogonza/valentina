"use client";
import gsap from "gsap";
import Title from "./Title";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import Product from "./Product";
import img1 from "@/public/Images/1.webp";
import img2 from "@/public/Images/2.jpg";
import img3 from "@/public/Images/3.webp";
import img4 from "@/public/Images/4.jpg";
import img5 from "@/public/Images/5.jpg";
import img6 from "@/public/Images/6.jpg";
import img7 from "@/public/Images/7.jpg";
import img8 from "@/public/Images/8.jpg";
import img9 from "@/public/Images/9.jpg";
import img10 from "@/public/Images/10.jpg";

function Shop() {
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);
  const horizontalRef = useRef(null);

  useEffect(() => {
    const pin = gsap.fromTo(
      ref.current,
      {
        translateX: 0,
      },
      {
        translateX: "-300vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: horizontalRef.current,
          start: "top top",
          end: "2000 top",
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
      className="w-full min-h-screen height-auto overflow-hidden flex justify-start items-start relative"
      style={{ margin: "0 auto" }}
      ref={horizontalRef}
      id="shop"
    >
      <Title />
      <div className="w-full md:w-[35%] bg-body text-text min-h-screen z-10 fixed left-0 flex items-center justify-center">
        <p className="text-lg font-light w-[80%]" style={{ margin: "0 auto" }}>
          Descubre el poder de la previsión estratégica con nuestras estrategias
          personalizadas. Diseñadas para ayudar a las empresas a adaptarse y
          sobresalir en mercados globales inciertos, nuestros métodos combinan
          inteligencia regulatoria con perspectivas económicas. Desde el análisis
          de políticas hasta la gestión de riesgos geopolíticos, cada estrategia
          refleja un pensamiento proactivo. Eleva tu negocio con nuestra
          experiencia: una fusión de innovación y aplicaciones reales.
        </p>
      </div>
      <div
        ref={ref}
        className="relative md:left-[35%] z-10 top-0 min-h-screen w-[400vw] bg-grey flex justify-start items-center pl-0 md:pl-[30%] font-semibold"
      >
        <Product title={"Estrategias Personalizadas"} img={img1} />
        <Product title={"Gestión de Riesgos Regulatorios"} img={img2} />
        <Product title={"Inteligencia Regulatoria"} img={img3} />
        <Product title={"Análisis de Políticas"} img={img4} />
        <Product title={"Gestión de Riesgos Geopolíticos"} img={img5} />
        <Product title={"Transformación Estratégica"} img={img6} />
        <Product title={"Innovación y Aplicaciones Reales"} img={img7} />
        <Product title={"Consultoría en Mercados Globales"} img={img8} />
        <Product title={"Adaptación al Cambio Estratégico"} img={img9} />
        <Product title={"Soluciones de Crecimiento Empresarial"} img={img10} />
      </div>
    </section>
  );
}

export default Shop;
