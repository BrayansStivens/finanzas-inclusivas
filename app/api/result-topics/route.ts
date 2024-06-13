import { resultTablesTopicsData } from "@/lib/resultTableTopics";

export async function GET(request: any) {
  const topics = await resultTablesTopicsData();
  return new Response(JSON.stringify(topics), {
    headers: { "Content-Type": "application/json" },
  });
}
