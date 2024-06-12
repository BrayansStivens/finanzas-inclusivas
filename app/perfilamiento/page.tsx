import React from "react";
import ResultSectionBi from "./components/ProfileSectionBi";
import Breadcrumb from "@/components/ui/Breadcrumb";
import ModuleButton from "@/components/ui/ModuleButton";

const Profile: React.FC = () => {
  const dataBtn = [
    {
      text: "Ir al módulo Anterior",
      href: "/resultados",
      position: "end",
    },
    {
      text: "Ir al siguiente módulo",
      href: "/guia",
      position: "end",
    },
  ];
  return (
    <>
      <Breadcrumb title="Perfilamiento" />
      <ModuleButton dataBtn={dataBtn} />
      <main>
        <article id="perfilamiento" className="flex flex-col gap-5">
          <ResultSectionBi />
        </article>
      </main>
    </>
  );
};

export default Profile;
