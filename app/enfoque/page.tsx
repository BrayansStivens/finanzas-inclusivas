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
            <p className="w-full text-justify">
              ¿Qué es el enfoque interseccional, cómo surgió y por qué es
              importante considerarlo en el diseño y entrega de programas de
              educación financiera con enfoque de género y diferencial? ¿Qué
              variables del enfoque interseccional se tomaron en cuenta en la
              herramienta? En el siguiente video proporcionaremos un contexto
              detallado.
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
