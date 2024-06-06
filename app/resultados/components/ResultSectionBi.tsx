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
          investigación tanto cuantitativo como cualitativo que fue desarrollado
          de la siguiente manera:
        </p>

        <ul className="text-justify my-3 mx-2 list-disc list-inside">
          <li className="pl-3">
            <strong>Investigación cuantitativa:</strong> fueron encuestadas 4543
            mujeres rurales, afrocolombianas, indígenas, víctimas directas del
            conflicto armado y emprendedoras, residentes en 20 municipios de
            Antioquia y 3 de Caldas con el fin de identificar sus necesidades,
            preferencias, barreras y expectativas en cuanto a educación
            financiera.
          </li>
          <li className="pl-3">
            <strong>Investigación cualitativa:</strong> se aplicó una entrevista
            semiestructurada a los Referentes de educación financiera, género,
            diversidad e inclusión de siete (7) entidades del ecosistema
            financiero en Colombia que cuentan con programas de educación
            financiera con enfoque de género en diferentes fases de desarrollo.
            El propósito de estas entrevistas, fue identificar buenas prácticas
            para la entrega de programas de educación financiera con enfoque de
            género aplicadas y validadas por estas entidades e incorporar el
            punto de vista de los prestadores de servicios financieros al
            proceso tanto de diseño como de desarrollo de esta herramienta.
          </li>
        </ul>

        <p className="text-justify my-3 mx-2">
          En este módulo, se presentan los resultados de la investigación
          cuantitativa mediante un tablero de POWER BI en el que usted podrá
          filtrar los datos según su interés y/o necesidad y se presentan
          también los resultados de la investigación cualitativa, mediante un
          consolidado de buenas prácticas para el diseño y entrega de programas
          de educación financiera con enfoque de género aportadas por las siete
          (7) entidades que participaron en esa parte del proceso de
          investigación.
        </p>
      </div>
      <div className=" flex flex-col gap-5 md:gap-12 items-center md:items-end mt-4 px-5">
        <div className="w-full md:w-3/12">
          {" "}
          <button
            className="bg-transparent border-4 border-[#102e6a] w-full p-1 cursor-pointer "
            onClick={handleFocus}
          >
            <p className="w-full bg-[#102e6a] py-2 font-semibold text-[#fff] text-base md:text-lg caret-transparent">
              Buenas prácticas
            </p>
          </button>
        </div>
        <div className="w-full">
          <IframePowerBi source={powerBiSource} />
        </div>
      </div>
    </section>
  );
};

export default ResultSectionBi;
