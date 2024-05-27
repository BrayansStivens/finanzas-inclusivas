"use client";

import Image from "next/image";

export default function Home() {
  return (
    <>
<<<<<<< Updated upstream
      <main className="px-4 py-5">
=======
      <main className="flex flex-col justify-center px-4 py-5">
>>>>>>> Stashed changes
        <section
          id="identificate"
          className="hidden md:block bg-[url('/assets/images/home_page.webp')] bg-cover bg-botton w-full h-[598px]"
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
<<<<<<< Updated upstream
        <div className="my-5">
          <h2 className="font-bold text-lg mb-10">Esta herramienta digital de código abierto, diseñada para ofrecer orientaciones prácticas y sencillas en el diseño y la
            implementación de programas de educación financiera con enfoque de género y/o diferencial, ha sido desarrollada por
            Microempresas de Colombia y la Universidad Pontificia Bolivariana, en colaboración con USAID.
          </h2>
          <p className="text-left">Este sitio web es posible gracias al apoyo del pueblo estadounidense a través de la Agencia de los Estados Unidos para el desarrollo
            Internacional (USAID). El contenido de este sitio es responsabilidad exclusiva de UPB y Microempresas y no refleja necesariamente
            las opiniones de USAID o del gobierno de los Estados Unidos</p>
        </div>
      </main >
=======
        <section id="content" className="mt-5">
          <h5 className="text-lg md:text-xl italic font-semibold">
            El sitio web fue realizado por UPB y Microempresas en asociación con
            USAID.
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
>>>>>>> Stashed changes
    </>
  );
}
