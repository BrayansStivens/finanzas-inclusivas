import React from "react";
import TableTopics, { Topics } from "../../../components/ui/TableTopics/index";

const ResultSectionText: React.FC<{ data: Topics[] }> = ({ data }) => {
  return (
    <section className="p-4" id="buenas_practicas">
      <div className="mt-0 mx-4 mb-0 text-justify leading-relaxed space-y-5">
        <h2 className="bg-[#102E6A] p-[12px] mt-[0] mb-[10px] mt-[30px] text-1xl text-center text-[white] font-bold ">
          Buenas prácticas para el desarrollo de programas de educación
          financiera con enfoque de género
        </h2>
        <div className="divide-y divide-[#102e6a] w-full ">
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
        </div>
      </div>
    </section>
  );
};

export default ResultSectionText;
