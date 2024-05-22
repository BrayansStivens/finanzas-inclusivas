import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { BreadcrumbProps } from "./interfaces/breadcrumb_interface";

const Breadcrumb = ({
  title,
  mainTitle,
  parent,
  subParent,
  homeRoute = "/home",
}: BreadcrumbProps) => {
  return (
    <div className="p-4 w-full">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-3xl font-bold text-gray-800 caret-transparent">
          {mainTitle}
        </h2>
        <ol className="list-reset flex text-gray-500">
          <li className="flex items-center">
            <Link
              href={homeRoute}
              className="text-gray-500 hover:text-[#0b3d91] flex items-center caret-transparent"
            >
              <FaHome className="mr-2" />
              Inicio
            </Link>
          </li>
          {parent && (
            <>
              <li className="flex items-center mx-2 caret-transparent">/</li>
              <li className="flex items-center caret-transparent">
                {parent.isLink ? (
                  <Link
                    href={parent.url || "#"}
                    className="text-gray-500 hover:text-[#0b3d91] caret-transparent"
                  >
                    {parent.name}
                  </Link>
                ) : (
                  <span className="text-gray-800 caret-transparent">
                    {parent.name}
                  </span>
                )}
              </li>
            </>
          )}
          {subParent && (
            <>
              <li className="flex items-center mx-2 caret-transparent">/</li>
              <li className="flex items-center caret-transparent">
                {subParent.isLink ? (
                  <Link
                    href={subParent.url || "#"}
                    className="text-gray-500 hover:text-[#0b3d91] caret-transparent"
                  >
                    {subParent.name}
                  </Link>
                ) : (
                  <span className="text-gray-800">{subParent.name}</span>
                )}
              </li>
            </>
          )}
          <li className="flex items-center mx-2">/</li>
          <li className="flex items-center text-[#0b3d91] font-bold caret-transparent cursor-default">
            {title}
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Breadcrumb;
