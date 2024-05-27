import Breadcrumb from "@/components/ui/Breadcrumb";
import PageTitle from "@/components/ui/PageTitle";

function Evaluacion() {
  return (
    <>
      <Breadcrumb title="Guía" />
      <main className="flex justify-center px-4 py-5">
        <article id="evaluacion" className="flex flex-col gap-5 w-full">
          <PageTitle title={"Instrumento de evaluación"} />
          <section id="content" className="w-full">
            <p className="text-justify">
              En este módulo, podrá descargar la herramienta integral que
              permitirá evaluar los cambios en comportamientos, conocimientos,
              actitudes y habilidades de las mujeres que participen en los
              programas de educación financiera con enfoque de género y
              diferencial.
            </p>
          </section>
          <section
            id="recomendados"
            className="flex justify-center items-center my-5"
          >
            <button
              type="button"
              className="border-2 border-[#5e2232] text-[#5e2232] px-5 py-2 font-semibold text-lg md:text-2xl"
            >
              Descarga del instrumento
            </button>
          </section>
        </article>
      </main>
    </>
  );
}

export default Evaluacion;
