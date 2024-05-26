// app/recomendaciones/page.tsx
import Breadcrumb from "@/components/ui/Breadcrumb";
import IframeVideoPage from "@/components/ui/IframeVideoPage";
import PageTitle from "@/components/ui/PageTitle";

function RecomendacionesPage() {
  return (
    <>
      <Breadcrumb title="Recomendaciones" />
      <main className="flex justify-center px-4 py-5">
        <article id="recomendaciones" className="flex flex-col gap-5 w-full">
          <PageTitle title={"Recomendaciones para el uso de la herramienta"} />
          <section
            id="text"
            className="w-full row-gap-10"
          >
            <p className="w-full text-justify mb-4">
              El propósito de esta herramienta es proporcionar orientaciones prácticas y sencillas para el diseño y la entrega de programas de
              educación financiera con enfoque de género y/o diferencial a las diversas entidades del ecosistema financiero en Colombia. En
              especial, está destinada a aquellas que deseen ofrecer estos servicios a mujeres rurales, víctimas del conflicto armado,
              afrocolombianas, indígenas y emprendedoras.
            </p>
            <p className="w-full text-justify mb-4">
              Esta herramienta fue diseñada a partir de un proceso previo de investigación de enfoque mixto, combinando métodos cuantitativos
              y cualitativos. En la fase cuantitativa, se aplicaron encuestas a 4543 mujeres en 20 municipios de Antioquia y 3 de Caldas, con el
              objetivo de identificar sus preferencias, expectativas y necesidades en educación financiera. En la fase cualitativa, se realizaron
              entrevistas con siete instituciones del ecosistema financiero, destacadas por su enfoque de género en educación financiera, con el
              fin de identificar retos, dificultades y buenas prácticas para la implementación de estos programas. Estos resultados se presentan en
              el módulo 3: Resultados de la investigación en la que se basó la herramienta.
            </p>
            <p className="w-full text-justify mb-4">
              En el siguiente video, se presentan los pasos para acceder a la herramienta y su funcionamiento:
            </p>
          </section>
          <div className="mb-4">
            <IframeVideoPage src="https://www.youtube-nocookie.com/embed/CDH1UEG3nbo?si=77CLKQwOoQf0xJoD" />
          </div>
        </article>
      </main>
    </>
  );
}

export default RecomendacionesPage;
