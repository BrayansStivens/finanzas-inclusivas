import Breadcrumb from "@/components/ui/Breadcrumb";
import PageTitle from "@/components/ui/PageTitle";
import { Perfil } from "@/app/api/perfiles/route";
import PerfilesTable from "./components/PerfilesTable";
import TableTopics, { Topics } from "./components/TableTopics";

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
              <p className="w-full text-justify font-medium text-lg md:text-xl">
                Podrá descargar la ruta de preferencia de las mujeres asociada
                al perfil seleccionado. Esta ruta incluye temas, modalidades y
                materiales ordenados según sus preferencias. Además, proporciona
                estrategias pedagógicas específicas para cada perfil
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
            <button
              type="button"
              className="border-2 border-[#5e2232] text-[#5e2232] px-5 py-2 font-semibold text-lg md:text-2xl"
            >
              Contenidos sugeridos adicionales
            </button>
          </section>
          <section id="title">
            <p className="w-full text-justify font-medium text-lg md:text-xl">
              En el siguiente listado encontrará temáticas sugeridas para
              programas de educación financiera con enfoque de género, teniendo
              en cuenta los contenidos obligatorios establecidos por la Ley 1328
              de 2009 y otras investigaciones sobre el diseño y la entrega de
              programas de educación financiera.
            </p>
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
                <TableTopics id={id} title={title} content={content} key={id} />
              </div>
            ))}
          </section>
        </article>
      </main>
    </>
  );
}

export default Guia;
