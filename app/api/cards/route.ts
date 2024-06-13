// app/api/cards/route.js
import { getCardsData } from "@/lib/cardsData";

export async function GET(request: any) {
  const cards = await getCardsData();
  return new Response(JSON.stringify(cards), {
    headers: { "Content-Type": "application/json" },
  });
}
