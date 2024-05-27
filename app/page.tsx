"use client";

import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="px-4 py-5">
        <section
          id="identificate"
          className="hidden md:block bg-[url('/assets/images/home_page.webp')] bg-cover bg-botton w-full h-[598px]"
        >
          <div className="flex justify-end px-16">
            <button className="bg-transparent border-4 border-white w-full lg:w-3/12 md:w-5/12 h-auto mt-24 p-1 cursor-pointer">
              <p className="w-full bg-white py-2 font-semibold text-[#102e6a] text-2xl caret-transparent">
                Identifícate
              </p>
            </button>
          </div>
        </section>
        <div className="flex gap-2 flex-col md:hidden w-full h-auto relative">
          <button className="bg-transparent border-4 border-[#102e6a] w-full h-auto p-1 cursor-pointer">
            <p className="w-full bg-[#102e6a] py-1 font-semibold text-white text-lg caret-transparent">
              Identifícate
            </p>
          </button>
          <Image
            src="/assets/images/home_page.webp"
            alt="Imagen para móviles"
            width={1241}
            height={598}
            style={{ objectFit: "cover", objectPosition: "center" }}
            priority
          />
        </div>
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
    </>
  );
}
