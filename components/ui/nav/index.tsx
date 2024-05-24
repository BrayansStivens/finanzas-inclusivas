"use client";

import Image from "next/image";

function Nav() {
  return (
    <>
      <header className="bg-[#2a63b1] h-[40px] w-full"></header>
      <nav>
        <div className="pt-5 pb-3 px-5 flex items-center md:justify-between justify-center">
          <div className="hidden md:block">
            <Image
              src="/assets/logo/fina_mujer_logo.png"
              alt="logo fina mujer"
              width={250}
              height={75}
              priority
              className="w-auto h-auto"
            />
          </div>
          <div className="block md:hidden">
            <Image
              src="/assets/logo/icon.svg"
              alt="icono para móviles"
              width={65}
              height={50}
              priority
              className="w-auto h-auto"
            />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
