"use client";
import IframePowerBi from "@/components/ui/IframePowerBi";
import PageTitle from "@/components/ui/PageTitle";
import { useRouter } from "next/navigation";
import React from "react";

const ResultSectionBi: React.FC = () => {
  const router = useRouter();
  const powerBiSource =
    "https://app.powerbi.com/view?r=eyJrIjoiMzQxNGRlNzctYjFlOS00MzNiLTk1MjktZjdiM2RkNzdlY2Y3IiwidCI6IjYxOGJhYjBmLTIwYTQtNGRlMy1hMTBjLWUyMGNlZTk2YmIzNSIsImMiOjR9&pageName=ReportSection";
  const handleFocus = () => {
    router.push("/resultados/#buenas_practicas");
  };
  return (
    <section className="p-[10px]">
      <PageTitle title="Resultados de la investigación en la que se basó la herramienta" />
      <div className="px-2">
        <p className="text-justify my-3 mx-2">
          Esta herramienta se basa en los resultados de un proceso de
          investigación de corte mixto que fue desarrollado de la siguiente
          manera:
        </p>

        <ul className="text-left my-3 mx-2 list-disc list-inside">
          <li className="pl-3">
            <strong>Investigación cuantitativa:</strong> fueron encuestadas 4543
            mujeres rurales, afrocolombianas, indígenas, víctimas directas del
            conflicto armado y emprendedoras, residentes en 20 municipios de
            Antioquia y 3 de Caldas con el fin de identificar sus necesidades,
            preferencias, barreras y expectativas en cuanto a educación
            financiera.
          </li>
        </ul>

        <p className="text-left my-3 mx-2">
          Los resultados de este parte del proceso de investigación, se
          presentan a continuación mediante un tablero de POWER BI en el que
          usted podrá filtrar los datos según su interés o necesidad.
        </p>
      </div>
      <div className=" flex flex-col gap-5 md:gap-12 items-center md:items-end mt-4 px-5">
        <div className="w-full">
          <IframePowerBi source={powerBiSource} />
        </div>
      </div>
    </section>
  );
};

export default ResultSectionBi;
