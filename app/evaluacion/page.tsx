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
            <p className="text-justify mb-3">
              En este módulo, se presenta una propuesta de instrumento para evaluar la efectividad de los programas de educación financiera desarrollados por las entidades del ecosistema financiero. Esta propuesta se centra en la medición de los cambios en conocimientos, actitudes, habilidades y comportamientos financieros de los participantes antes y después de recibir este tipo de educación no formal.
            </p>
            <p className="text-justify mb-3">
              El diseño metodológico de este instrumento se fundamenta principalmente en los lineamientos proporcionados por el National Endowment for Financial Education en el <strong>NEFE FINANCIAL EDUCATION EVALUATION MANUAL</strong>. Además, se han considerado otros marcos de referencia existentes en Colombia en esta materia.            </p>
          </section>
          <section
            id="recomendados"
            className="flex justify-center items-center my-5"
          >
            <a href="https://storage.googleapis.com/images_wp/pdfs/Instrumento%20de%20medici%C3%B3n.xlsx">
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
