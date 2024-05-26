import IframePowerBi from "@/components/ui/IframePowerBi";
import PageTitle from "@/components/ui/PageTitle";
import React from "react";

const ResultSectionBi: React.FC = () => {
    const powerBiSource = "https://app.powerbi.com/view?r=eyJrIjoiMzQxNGRlNzctYjFlOS00MzNiLTk1MjktZjdiM2RkNzdlY2Y3IiwidCI6IjYxOGJhYjBmLTIwYTQtNGRlMy1hMTBjLWUyMGNlZTk2YmIzNSIsImMiOjR9&pageName=ReportSection"
    return (
        <section className="p-[10px]">
            <PageTitle title="Resultados de la Investigación" />
            <p className="text-left xl:text-center m-2">Desde este tablero de Power BI, usted podrá realizar los cruces de variables que considere y visualizar los resultados de la
                investigación cuantitativa a través de gráficos</p>
            <div className="mt-4">
                <IframePowerBi source={powerBiSource} />
            </div>
        </section>
    );
}



export default ResultSectionBi;
