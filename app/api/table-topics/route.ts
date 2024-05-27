import { tablesTopicsData } from "@/lib/tableTopics";

export async function GET(request: any) {
  const tables = await tablesTopicsData();
  return new Response(JSON.stringify(tables), {
    headers: { "Content-Type": "application/json" },
  });
}
