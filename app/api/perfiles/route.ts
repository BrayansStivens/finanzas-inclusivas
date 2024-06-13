import { PerfilesData } from "@/lib/perfiles";

export interface Perfil {
  id: string;
  name: string;
  url: string;
}

export async function GET(request: any) {
  const perfiles: Perfil[] = await PerfilesData();
  return new Response(JSON.stringify(perfiles), {
    headers: { "Content-Type": "application/json" },
  });
}
