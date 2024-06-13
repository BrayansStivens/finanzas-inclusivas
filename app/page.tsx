"use client";

import Footer from "@/components/ui/footer";
import { clearStorage } from "@/utils/handles/handleStorage";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    return clearStorage();
  }, []);

  const content = `Para empezar, le invitamos a que nos indique a cuál de las siguientes entidades representa
mediante la selección de alguna de las opciones que encontrará en las listas desplegables que se
presentan a continuación; sin embargo, sí lo prefiere puede omitir este paso y acceder
directamente a los módulos de la herramienta ingresando al siguiente link.`;
  return (
    <>
      <main className="flex flex-col justify-center px-4 py-5">
        <section
          id="identificate"
          className="w-full h-[600px] bg-[url('/assets/images/home_page.webp')] bg-cover bg-center hidden md:block lg:h-[600px] md:h-[500px] sm:h-[400px]"
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
        <section id="content" className="mt-[25px]">
          <h5 className="text-lg md:text-xl italic">
            Le damos la bienvenida a la herramienta digital de código abierto
            FINANZAS PARA TODAS desarrollada por la Universidad Pontificia
            Bolivariana y Microempresas de Colombia con el apoyo de USAID con el
            fin de proporcionar una guía práctica a entidades del ecosistema
            financiero a la hora de diseñar y entregar programas de educación
            financiera con enfoque de género y/o diferencial a mujeres rurales,
            afrocolombianas, indígenas, víctimas del conflicto armado y
            emprendedoras. Esta herramienta se basa en un proceso de
            investigación de corte mixto y en la aplicación de marcos de
            referencia nacionales e internacionales para la entrega efectiva de
            este tipo de programas, así que confiamos en que este recurso le sea
            de gran utilidad.
          </h5>

          {/* <br />
          <p className="text-xl md:text-xl italic font-medium">
            Para empezar, le invitamos a que nos indique a cuál de las
            siguientes entidades representa mediante la selección de alguna de
            las opciones que encontrará en las listas desplegables que se
            presentan a continuación; sin embargo, sí lo prefiere puede omitir
            este paso y acceder directamente a los módulos de la herramienta
            ingresando{" "}
            <span className="underline">
              <Link href={"/home"}>al siguiente link.</Link>
            </span>
          </p> */}
        </section>
      </main>
    </>
  );
}
