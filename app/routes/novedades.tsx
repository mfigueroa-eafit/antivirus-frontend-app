import React from "react";
import Navbar from "~/components/Navbar";
import Footer from "~/components/Footer";
import { json, useLoaderData } from "@remix-run/react";
import { tokenCookie } from "~/utils/cookies";
import Carousel from "~/components/Carousel";

export const loader = async ({ request }) => {


   const token = await tokenCookie.parse(request.headers.get("Cookie"));
  
    if (!token) {
    throw new Response("Unauthorized", { status: 401 });
    }
  
    try {
      const response = await fetch("http://localhost:5050/api/oportunidades", {
        method: "GET",
        headers: {
          "accept": "text/plain",
          "Authorization": `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        throw new Error("Error al obtener las novedades");
      }
      const data = await response.json();
      return json(data);
    } catch (error) {
      console.error("Error fetching novedades:", error);
      return json([]);
    }
  };

const Novedades = () => {
    const oportunidades = useLoaderData();

  return (
    <>
      {/* Barra de navegación */}
      <Navbar />
    <div className="container mx-auto p-4 text-center align-middle">
      <h2 className="text-2xl font-bold mb-4">Novedades</h2>
      <div className="w-1/2 flex justify-center items-center">
      <Carousel />
      </div>
      <h3 className="text-xl font-semibold mb-4">¡Oportunidades para estudiar!</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {oportunidades.map((oportunidad) => (
          <div key={oportunidad.id} className="bg-white p-4 rounded shadow-md dark:bg-[#283446] dark:text-[#a8afc4]">
            <img src="assets/images/comfama.png" alt="Comfama" className="w-full h-48 object-cover rounded mb-4" />
            <h5 className="text-xl font-semibold mb-2">{oportunidad.nombre}</h5>
            <p>{oportunidad.descripcion}</p>
            <button className="mt-2 bg-yellow-500 text-white px-4 py-2 rounded">Conocer</button>
          </div>
        ))}
      </div>
    </div>
    {/* Footer */}
    <Footer />
    </>
  );
};

export default Novedades;
