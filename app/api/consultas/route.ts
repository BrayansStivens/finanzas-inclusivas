import { supabase } from "@/utils/supabase/supabaseClient";

export async function POST(req: any) {
  const {
    fecha_consulta,
    sector,
    entidad,
    fecha_descarga_perfil,
    perfil_descargado,
  } = await req.json();

  const { data, error } = await supabase.from("consultas").insert([
    {
      fecha_consulta: new Date(fecha_consulta),
      sector,
      entidad,
      fecha_descarga_perfil: new Date(fecha_descarga_perfil),
      perfil_descargado,
    },
  ]);

  if (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  return new Response(JSON.stringify({ data }), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
