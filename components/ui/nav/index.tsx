"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { AiOutlineMenu } from "react-icons/ai";
import { useMenuState } from "./hooks/useMenuState";
import AuthButton from "./components/AuthButton";
import HomeButton from "./components/HomeButton";
import MobileMenu from "./components/MobileMenu";

const Nav: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [showAuthButton, setShowAuthButton] = useState(false);
  const [menuOpen, toggleMenu, setMenuOpen] = useMenuState();

  useEffect(() => {
    setShowAuthButton(pathname === "/");
  }, [pathname]);

  const handleAuth = () => {
    setMenuOpen(false);
    router.push("/auth");
  };

  const handleHome = () => {
    setMenuOpen(false);
    router.push("/home");
  };

  return (
    <>
      <header className="bg-[#2a63b1] h-[40px] w-full" />
      <nav className="border-b p-4">
        <div
          className={`mx-auto flex items-center ${showAuthButton ? "justify-between" : "justify-center"
            } md:justify-between`}
        >
          <div className="flex items-center w-full md:w-4/12">
            <div className="hidden md:block">
              <Image
                src="/assets/logo/fina_mujer_logo.png"
                alt="logo fina mujer"
                width={150}
                height={50}
                priority
                className="w-auto h-auto"
              />
            </div>
            <div className="block md:hidden">
              <Image
                src="/assets/logo/icon.svg"
                alt="icono para móviles"
                width={50}
                height={50}
                priority
                className="w-auto h-auto"
              />
            </div>
          </div>
          {showAuthButton && (
            <>
              <div className="hidden md:flex w-full md:w-8/12 gap-5 justify-end items-center">
                <AuthButton onClick={handleAuth} />
                {/* <HomeButton onClick={handleHome} /> */}
              </div>
              <div className="md:hidden">
                <button onClick={toggleMenu} className="focus:outline-none">
                  <AiOutlineMenu className="w-6 h-6" />
                </button>
              </div>
            </>
          )}
        </div>
        <MobileMenu
          menuOpen={menuOpen}
          toggleMenu={toggleMenu}
          showAuthButton={showAuthButton}
          handleAuth={handleAuth}
          handleHome={handleHome}
        />
      </nav>
    </>
  );
};

export default Nav;
