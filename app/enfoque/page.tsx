// app/recomendaciones/page.tsx
import Breadcrumb from "@/components/ui/Breadcrumb";
import IframeVideoPage from "@/components/ui/IframeVideoPage";
import PageTitle from "@/components/ui/PageTitle/index";

function RecomendacionesPage() {
  return (
    <>
      <Breadcrumb title="Enfoque" />
      <main className="flex justify-center px-4 py-5">
        <article id="recomendaciones" className="flex flex-col gap-5 w-full">
          <PageTitle title={"Enfoque de interseccionalidad"} />
          <section
            id="text"
            className="w-full flex flex-col md:flex-row gap-10"
          >
            <p className="w-full md:w-6/12 text-justify">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
              consequat. Duis autem vel eum iriure dolor in hendrerit in
              vulputate velit esse molestie consequat, vel illum dolore eu
              feugiat nulla facilisis at.
            </p>
            <p className="w-full md:w-6/12 text-justify">
              Feugait nulla facilisi. Lorem ipsum dolor sit amet, cons ectetuer
              adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
              laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim
              veniam, quis nostrud exerci tation ullamcorper suscipit lobortis
              nisl ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
              amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
              tincidunt ut.
            </p>
          </section>
          <IframeVideoPage src="https://www.youtube-nocookie.com/embed/CDH1UEG3nbo?si=77CLKQwOoQf0xJoD" />
        </article>
      </main>
    </>
  );
}

export default RecomendacionesPage;
