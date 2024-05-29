import IframePowerBi from "@/components/ui/IframePowerBi";
import PageTitle from "@/components/ui/PageTitle";
import React from "react";

const ResultSectionBi: React.FC = () => {
    const powerBiSource = "https://app.powerbi.com/view?r=eyJrIjoiMzQxNGRlNzctYjFlOS00MzNiLTk1MjktZjdiM2RkNzdlY2Y3IiwidCI6IjYxOGJhYjBmLTIwYTQtNGRlMy1hMTBjLWUyMGNlZTk2YmIzNSIsImMiOjR9&pageName=ReportSection"


    return (
        <section className="p-[10px]">
            <PageTitle title="Resultados de la investigación en la que se basó la herramienta" />
            <p className="text-justify my-3 mx-2">Como se mencionó anteriormente, esta herramienta se desarrolló mediante un proceso de investigación cuantitativo y cualitativo. Su principal objetivo fue identificar las preferencias, necesidades y barreras de las mujeres en cuanto a la educación financiera, así como las mejores prácticas dentro del ecosistema financiero en Colombia para diseñar e implementar programas con enfoque de género y diferencial.</p>
            <p className="text-justify my-3 mx-2">El proceso de investigación cuantitativo comprendió la realización de una encuesta a 4543 mujeres rurales, afrocolombianas, indígenas, víctimas los conflictos armados y emprendedoras, residentes en 20 municipios de Antioquia y 3 de Caldas. Por otro lado, el proceso de investigación cualitativo implicó la realización de entrevistas semiestructuradas a líderes de Educación Financiera, Género, Diversidad e Inclusión en siete (7) entidades del ecosistema financiero, las cuales cuentan con programas de educación financiera con enfoque de género y/o diferencial en diferentes etapas de desarrollo.</p>
            <p className="text-justify my-3 mx-2">En este módulo, se presentarán los principales resultados de ambos procesos de investigación. Este esfuerzo busca contribuir a la construcción de conocimiento en materia de educación financiera con enfoque de género y diferencial en Colombia, dentro del contexto del ecosistema financiero del país.</p>
            <p className="text-justify my-3 mx-2">En este módulo, presentamos un tablero de POWER BI que cuenta con filtros correspondientes a variables del enfoque interseccional, así como otros aspectos complementarios como conectividad, municipio y tenencia de productos financieros. Estas
                variables fueron investigadas y podrían influir en la manera en que las mujeres reciben y adoptan conocimientos en educación financiera.</p>
            <p className="text-justify my-3 mx-2">La información que encontrará después de seleccionar una o varias opciones de los filtros proviene de la investigación cuantitativa que también sirvió de base para esta herramienta. Le invitamos a explorar y aprovechar al máximo la información disponible aquí.</p>
            <div className="mt-4">
                <IframePowerBi source={powerBiSource} />
            </div>
        </section>
    );
}



export default ResultSectionBi;
