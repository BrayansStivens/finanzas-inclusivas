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
        `Este sitio web es posible gracias al apoyo del pueblo estadounidense a través de la 
        Agencia de los Estados Unidos para el Desarrollo Internacional (USAID). El contenido de este sitio es 
        responsabilidad exclusiva de Universidad Pontifica Bolivariana y Microempresas de Colombia y no refleja 
        necesariamente las opiniones de USAID o del gobierno de los Estados Unidos.`
      );
    } else if (pathname === "/auth") {
      setShowFooter(false);
    } else {
      setShowFooter(true);
      setFooterText(
      "Para comentarios y sugerencias sobre el funcionamiento de esta herramienta, lo invitamos a escribir a finanzasparatodas@upb.edu.co."
      );
    }
  }, [pathname]);

  if (!showFooter) return null;

  return (
    <footer className="bg-[#102E6A] text-[white] p-[20px] text-center mt-auto">
      <div className="mt-[20px] justify-center max-w-[1300px] mx-[auto]">
        <p className="m-0 text-[18px] text-left m-5 text-[15px]">
          {footerText}
        </p>
        <hr className="border-[0] h-px bg-[#cacaca] mt-[0] mb-[10px]" />
      </div>
    </footer>
  );
};

export default Footer;
