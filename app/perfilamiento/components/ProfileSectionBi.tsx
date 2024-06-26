import IframePowerBi from "@/components/ui/IframePowerBi";
import PageTitle from "@/components/ui/PageTitle";
import React from "react";

const ResultSectionBi: React.FC = () => {
  const powerBiSource =
    "https://app.powerbi.com/view?r=eyJrIjoiNDc3MGY0NDAtZjM2MS00M2M0LWIxNzQtMzFjMDk0YTIyZDYzIiwidCI6IjYxOGJhYjBmLTIwYTQtNGRlMy1hMTBjLWUyMGNlZTk2YmIzNSIsImMiOjR9&pageName=ReportSection3061a85774e8c0cd28e9";
  return (
    <section className="p-[10px]">
      <section className="mb-4">
        <PageTitle title="Perfiles de mujeres potenciales beneficiarias de educación financiera" />

        <div className="text-justify mt-0 mx-[10px] mt-[10px] mb-[0] gap-x-[25px] not-italic font-medium leading-[26px] text-justify">
          <p className="mb-5">
            En este módulo, se presenta un tablero de POWER BI con filtros
            correspondientes a variables del enfoque interseccional, ya que esta
            herramienta se basa en dicho enfoque. Al seleccionar uno o varios de
            estos filtros, la herramienta sugerirá aquel perfil que mejor
            represente las condiciones sociales y económicas del segmento de la
            población femenina que se desea atender con su programa de educación
            financiera. Sí lo prefiere, puede omitir el uso de los filtros y
            dirigirse directamente a la lista de perfiles disponibles para que
            así pueda seleccionar aquel que mejor se adapte a las condiciones
            socioeconómicas de las mujeres que usted quiere atender con su
            programa de educación financiera.
          </p>
          <p className="mb-5">
            Es importante resaltar que la información que se visualizará después
            de utilizar los filtros o seleccionar un perfil dentro de la lista
            disponible proviene de la investigación cuantitativa; es decir
            refleja la visión de las mujeres encuestadas durante dicho proceso
            de investigación.
          </p>
        </div>
      </section>

      <IframePowerBi source={powerBiSource} />
    </section>
  );
};

export default ResultSectionBi;
