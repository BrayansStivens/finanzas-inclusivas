import Breadcrumb from "@/components/ui/Breadcrumb";
import PageTitle from "@/components/ui/PageTitle";
import { Perfil } from "@/app/api/perfiles/route";
import PerfilesTable from "./components/PerfilesTable";
import TableTopics, { Topics } from "../../components/ui/TableTopics";
import ModuleButton from "@/components/ui/ModuleButton";

async function getPerfiles(): Promise<Perfil[]> {
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
  const response = await fetch(`${API_BASE_URL}/api/perfiles`, {
    cache: "no-store",
  });
  const data = await response.json();
  return data;
}

async function getTablesContent(): Promise<Topics[]> {
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
  const response = await fetch(`${API_BASE_URL}/api/table-topics`, {
    cache: "no-store",
  });
  const data = await response.json();
  return data;
}

async function Guia() {
  const perfiles: Perfil[] = await getPerfiles();
  const tables: Topics[] = await getTablesContent();

  const dataBtn = [
    {
      text: "Ir al módulo Anterior",
      href: "/perfilamiento",
      position: "perfilamiento",
    },
    {
      text: "Ir al siguiente módulo",
      href: "/evaluacion",
      position: "end",
    },
  ];

  return (
    <>
      <Breadcrumb title="Guía" />
      <ModuleButton dataBtn={dataBtn} />
      <main className="flex justify-center px-4 py-5">
        <article id="guia" className="flex flex-col gap-5 w-full">
          <PageTitle title={"Guía de formación"} />
          <section id="content" className="w-full flex flex-col gap-10">
            <div className="w-full">
              <p className="w-full text-justify font-medium text-lg md:text-xl mb-3">
                En este módulo usted podrá descargar la ruta de formación
                sugerida para el perfil que seleccionó en el módulo anterior, la
                cual incluye la siguiente información: temas o contenidos
                sugeridos a abordar en el programa de educación financiera,
                modalidades más adecuadas para la entrega de dicho programa,
                propuesta de materiales a desarrollar y estrategias pedagógicas
                específicas para cada perfil seleccionado previamente.
              </p>
              <p className="w-full text-justify font-medium text-lg md:text-xl mb-3">
                Es importante destacar que estas recomendaciones se elaboraron
                considerando los resultados del proceso de investigación de
                corte mixto, los lineamientos dados por Banca de las
                Oportunidades en el documento{" "}
                <strong>
                  “Contenidos mínimos para programas de educación económica y
                  financiera no formal en Colombia 2022”
                </strong>
                y otros marcos de referencia relevantes a nivel nacional e
                internacional.
              </p>
            </div>
            <div className="flex justify-center items-center">
              <div className="w-full md:w-6/12">
                <PerfilesTable perfiles={perfiles} />
              </div>
            </div>
          </section>
        </article>
      </main>
    </>
  );
}

export default Guia;
