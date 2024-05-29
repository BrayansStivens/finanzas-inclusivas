import IframePowerBi from "@/components/ui/IframePowerBi";
import PageTitle from "@/components/ui/PageTitle";
import React from "react";

const ResultSectionBi: React.FC = () => {
    const powerBiSource = "https://app.powerbi.com/view?r=eyJrIjoiNDc3MGY0NDAtZjM2MS00M2M0LWIxNzQtMzFjMDk0YTIyZDYzIiwidCI6IjYxOGJhYjBmLTIwYTQtNGRlMy1hMTBjLWUyMGNlZTk2YmIzNSIsImMiOjR9&pageName=ReportSection3061a85774e8c0cd28e9";
    return (
        <section className="p-[10px]">
            <section className="mb-4">
                <PageTitle title="Perfiles de mujeres potenciales beneficiarias de educación financiera" />

                <div className="text-justify mt-0 mx-[10px] mt-[10px] mb-[0] gap-x-[25px] not-italic font-normal leading-[26px] text-justify">
                    <p className="mb-5">
                        En este módulo, se presenta un tablero de POWER BI con filtros correspondientes a variables del enfoque interseccional, el cual sustenta la lógica de funcionamiento de esta herramienta, como se explicó en secciones anteriores. Al seleccionar uno o varios de estos filtros, la herramienta sugerirá el perfil que mejor represente las condiciones sociales, económicas y culturales del segmento de la población femenina que se desea atender con el programa de educación financiera.
                    </p>
                    <p className="mb-5">
                        Sin embargo, si lo prefiere, puede omitir el uso de los filtros y dirigirse directamente a la lista de perfiles, donde podrá seleccionar aquel que considere más pertinente según las características de sus clientas o beneficiarias. Es importante destacar que la información que visualizará después de utilizar los filtros o seleccionar un perfil en la lista proviene de la investigación cuantitativa, es decir, refleja la perspectiva y las experiencias directas de las mujeres encuestadas.
                    </p>
                </div>

            </section>

            <IframePowerBi source={powerBiSource} />

        </section>
    );
}



export default ResultSectionBi;