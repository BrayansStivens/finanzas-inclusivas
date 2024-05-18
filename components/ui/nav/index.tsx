"use client";

import Image from "next/image";

function Nav() {
  return (
    <>
      <header className="bg-[#2a63b1] h-[61px] w-full"></header>
      <nav>
        <div className="py-7 px-5">
          <Image
            src="/assets/logo/fina_mujer_logo.png"
            alt="logo fina mujer"
            width={250}
            height={75}
          />
        </div>
      </nav>
    </>
  );
}

export default Nav;
