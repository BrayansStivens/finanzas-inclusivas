// app/api/carousel/route.ts
import { ImagesCarousel } from "@/lib/imagesCarousel";

export async function GET(request: any) {
  const images = await ImagesCarousel();
  return new Response(JSON.stringify(images), {
    headers: { "Content-Type": "application/json" },
  });
}
