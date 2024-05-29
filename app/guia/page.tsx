import Breadcrumb from "@/components/ui/Breadcrumb";
import PageTitle from "@/components/ui/PageTitle";
import { Perfil } from "@/app/api/perfiles/route";
import PerfilesTable from "./components/PerfilesTable";
import TableTopics, { Topics } from "../../components/ui/TableTopics";

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

  return (
    <>
      <Breadcrumb title="Guía" />
      <main className="flex justify-center px-4 py-5">
        <article id="guia" className="flex flex-col gap-5 w-full">
          <PageTitle title={"Guía de formación"} />
          <section id="content" className="w-full flex flex-col gap-10">
            <div className="w-full">
              <p className="w-full text-justify font-medium text-lg md:text-xl mb-3">
                En este módulo, se encuentra disponible la descarga de la ruta de formación sugerida para el perfil o perfiles seleccionados en el módulo anterior. Esta ruta incluye una serie de temas o contenidos recomendados para abordar durante el programa de educación financiera con enfoque de género y/o diferencial, así como las modalidades más adecuadas para la entrega de dicho programa.
                Además, se proporciona una propuesta de materiales y estrategias pedagógicas específicas para cada perfil seleccionado previamente.
              </p>
              <p className="w-full text-justify font-medium text-lg md:text-xl mb-3">
                Es importante destacar que estas recomendaciones se elaboraron considerando los resultados tanto del proceso de investigación cuantitativa como cualitativa. Además, se tuvieron en cuenta los lineamientos establecidos por la Banca de las Oportunidades en el documento “Contenidos mínimos para programas de educación económica y financiera no formal en Colombia 2022”, junto con otros insumos.
              </p>
            </div>
            <div className="flex justify-center items-center">
              <div className="w-full md:w-6/12">
                <PerfilesTable perfiles={perfiles} />
              </div>
            </div>
          </section>
          <section
            id="recomendados"
            className="flex justify-center items-center my-5"
          >
            <a
              href="https://storage.googleapis.com/images_wp/pdfs/contenidos-sugeridos-adicionales.pdf"
              download
              target="_blank"
              rel="nofollow">
              <button
                type="button"
                className="border-2 border-[#5e2232] text-[#5e2232] px-5 py-2 font-semibold text-lg md:text-2xl"
              >
                Contenidos sugeridos adicionales
              </button>
            </a>
          </section>
          <section id="title">
            <p className="w-full text-justify font-medium text-lg md:text-xl mb-3">
              A continuación, se presentan los contenidos sugeridos para un programa de educación financiera con enfoque de género y/o diferencial. Estos contenidos se han desarrollado considerando la información proporcionada por las mujeres durante el proceso de investigación cuantitativo, así como los aportes de las entidades participantes en el proceso de investigación cualitativo.
            </p>
            <p className="w-full text-justify font-medium text-lg md:text-xl mb-3">
              Además, se han tenido en cuenta las disposiciones de la Ley 1328 de 2008 y el lineamiento establecido por la Banca de las Oportunidades en el documento “Contenidos mínimos para programas de educación económica y financiera no formal en Colombia 2022”.            </p>
          </section>
          <section
            id="tables"
            className="flex flex-col justify-center items-center mt-8 mb-5 gap-y-24"
          >
            {tables.map(({ id, title, content }: Topics) => (
              <div
                key={id}
                className="flex flex-col justify-center items-center w-full md:w-8/12"
              >
                <TableTopics id={id} bgColor="bg-[#102e6a]" title={title} content={content} key={id} />
              </div>
            ))}
          </section>
        </article>
      </main>
    </>
  );
}

export default Guia;
