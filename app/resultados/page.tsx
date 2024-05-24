import React from "react";
import ResultSectionText from "./components/ResultSectionText";
import ResultSectionBi from "./components/ResultSectionBi";
import Breadcrumb from "@/components/ui/Breadcrumb";


const ResearchResult: React.FC = () => {
    return (
        <>
            <Breadcrumb title="Resultados" />
            <main>
                <article id="resultados" className="flex flex-col gap-5">
                    <ResultSectionBi />
                    <ResultSectionText />
                </article>
            </main>
        </>
    );
}



export default ResearchResult;