"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Footer: React.FC = () => {
  const pathname = usePathname();
  const [showFooter, setShowFooter] = useState(true);
  const [footerText, setFooterText] = useState("");

  useEffect(() => {
    if (pathname === "/") {
      setShowFooter(true);
      setFooterText(
        `Para empezar, le invitamos a que nos indique a cuál de las siguientes entidades representa
        mediante la selección de alguna de las opciones que encontrará en las listas desplegables que se
        presentan a continuación; sin embargo, sí lo prefiere puede omitir este paso y acceder
        directamente a los módulos de la herramienta ingresando al siguiente link.`
      );
    } else if (pathname === "/auth") {
      setShowFooter(false);
    } else {
      setShowFooter(true);
      setFooterText(
        "Para comentarios y sugerencias escribir al correo finanzasparatodas@upb.edu.co"
      );
    }
  }, [pathname]);

  if (!showFooter) return null;

  return (
    <footer className="bg-[#102E6A] text-[white] p-[20px] text-center mt-auto">
      <div className="mt-[20px] justify-center max-w-[1300px] mx-[auto]">
        <p className="m-0 text-[18px] text-left m-5 text-[15px]">
          {footerText.includes("ingresando al siguiente link") ? (
            <span className="text-[14px]">
              {footerText.split("ingresando al siguiente link")[0]}
              <Link href="/home" className="underline ">
                ingresando al siguiente link
              </Link>
              {footerText.split("ingresando al siguiente link")[1]}
            </span>
          ) : (
            footerText
          )}
        </p>
        <hr className="border-[0] h-px bg-[#cacaca] mt-[0] mb-[10px]" />
      </div>
    </footer>
  );
};

export default Footer;
