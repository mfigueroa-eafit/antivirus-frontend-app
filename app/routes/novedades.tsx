import React from "react";
import { json, useLoaderData } from "@remix-run/react";
import { tokenCookie } from "~/utils/cookies";
import Carousel from "~/components/Carousel";
import { getOportunidades, getLogos } from "~/services/oportunidadesService";

export const loader = async ({ request }) => {
  const token = await tokenCookie.parse(request.headers.get("Cookie"));

  if (!token) {
    return json({ isAuthenticated: false, oportunidades: [] });
  }

  const oportunidades = await getOportunidades(token);
  const logos = getLogos(oportunidades);

  return json({ isAuthenticated: true, oportunidades, logos });
};

const Novedades = () => {
  const {  oportunidades } = useLoaderData<typeof loader>();

  return (


      <div className="container mx-auto p-4 text-center align-middle">
        <h2 className="text-2xl font-bold mb-4">Novedades</h2>
        <div className="w-1/2 flex justify-center items-center">
          <Carousel />
        </div>
        <h3 className="text-xl font-semibold mb-4">¡Oportunidades para estudiar!</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {oportunidades.map((oportunidad) => (
            <div key={oportunidad.id} className="bg-white p-4 rounded shadow-md dark:bg-[#283446] dark:text-[#a8afc4]">
              <img
                src={oportunidad.logo}
                alt="Comfama"
                className="w-full h-48 object-cover rounded mb-4"
              />
              <h5 className="text-xl font-semibold mb-2">{oportunidad.nombre}</h5>
              <p>{oportunidad.descripcion}</p>
              <button className="mt-2 bg-yellow-500 text-white px-4 py-2 rounded" ><a  href={oportunidad.url} className="w-12 h-12 p-2 border-white hover:bg-yellow-500 hover:rounded-full" target="_blank">Conocer</a></button>
            </div>
          ))}
        </div>
      </div>

  
  );
};

export default Novedades;
