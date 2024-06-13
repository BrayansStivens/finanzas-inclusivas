import Breadcrumb from "@/components/ui/Breadcrumb";
import ModuleButton from "@/components/ui/ModuleButton";
import PageTitle from "@/components/ui/PageTitle";

function Evaluacion() {
  const dataBtn = [
    {
      text: "Ir al modulo anterior",
      href: "/guia",
      position: "start",
    },
    {
      text: "Inicio",
      href: "/home",
      position: "start",
    },
  ];

  return (
    <>
      <Breadcrumb title="Guía" />
      <ModuleButton dataBtn={dataBtn} />
      <main className="flex justify-center px-4 py-5">
        <article id="evaluacion" className="flex flex-col gap-5 w-full">
          <PageTitle title={"Instrumento de evaluación"} />
          <section id="content" className="w-full">
            <p className="text-justify mb-3">
              En este módulo, se presenta una propuesta de instrumento para
              evaluar la efectividad de los programas de educación financiera
              desarrollados por las entidades del ecosistema financiero a través
              de la medición de cambios en conocimientos, actitudes, habilidades
              y comportamientos en educación financiera.
            </p>
            <p className="text-justify mb-3">
              El diseño metodológico de este instrumento se basa principalmente
              en los lineamientos proporcionados por el National Endowment for
              Financial Education en el NEFE FINANCIAL EDUCATION EVALUATION
              MANUAL del año 2016 desarrollado por Investigadores del Claremont
              Evaluation Center y fue complementado con otros marcos de
              referencia relevantes existentes en Colombia.
            </p>
          </section>
          <section
            id="recomendados"
            className="flex justify-center items-center my-5"
          >
            <a
              href="https://storage.googleapis.com/images_wp/pdfs/Instrumento%20de%20medici%C3%B3n%20V1.xlsx"
              rel="no-follow"
            >
              <button
                type="button"
                className="border-2 border-[#5e2232] text-[#5e2232] px-5 py-2 font-semibold text-lg md:text-2xl"
              >
                Descarga del instrumento
              </button>
            </a>
          </section>
        </article>
      </main>
    </>
  );
}

export default Evaluacion;
