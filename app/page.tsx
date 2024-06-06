"use client";

import { clearStorage } from "@/utils/handles/handleStorage";
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    return clearStorage();
  }, []);
  return (
    <>
      <main className="flex flex-col justify-center px-4 py-5">
        <section
          id="identificate"
          className="hidden md:block bg-[url('/assets/images/home_page.webp')] bg-cover w-full h-[740px]"
          style={{ backgroundPositionY: "10%" }}
        ></section>
        <div className="flex gap-2 flex-col md:hidden w-full h-auto relative">
          <Image
            src="/assets/images/home_page.webp"
            alt="Imagen para móviles"
            width={1241}
            height={598}
            style={{ objectFit: "cover", objectPosition: "center" }}
            priority
          />
        </div>
        <section id="content" className="mt-5">
          <h5 className="text-lg md:text-xl italic font-semibold">
            Le damos la bienvenida a la herramienta digital de código abierto
            FINANZAS PARA TODAS desarrollada por la Universidad Pontificia
            Bolivariana y Microempresas de Colombia con el apoyo de USAID con el
            fin de proporcionar una guía práctica a entidades del ecosistema
            financiero como Bancos, Cooperativas, Fintechs, ONG’s
            microcrediticias (entre otras) en Colombia a la hora de diseñar y
            entregar programas de educación financiera con enfoque de género y/o
            diferencial a mujeres rurales, afrocolombianas, indígenas, víctimas
            del conflicto armado y emprendedoras. Esta herramienta se basa en un
            proceso de investigación tanto cuantitativo como cualitativo y en la
            aplicación de marcos de referencia nacionales e internacionales para
            la entrega efectiva de este tipo de programas, así que confiamos en
            que este recurso le sea de gran utilidad.
          </h5>
          <br />
          <p className="text-xl md:text-xl italic font-medium">
            Este sitio web es posible gracias al apoyo del pueblo estadounidense
            a través de la Agencia de los Estados Unidos para el desarrollo
            Internacional (USAID). El contenido de este sitio es responsabilidad
            exclusiva de Universidad Pontifica Bolivariana y Microempresas de
            Colombia y no refleja necesariamente las opiniones de USAID o del
            gobierno de los Estados Unidos.
          </p>
        </section>
      </main>
    </>
  );
}
