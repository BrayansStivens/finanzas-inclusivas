import React from "react";
import TableTopics, { Topics } from "../../../components/ui/TableTopics/index";

const ResultSectionText: React.FC<{ data: Topics[] }> = ({ data }) => {
  return (
    <section className="p-4" id="buenas_practicas">
      <p className="text-left my-3 mx-4 list-disc list-inside">
        <strong>Investigación cualitativa:</strong> se aplicó una entrevista
        semiestructurada a los Referentes de educación financiera, género,
        diversidad e inclusión de siete (7) entidades del ecosistema financiero
        en Colombia que cuentan con programas de educación financiera con
        enfoque de género en diferentes fases de desarrollo. El propósito de
        estas entrevistas, fue identificar buenas prácticas para la entrega de
        programas de educación financiera con enfoque de género aplicadas y
        validadas por estas entidades e incorporar el punto de vista de los
        prestadores de servicios financieros al proceso tanto de diseño como de
        desarrollo de esta herramienta.
      </p>
      <p className="text-left my-3 mx-4 list-disc list-inside">
        Los resultados de esta parte del proceso de investigación se presentarán
        a continuación, dentro de un consolidado de buenas prácticas para el
        diseño y entrega de programas de educación financiera con enfoque de
        género y diferencial aportadas por las siete (7) entidades que
        participaron en esa parte del proceso de investigación.
      </p>
      <div className="mt-0 mx-4 mb-0 text-justify leading-relaxed space-y-5">
        <a
          href="https://storage.googleapis.com/images_wp/pdfs/Buenas%20pr%C3%A1cticas.pdf"
          target="_blank"
          rel="no-follow"
        >
          <h2 className="bg-[#102E6A] p-[12px] mt-[0] mb-[10px] mt-[30px] text-1xl text-center text-[white] font-bold cursor-pointer">
            {" "}
            Descargar: “Buenas Prácticas de Educación Financiera con Enfoque de
            Género”
          </h2>
        </a>
        {/* <div className="divide-y divide-[#102e6a] w-full ">
          {data.map(({ id, title, content }: Topics) => (
            <div
              key={id}
              className="flex flex-col justify-center items-center w-full"
            >
              <TableTopics
                id={id}
                title={title}
                bgColor="bg-[#2B6595]"
                content={content}
              />
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default ResultSectionText;
