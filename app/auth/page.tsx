import React from "react";
import AuthSectorCard from "./components/AuthSectorCards";

async function getSectorData() {
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
  const response = await fetch(`${API_BASE_URL}/api/sector-data`, {
    cache: "no-store",
  });
  const data = await response.json();
  return data;
}

const AuthFeaturesPage: React.FC = async () => {
  const sectorData: {
    financial: string[];
    otherEntities: [];
    solidarity: string[];
  } = await getSectorData();

  return (
    <main className="flex justify-center px-4 py-5">
      <article id="auth" className="flex flex-col gap-5">
        <AuthSectorCard {...sectorData} />
      </article>
    </main>
  );
};

export default AuthFeaturesPage;
