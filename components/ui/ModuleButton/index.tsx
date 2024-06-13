import Link from "next/link";
import React from "react";

interface ModuleButtonProps {
  text: string;
  href: string;
  position?: string;
}

const ModuleButton = ({ dataBtn }: { dataBtn: ModuleButtonProps[] }) => {
  return (
    <div
      className={`px-4 flex ${
        dataBtn.length > 1
          ? "justify-between"
          : `justify-${dataBtn[0].position}`
      } w-full`}
    >
      {dataBtn.map((btn, index) => (
        <Link href={btn.href} key={index}>
          <button className="bg-[#102E6A] m-2 text-white px-5 py-2.5 rounded border-none cursor-pointer text-base font-bold hover:bg-[#204c94] transition-colors duration-200 ease-in-out">
            {btn.text}
          </button>
        </Link>
      ))}
    </div>
  );
};

export default ModuleButton;
