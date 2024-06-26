import React from "react";
import ResultSectionText from "./components/ResultSectionText";
import ResultSectionBi from "./components/ResultSectionBi";
import Breadcrumb from "@/components/ui/Breadcrumb";
import ModuleButton from "@/components/ui/ModuleButton";

async function getResultTopics() {
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
  const response = await fetch(`${API_BASE_URL}/api/result-topics`, {
    cache: "no-store",
  });
  const data = await response.json();
  return data;
}

const ResearchResult: React.FC = async () => {
  const dataBtn = [
    {
      text: "Ir al módulo Anterior",
      href: "/enfoque",
      position: "end",
    },
    {
      text: "Ir al siguiente módulo",
      href: "/perfilamiento",
      position: "end",
    },
  ];
  const topics = await getResultTopics();
  return (
    <>
      <Breadcrumb title="Resultados" />
      <ModuleButton dataBtn={dataBtn} />
      <main>
        <article id="resultados" className="flex flex-col gap-5">
          <ResultSectionBi />
          <ResultSectionText data={topics} />
        </article>
      </main>
    </>
  );
};

export default ResearchResult;
