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

          <section id="text" className="w-full row-gap-10">
            <p className="w-full text-justify mb-4">
              En este módulo, presentamos orientaciones para el uso adecuado de
              la herramienta FINANZAS PARA TODAS así que con el propósito de
              facilitar la comprensión de su esquema y lógica de funcionamiento,
              a continuación se incluye un video tutorial sobre el uso de la
              herramienta en el cual se mostrarán los diferentes módulos de los
              que se compone la herramienta, los contenidos disponibles, filtros
              y otros detalles relevantes para usted como usuario.
            </p>
            <p className="w-full text-justify mb-4">
              Es importante destacar que la lógica de funcionamiento de esta
              herramienta se basa en el enfoque interseccional y concretamente
              en variables como edad, etnia, condición socioeconómica,
              autoreconocimiento como víctima del conflicto armado, lugar de
              residencia (urbano y rural), presencia o ausencia de una situación
              de discapacidad y nivel educativo de las mujeres potencialmente
              beneficiarias de un programa de educación financiera, así que esas
              variables constituyen criterios primarios para la búsqueda y
              generación de información en la herramienta.
            </p>
            {/*             <p className="w-full text-justify mb-4">
              En el siguiente video, se presentan los pasos para acceder a la
              herramienta y su funcionamiento:
            </p> */}
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
