import type { MetaFunction } from "@remix-run/node";
import Footer from "~/components/Footer";
import Navbar from "~/components/Navbar";
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
      {/* Barra de navegación */}
      <Navbar />

      {/* Welcome Section */}
      <Welcome />

      {/* Sección de oportunidades */}
      <Oportunidades />

      {/* Sección de Servicios */}
      <Servicios />

      {/* Footer */}
      <Footer />
 
    </div>
  );
}



