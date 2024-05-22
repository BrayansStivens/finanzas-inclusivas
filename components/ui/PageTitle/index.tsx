import React from "react";
export interface PageTitleProps {
  title: string;
}

function PageTitle({ title }: PageTitleProps) {
  return (
    <section id="title" className="bg-[#ad2635] py-2 px-4 text-center">
      <h5 className="text-2xl font-bold text-[#fff] w-full">{title}</h5>
    </section>
  );
}

export default PageTitle;
