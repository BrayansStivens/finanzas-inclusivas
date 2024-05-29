// app/enfoque/page.tsx
import Breadcrumb from "@/components/ui/Breadcrumb";
import IframeVideoPage from "@/components/ui/IframeVideoPage";
import PageTitle from "@/components/ui/PageTitle/index";

function RecomendacionesPage() {
  return (
    <>
      <Breadcrumb title="Enfoque" />
      <main className="flex justify-center px-4 py-5">
        <article id="enfoque" className="flex flex-col gap-5 w-full">
          <PageTitle
            title={
              "¿Qué es el enfoque interseccional y cómo se aplica a la educación financiera?"
            }
          />
          <section id="text" className="w-full">
            <p className="w-full text-justify font-medium text-lg mb-3">
              Como se mencionó en el módulo anterior, la lógica de funcionamiento de esta herramienta se basa en el enfoque interseccional. Este enfoque reconoce que variables como el nivel educativo, la condición socioeconómica, la edad, la etnia, la presencia o ausencia de una situación de discapacidad, el lugar de residencia (rural o urbana) y el autoreconocimiento como víctima del conflicto armado influyen en la forma en que las mujeres acceden y se apropian de los conocimientos en educación financiera en Colombia.
            </p>
            <p className="w-full text-justify font-medium text-lg mb-3">
              A continuación, se presenta un video que ofrece una explicación más detallada sobre qué es el enfoque interseccional, por qué es importante considerarlo durante los procesos de diseño y entrega de programas de educación financiera con enfoque de género y/o diferencial, qué variables se tuvieron en cuenta al construir la herramienta, y otros datos de interés para los usuarios.”
            </p>
          </section>
          <div className="mb-4">
            <IframeVideoPage src="https://www.youtube.com/embed/dD2DPBvd7qs?si=wWq7riY2CLsAHsbN" />
          </div>
        </article>
      </main>
    </>
  );
}

export default RecomendacionesPage;
