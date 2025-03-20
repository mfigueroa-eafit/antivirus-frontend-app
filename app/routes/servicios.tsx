import { json } from "@remix-run/node";
import { requireAuth } from "~/utils/auth";


export const loader = async ({ request }) => {
  await requireAuth(request);
  return json({});
};

export default function Servicios() {
  return (
      <div className="container mx-auto p-6">
        <h1 className="text-2xl font-bold">Servicios</h1>
        <p>Aquí puedes ver todas los servicios disponibles.</p>
      </div>
  );
}
