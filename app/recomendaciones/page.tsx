// app/recomendaciones/page.tsx
import Breadcrumb from "@/components/ui/Breadcrumb";
import IframeVideoPage from "@/components/ui/IframeVideoPage";
import ModuleButton from "@/components/ui/ModuleButton";
import PageTitle from "@/components/ui/PageTitle";

function RecomendacionesPage() {
  const dataBtn = [
    {
      text: "Regresar",
      href: "/home",
      position: "end",
    },
    {
      text: "Ir al siguiente módulo",
      href: "/enfoque",
      position: "end",
    },
  ];
  return (
    <>
      <Breadcrumb title="Recomendaciones" />
      <ModuleButton dataBtn={dataBtn} />
      <main className="flex justify-center px-4 py-5">
        <article id="recomendaciones" className="flex flex-col gap-5 w-full">
          <PageTitle title={"Recomendaciones para el uso de la herramienta"} />

          <section id="text" className="w-full row-gap-10">
            <p className="w-full text-justify mb-4">
              En este módulo encontrará un video tutorial a través del cual se
              darán orientaciones para el uso adecuado de la herramienta
              FINANZAS PARA TODAS y se explicarán los contenidos disponibles,
              filtros y otros detalles relevantes para usted como usuario.
            </p>
            <p className="w-full text-justify mb-4">
              Es importante destacar que la lógica de funcionamiento de esta
              herramienta se basa en el enfoque interseccional y concretamente
              en variables como edad, etnia, condición socioeconómica,
              autoreconocimiento como víctima del conflicto armado, lugar de
              residencia (urbano y rural) y nivel educativo de las mujeres
              potencialmente beneficiarias de un programa de educación
              financiera, así que esas variables constituyen criterios primarios
              tanto de búsqueda como de generación de información en “FINANZAS
              PARA TODAS”.
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
