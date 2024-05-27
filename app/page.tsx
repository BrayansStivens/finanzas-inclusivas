"use client";

import Image from "next/image";

export default function Home() {
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
            Esta herramienta digital de código abierto, diseñada para ofrecer
            orientaciones prácticas y sencillas en el diseño y la implementación
            de programas de educación financiera con enfoque de género y/o
            diferencial, ha sido desarrollada por Microempresas de Colombia y la
            Universidad Pontificia Bolivariana, en colaboración con USAID.
          </h5>
          <br />
          <p className="text-xl md:text-2xl italic font-medium">
            Este sitio web es posible gracias al apoyo del pueblo estadounidense
            a través de la Agencia de los Estados Unidos para el desarrollo
            Internacional (USAID). El contenido de este sitio es responsabilidad
            exclusiva de UPB y Microempresas y no refleja necesariamente las
            opiniones de USAID o del gobierno de los Estados Unidos
          </p>
        </section>
      </main>
    </>
  );
}
