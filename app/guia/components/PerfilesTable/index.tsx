"use client";
import { Perfil } from "@/app/api/perfiles/route";
import Image from "next/image";
import { useEffect, useState } from "react";
import { filterDataInArray } from "@Utils/handles/handleSearch";

export interface PerfilesTableProps {
  perfiles: Perfil[];
}

function PerfilesTable({ perfiles }: PerfilesTableProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPerfiles, setFilteredPerfiles] = useState(perfiles);

  const handleDownload = (perfil: any) => {
    const dataString = localStorage.getItem("data") || "{}";
    const dataObject = JSON.parse(dataString as string);
    dataObject.perfil_descargado = perfil.name;
    dataObject.fecha_descarga_perfil = new Date().getTime();

    const dataConsultas = { ...dataObject };
    console.log(dataConsultas);
    saveConsulta(dataConsultas);
  };

  const saveConsulta = async (data: any) => {
    const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
    try {
      const response = await fetch(`${API_BASE_URL}/api/saveConsulta`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Error saving consulta");
      }

      const result = await response.json();
      console.log("Consulta saved successfully:", result);
    } catch (error) {
      console.error("Error saving consulta:", error);
    }
  };

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredPerfiles(perfiles);
    } else {
      setFilteredPerfiles(filterDataInArray(perfiles, searchTerm));
    }
  }, [searchTerm, perfiles]);

  return (
    <div className="overflow-x-auto">
      <input
        type="text"
        placeholder="Buscar perfil..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-4 p-2 border-2 border-[#121212] w-full font-semibold text-xl shadow-md focus:outline-none focus:border-[#2a63b1] focus:text-[#2a63b1]"
      />
      {filteredPerfiles.length === 0 ? (
        <div className="text-center text-gray-500 font-semibold">
          No hay perfiles para mostrar
        </div>
      ) : (
        <ul className="max-h-[15rem] overflow-y-auto min-w-full">
          {filteredPerfiles.map((perfil) => (
            <li
              key={perfil.id}
              className="flex justify-between gap-5 items-center px-6 py-4 w-full"
            >
              <div className="font-semibold text-xl md:text-2xl border-b-2 border-black px-5 py-2 flex-1">
                {perfil.name}
              </div>
              <div className="text-right text-xs md:text-sm font-medium flex items-center">
                <a
                  href={`${perfil.url}`}
                  className="text-[#fff] flex items-center justify-center gap-5 bg-[#2a63b1] px-3 py-2 md:px-5 md:py-2 font-semibold text-lg md:text-2xl caret-transparent"
                  download
                  target="_blank"
                  rel="nofollow"
                  onClick={() => {
                    handleDownload(perfil);
                  }}
                >
                  <Image
                    className="w-auto h-auto"
                    src="/assets/icons/download.svg"
                    alt="icon download"
                    width={31.81}
                    height={31.81}
                  />
                  <span className="caret-transparent">Descargar</span>
                </a>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default PerfilesTable;
