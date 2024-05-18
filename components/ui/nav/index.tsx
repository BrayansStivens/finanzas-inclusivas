"use client";

import Image from "next/image";

function Nav() {
  return (
    <>
      <header className="bg-[#2a63b1] h-[40px] w-full"></header>
      <nav>
        <div className="pt-5 pb-3 px-5 flex items-center md:justify-between justify-center">
          <Image
            className="hidden md:block"
            src="/assets/logo/fina_mujer_logo.svg"
            alt="logo fina mujer"
            width={250}
            height={75}
            priority
          />
          <Image
            className="block md:hidden"
            src="/assets/logo/icon.svg"
            alt="icono para móviles"
            width={65}
            height={50}
            priority
          />
        </div>
      </nav>
    </>
  );
}

export default Nav;
