import { getSectorItemsData } from "@/lib/sectorItemData";

export async function GET(request: any) {
  const sectorItems = await getSectorItemsData();
  return new Response(JSON.stringify(sectorItems), {
    headers: { "Content-Type": "application/json" },
  });
}
