import HomeImageSection from "./components/HomeImageSection";
import HomeTextSection from "./components/HomeTextSection";
import HomeCardSection from "./components/HomeCardSection";
import Breadcrumb from "../../components/ui/Breadcrumb/index";

async function getCards() {
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
  const response = await fetch(`${API_BASE_URL}/api/cards`, {
    cache: "no-store",
  });
  const data = await response.json();
  return data;
}

async function getImagesCarousel() {
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
  const response = await fetch(`${API_BASE_URL}/api/carousel`, {
    cache: "no-store",
  });
  const data = await response.json();
  return data;
}

export default async function HomeFeaturesPage() {
  const cards = await getCards();
  const imagesCarousel = await getImagesCarousel();

  return (
    <>
      <Breadcrumb />
      <main className="flex justify-center px-4 py-5">
        <article id="home" className="flex flex-col gap-5">
          <HomeImageSection images={imagesCarousel} />
          <HomeTextSection />
          <HomeCardSection cards={cards} />
        </article>
      </main>
    </>
  );
}
