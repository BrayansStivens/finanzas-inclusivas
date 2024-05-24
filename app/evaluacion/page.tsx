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
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
              consequat. Duis autem vel eum iriure dolor in hendrerit in
              vulputate velit esse molestie consequat, vel illum dolore eu
              feugiat nulla facilisis at.
            </p>
          </section>
          <section
            id="recomendados"
            className="flex justify-center items-center my-5"
          >
            <button
              type="button"
              className="border-2 border-[#5e2232] text-[#5e2232] px-5 py-2 font-semibold text-2xl"
            >
              Contenidos sugeridos adicionales
            </button>
          </section>
        </article>
      </main>
    </>
  );
}

export default Evaluacion;
