import IframePowerBi from "@/components/ui/IframePowerBi";
import PageTitle from "@/components/ui/PageTitle";
import React from "react";

const ResultSectionBi: React.FC = () => {
    const powerBiSource = "https://app.powerbi.com/view?r=eyJrIjoiNDc3MGY0NDAtZjM2MS00M2M0LWIxNzQtMzFjMDk0YTIyZDYzIiwidCI6IjYxOGJhYjBmLTIwYTQtNGRlMy1hMTBjLWUyMGNlZTk2YmIzNSIsImMiOjR9&pageName=ReportSection3061a85774e8c0cd28e9";
    return (
        <section className="p-[10px]">
            <section className="mb-4">
                <PageTitle title="Perfiles de mujeres potenciales beneficiarias de educación financiera" />

                <div className="text-left mt-0 mx-[10px] mt-[10px] mb-[0] gap-x-[25px] not-italic font-normal leading-[26px] text-justify">
                    <p>
                        En este tablero, usted podrá seleccionar directamente un perfil que contenga las características de la población a formar, o bien,
                        aplicar filtros para que el sistema le indique un perfil adecuado. El perfil seleccionado le mostrará la ruta de temas, medios y
                        materiales en orden de preferencia, según lo indicado por las mujeres en la investigación cuantitativa

                    </p>
                </div>

            </section>

            <IframePowerBi source={powerBiSource} />

        </section>
    );
}



export default ResultSectionBi;