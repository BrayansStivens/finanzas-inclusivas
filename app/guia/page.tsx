import Breadcrumb from "@/components/ui/Breadcrumb";
import PageTitle from "@/components/ui/PageTitle";
import { Perfil } from "@/app/api/perfiles/route";
import PerfilesTable from "./components/PerfilesTable";

async function getPerfiles(): Promise<Perfil[]> {
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
  const response = await fetch(`${API_BASE_URL}/api/perfiles`, {
    cache: "no-store",
  });
  const data = await response.json();
  return data;
}

async function Guia() {
  const perfiles: Perfil[] = await getPerfiles();

  return (
    <>
      <Breadcrumb title="Guía" />
      <main className="flex justify-center px-4 py-5">
        <article id="guia" className="flex flex-col gap-5 w-full">
          <PageTitle title={"Guía de formación"} />
          <section
            id="content"
            className="w-full flex flex-col md:flex-row gap-10"
          >
            <div className="w-full md:w-6/12">
              <p className="text-justify">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui,
                aperiam error. Autem quibusdam minus sunt nobis facere,
                dignissimos repellat nemo adipisci. Ipsum, quisquam doloribus
                aut corporis dignissimos est eius velit?, Consectetur
                adipisicing elit. Quisquam temporibus et suscipit illum
                accusantium quasi delectus voluptatem porro nostrum, cupiditate
                amet libero. Distinctio laborum officia, optio consectetur
                eligendi culpa sit! Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Fugiat id fugit inventore beatae temporibus
                blanditiis sint dolore alias illum quasi minima, corporis,
                officia libero quidem saepe deserunt amet nisi eius. Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Officiis ducimus
                est vero aspernatur inventore cum expedita fuga ullam deleniti
                facere quos quae deserunt doloremque commodi voluptatum, nam
                dolores cumque fugit.
              </p>
            </div>
            <div className="w-full md:w-6/12">
              <PerfilesTable perfiles={perfiles} />
            </div>
          </section>
          <section
            id="recomendados"
            className="flex justify-center items-center my-5"
          >
            <button
              type="button"
              className="border-2 border-[#5e2232] text-[#5e2232] px-5 py-2 font-semibold text-2xl"
            >
              Descarga del instrumento
            </button>
          </section>
        </article>
      </main>
    </>
  );
}

export default Guia;
