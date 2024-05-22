// app/recomendaciones/page.tsx
import Breadcrumb from "@/components/ui/Breadcrumb";
import styles from "./recomendaciones.module.css";

function RecomendacionesPage() {
  return (
    <>
      <Breadcrumb title="Recomendaciones" />
      <main className="flex justify-center px-4 py-5">
        <article id="recomendaciones" className="flex flex-col gap-5 w-full">
          <section id="title" className="bg-[#ad2635] py-2 px-4 text-center">
            <h5 className="text-2xl font-bold text-[#fff] w-full">
              Recomendaciones para el uso de la herramienta
            </h5>
          </section>
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
          <section id="video" className="w-full flex justify-center">
            <div className={styles.videoContainer}>
              <iframe
                src="https://www.youtube-nocookie.com/embed/CDH1UEG3nbo?si=77CLKQwOoQf0xJoD"
                title="YouTube video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </section>
        </article>
      </main>
    </>
  );
}

export default RecomendacionesPage;
