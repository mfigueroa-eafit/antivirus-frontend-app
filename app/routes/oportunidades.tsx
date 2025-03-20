import { json } from "@remix-run/node";
import { requireAuth } from "~/utils/auth";


export const loader = async ({ request }) => {
  await requireAuth(request);
  return json({});
};

export default function Oportunidades() {
  return (
      <div className="container mx-auto p-6">
        <h1 className="text-2xl font-bold">Oportunidades</h1>
        <p>Aquí puedes ver todas las oportunidades disponibles.</p>
      </div>
  );
}
