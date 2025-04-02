import { json } from "@remix-run/node";
import { requireAuth } from "~/utils/auth";


export const loader = async ({ request }) => {
  await requireAuth(request);
  return json({});
};

export default function Admin() {
  return (
      <div className="container mx-auto p-6">
        <h1 className="text-2xl font-bold">Admin</h1>
        <p>Aquí puedes administrar las tablas</p>
      </div>
  );
}