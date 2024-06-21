"use client";
import { useRouter } from "next/navigation";
import SectorCard from "@/components/ui/sectorCard";
import React, { useState, useEffect } from "react";
import { clearStorage } from "@/utils/handles/handleStorage";

const AuthSectorCard: React.FC<{
  financial: string[];
  otherEntities: [];
  solidarity: string[];
}> = ({ financial, otherEntities, solidarity }) => {
  const handleHome = () => {
    router.push("/home");
  };

  const [isOpen, setIsOpen] = useState({
    financial: false,
    solidarity: false,
    otherEntities: false,
  });
  const router = useRouter();

  function handleSelectSector(sector: string, itemName: string) {
    const dataUser = {
      fecha_consulta: new Date().getTime(),
      sector,
      entidad: itemName,
      fecha_descarga_perfil: null,
      perfil_descargado: null,
    };
    localStorage.setItem("data", JSON.stringify(dataUser));
    router.push(`home`);
  }

  const toggleOpen = (key: keyof typeof isOpen) => {
    setIsOpen((prevState) => {
      const newState = Object.keys(prevState).reduce((acc, currKey) => {
        acc[currKey as keyof typeof isOpen] =
          currKey === key ? !prevState[currKey as keyof typeof isOpen] : false;
        return acc;
      }, {} as { [K in keyof typeof prevState]: boolean });

      return newState;
    });
  };

  useEffect(() => {
    clearStorage();
  }, [window]);

  return (
    <>
       <h3 className="bg-[#2B6595] text-lg mt-[0] mx-[20px] mb-[30px] text-left text-[#000] font-bold p-5 text-justify">
        Les invitamos a que nos indique a cuál de las siguientes entidades
        representa mediante la selección de alguna de las opciones que
        encontrará en las listas desplegables que se presentan a continuación,
        para así poder determinar el nivel de acogida de esta herramienta dentro
        de las diferentes entidades del ecosistema financiero y las necesidades
        de ajustes posteriores para satisfacer mejor las necesidades de cada
        entidad; sin embargo sí lo prefiere puede{" "}
        <span
          onClick={handleHome}
          className="cursor-pointer underline text-[#FFD700] hover:text-[#FFA500]"
        >
          omitir
        </span>{" "}
        este paso y acceder directamente a los módulos de la herramienta.
      </h3>
      <div className="flex flex-wrap mt-[0] mx-[20px] mb-[50px] justify-center gap-[30px]">
        <SectorCard
          imageSrc="/assets/images/financial_sector.jpg"
          sectorName="Sector Financiero"
          toggleOpen={() => toggleOpen("financial")}
          isOpen={isOpen.financial}
          items={financial}
          handleSelect={handleSelectSector}
        />
        <SectorCard
          imageSrc="/assets/images/solidarity_sector.jpg"
          sectorName="Sector Solidario"
          isOpen={isOpen.solidarity}
          toggleOpen={() => toggleOpen("solidarity")}
          items={otherEntities}
          handleSelect={handleSelectSector}
        />
        <SectorCard
          imageSrc="/assets/images/other_entities.webp"
          sectorName="Otras Entidades"
          isOpen={isOpen.otherEntities}
          toggleOpen={() => toggleOpen("otherEntities")}
          items={solidarity}
          handleSelect={handleSelectSector}
        />
      </div>
    </>
  );
};

export default AuthSectorCard;
