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
      <h1 className="bg-[#2B6595] p-[25px] mt-[0] mx-[20px] mb-[30px] text-[25px] text-center text-[white] font-bold ">
        Le solicitamos seleccionar el sector al que pertenece y la entidad
        asociada a dicho sector, con el fin de recopilar estadísticas sobre el
        uso de la herramienta. Si lo prefiere, puede omitir este paso y acceder
        directamente a los módulos de la herramienta.
      </h1>
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
