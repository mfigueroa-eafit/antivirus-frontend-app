import type { MetaFunction } from "@remix-run/node";
import Oportunidades from "~/components/Oportunidades";
import Servicios from "~/components/Servicios";
import Welcome from "~/components/Welcome";

export const meta: MetaFunction = () => {
  return [
    { title: "Antivurus" }
  ];
};

export default function Index() {
  return (
    <div className="font-sans bg-gray-100">

      {/* Welcome Section */}
      <Welcome />

      {/* Sección de oportunidades */}
      <Oportunidades />

      {/* Sección de Servicios */}
      <Servicios />

    </div>
  );
}



