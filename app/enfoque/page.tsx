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
          <section
            id="text"
            className="w-full"
          >
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
            <p className="w-full text-justify">
              ¿Qué es el enfoque interseccional, cómo surgió y por qué es importante considerarlo en el diseño y entrega de programas de
              educación financiera con enfoque de género y diferencial? ¿Qué variables del enfoque interseccional se tomaron en cuenta en la
              herramienta? En el siguiente video proporcionaremos un contexto detallado.
=======
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
            <p className="w-full text-justify font-medium text-lg md:text-xl">
              ¿Qué es el enfoque interseccional, cómo surgió y por qué es
              importante considerarlo en el diseño y entrega de programas de
              educación financiera con enfoque de género y diferencial? ¿Qué
              variables del enfoque interseccional se tomaron en cuenta en la
              herramienta? En el siguiente video proporcionaremos un contexto
              detallado.
<<<<<<< Updated upstream
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
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
