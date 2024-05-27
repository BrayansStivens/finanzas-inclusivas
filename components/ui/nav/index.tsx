"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function Nav() {
  const pathname = usePathname();
  const router = useRouter();
  const [showAuthButton, setShowAuthButton] = useState<boolean>(false);

  const handleAuth = () => {
    router.push("/auth");
  };

  useEffect(() => {
    if (pathname === "/") setShowAuthButton(true);
    else setShowAuthButton(false);
  }, [pathname]);
  return (
    <>
      <header className="bg-[#2a63b1] h-[40px] w-full"></header>
      <nav>
        <div
          className={`pt-5 pb-3 px-5 flex items-center ${
            showAuthButton ? "justify-between" : "justify-center"
          }`}
        >
          <div
            className={`hidden md:block ${
              showAuthButton ? "w-6/12" : "w-full"
            }`}
          >
            <Image
              src="/assets/logo/fina_mujer_logo.png"
              alt="logo fina mujer"
              width={250}
              height={75}
              priority
              className="w-auto h-auto"
            />
          </div>
          <div
            className={`block md:hidden ${
              showAuthButton ? "w-6/12" : "w-full"
            }`}
          >
            <Image
              src="/assets/logo/icon.svg"
              alt="icono para móviles"
              width={65}
              height={50}
              priority
              className="w-auto h-auto"
            />
          </div>
          {showAuthButton && (
            <button
              className="bg-transparent border-4 border-[#102e6a] w-6/12 lg:w-3/12  p-1 cursor-pointer"
              onClick={handleAuth}
            >
              <p className="w-full bg-[#102e6a] py-2 font-semibold text-[#fff] text-base md:text-lg caret-transparent">
                Seleccionar Sector
              </p>
            </button>
          )}
        </div>
      </nav>
    </>
  );
}

export default Nav;
