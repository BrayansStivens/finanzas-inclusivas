// app/enfoque/page.tsx
import Breadcrumb from "@/components/ui/Breadcrumb";
import IframeVideoPage from "@/components/ui/IframeVideoPage";
import ModuleButton from "@/components/ui/ModuleButton";
import PageTitle from "@/components/ui/PageTitle/index";
import Image from "next/image";

function RecomendacionesPage() {
  const dataBtn = [
    {
      text: "Ir al módulo Anterior",
      href: "/recomendaciones",
      position: "end",
    },
    {
      text: "Ir al siguiente módulo",
      href: "/resultados",
      position: "end",
    },
  ];
  return (
    <>
      <Breadcrumb title="Enfoque" />
      <ModuleButton dataBtn={dataBtn} />
      <main className="flex justify-center px-4 py-5">
        <article id="enfoque" className="flex flex-col gap-5 w-full">
          <PageTitle
            title={
              "¿Qué es el enfoque interseccional y cómo se aplica a la educación financiera?"
            }
          />
          <section id="text" className="w-full">
            <p className="w-full text-justify font-medium text-lg mb-3">
              Como se mencionó previamente, la lógica de funcionamiento de esta
              herramienta se basa en el enfoque interseccional ya que variables
              como el nivel educativo, condición socioeconómica, edad, etnia,
              lugar de residencia (rural o urbana) y el autoreconocimiento como
              víctima del conflicto armado inciden de manera representativa en
              la forma en como las mujeres acceden a los conocimientos en
              educación financiera y los apropian.
            </p>
            <p className="w-full text-justify font-medium text-lg mb-3">
              A continuación, se presenta un video que ofrece una explicación
              más detallada sobre qué es el enfoque interseccional, por qué es
              importante considerarlo durante los procesos de diseño y entrega
              de programas de educación financiera con enfoque de género y/o
              diferencial, qué variables se tuvieron en cuenta al construir la
              herramienta y otros datos de interés para usted como usuario.
            </p>
          </section>
          <div className="mb-4 w-full">
            <IframeVideoPage src="https://www.youtube.com/embed/ujpz1-jWdtI?si=0UPrXzjLkNqL0zHN" />
            <br />
            <br />

            <div className="flex flex-col md:flex-row gap-3 md:gap-6 items-center px-5 md:px-44">
              <p className="md:text-lg text-justify">
                Si quieres saber más sobre el enfoque interseccional, te
                invitamos a consultar los siguientes documentos:
              </p>
            </div>
            <br />
            <div className="flex flex-col md:flex-row gap-3 md:gap-6 items-center px-5 md:px-44">
              <Image
                src="/assets/icons/referencias.svg"
                alt="referencias"
                width={30}
                height={30}
                className="w-auto h-auto"
              />
              <p className="md:text-lg text-justify">
                Pérez, M. (2021). Interseccionalidad. En Susana B. Gamba y Tania
                Diz, Nuevo diccionario de estudios de género y feminismos.
                Buenos Aires (Argentina): Biblos.{" "}
                <a
                  href="https://www.aacademica.org/moira.perez/83"
                  target="_blank"
                  className="text-[#102e6a]"
                >
                  https://www.aacademica.org/moira.perez/83
                </a>
              </p>
            </div>
            <br />
            <div className="flex flex-col md:flex-row gap-3 md:gap-6 items-center px-5 md:px-44">
              <Image
                src="/assets/icons/referencias.svg"
                alt="referencias"
                width={30}
                height={30}
                className="w-auto h-auto"
              />
              <p className="md:text-lg text-justify">
                Zeballosf-Cuathin, A. (2021). La interseccionalidad por razones
                de diversidad étnica y cultural en Colombia. Revista Inciso,
                23(2), 1–19.{" "}
                <a
                  href="https://doi.org/10.1016/j.df.2016.09.005"
                  target="_blank"
                  className="text-[#102e6a] break-all"
                >
                  <p>
                    https://revistas.ugca.edu.co/index.php/inciso/article/view/1148
                  </p>
                </a>
              </p>
            </div>
            <br />
            <div className="flex flex-col md:flex-row gap-3 md:gap-6 items-center px-5 md:px-44">
              <Image
                src="/assets/icons/referencias.svg"
                alt="referencias"
                width={30}
                height={30}
                className="w-auto h-auto"
              />
              <p className="md:text-lg text-justify">
                Vigoya, M. V. (2016). Interseccionalidad: una aproximación
                situada a la dominación. Debate Feminista, 52.{" "}
                <a
                  href="https://doi.org/10.1016/j.df.2016.09.005"
                  target="_blank"
                  className="text-[#102e6a] "
                >
                  https://doi.org/10.1016/j.df.2016.09.005
                </a>
              </p>
            </div>
          </div>
        </article>
      </main>
    </>
  );
} /* Pérez, M. (2021). Interseccionalidad. En Susana B. Gamba y Tania Diz, Nuevo diccionario de estudios de género y
feminismos.Buenos Aires (Argentina): Biblos. https://www.aacademica.org/moira.perez/83

Zeballosf-Cuathin, A. (2021). La interseccionalidad por razones de diversidad étnica y cultural en Colombia. Revista Inciso, 23(2), 1–19. https://revistas.ugca.edu.co/index.php/inciso/article/view/1148

Vigoya, M. V. (2016). Interseccionalidad: una aproximación situada a la dominación. Debate Feminista, 52. https://doi.org/10.1016/j.df.2016.09.005
 */

export default RecomendacionesPage;

<div className="flex flex-col md:flex-row gap-3 md:gap-6 items-center px-5 md:px-44">
  <Image
    src="/assets/icons/referencias.svg"
    alt="referencias"
    width={30}
    height={30}
    className="w-auto h-auto"
  />
  <p className="md:text-lg">
    <a
      href="https://revistas.ugca.edu.co/index.php/inciso/article/view/1148"
      target="_blank"
      className="text-[#102e6a]"
    ></a>
  </p>
</div>;
