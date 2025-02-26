import type { MetaFunction } from "@remix-run/node";
import Footer from "~/components/Footer";

export const meta: MetaFunction = () => {
  return [
    { title: "Antivurus" }
  ];
};

export default function Index() {
  return (
    <div className="font-sans bg-gray-100">
      {/* Barra de navegación */}
      <nav className="bg-blue-900 text-white flex justify-between items-center px-6 py-3">
        <div className="flex space-x-6">
          <a href="#" className="hover:underline">Inicio</a>
          <a href="#" className="hover:underline">Servicios</a>
          <a href="#" className="hover:underline">Oportunidades</a>
        </div>
        <div className="flex space-x-4">
          <button className="bg-white text-blue-900 px-4 py-1 rounded-full">Ingresa</button>
          <button className="bg-pink-500 px-4 py-1 rounded-full">Regístrate</button>
        </div>
      </nav>

      {/* Hero Section */}
  <header className="bg-gray-100 py-16 px-16 flex flex-col md:flex-row items-center justify-between max-w-2xl mx-auto ">
  {/* Contenedor del texto */}
  <div className="max-w-xl text-center md:text-left">
    <h1 className="text-4xl font-bold text-blue-900">
      ¡Tu <span className="underline">futuro</span> inicia aquí!
    </h1>
    <p className="text-gray-700 mt-4">
      En la Fundación Antivirus para la Deserción creemos que cada persona merece acceso a las mejores oportunidades.
      Por eso, ofrecemos una plataforma personalizada donde puedes explorar becas, cursos y programas adaptados a tus intereses y necesidades.
    </p>
    <div className="mt-6 flex flex-col md:flex-row items-center md:items-start">
      <button className="bg-yellow-500 text-white px-6 py-2 rounded-full font-bold hover:bg-yellow-600">
        Contáctanos
      </button>
      <span className="mx-2 text-gray-500 hidden md:inline">o</span>
      <a href="#" className="text-blue-900 underline mt-2 md:mt-0">Conoce sobre nosotros</a>
    </div>
  </div>

  {/* Imagen del banco */}
  <img src="/assets/images/banco.png" alt="Banco de Oportunidades" className="h-64 w-auto  md:mt-0" />
</header>


      {/* Sección de oportunidades */}
      <section className="py-12 text-center bg-gray-100">
        <h2 className="text-3xl font-bold text-blue-900">¡Mira estas oportunidades!</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
          {/* Tarjeta 1 */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <img src="/assets/images/eafit.png" alt="Nodo EAFIT" className="mx-auto" />
            <h3 className="text-lg font-bold mt-4">Nodo EAFIT</h3>
            <p className="text-gray-600">
              Participa en programas de formación y talleres en la Universidad EAFIT.
            </p>
          </div>
          {/* Tarjeta 2 */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <img src="/assets/images/velezreyes.png" alt="Becas vélezreyes+" className="mx-auto" />
            <h3 className="text-lg font-bold mt-4">Becas vélezreyes+</h3>
            <p className="text-gray-600">
              Apoyo financiero para estudiantes destacados. Solicita tu beca.
            </p>
          </div>
          {/* Tarjeta 3 */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <img src="/assets/images/image.png" alt="Comfama" className="mx-auto" />
            <h3 className="text-lg font-bold mt-4">Comfama</h3>
            <p className="text-gray-600">
              Accede a programas educativos y recreativos con Comfama.
            </p>
          </div>
        </div>
      </section>

      {/* Sección de Servicios */}
      <section className="py-12 text-center bg-gray-100">
        <h2 className="text-3xl font-bold text-blue-900">Servicios</h2>
        <div className="mt-8 flex flex-col md:flex-row justify-center gap-6 px-6">
          {/* Tarjeta de servicio */}
          <div className="bg-white shadow-lg rounded-lg p-4 w-80">
            <img src="/assets/images/provocacion.png" alt="Pro-vocación" className="rounded-t-lg" />
            <h3 className="text-lg font-bold mt-4">Pro-vocación</h3>
            <p className="text-gray-600">Programa para ayudar a definir tu futuro profesional.</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-4 w-80">
            <img src="/assets/images/sociopedagogica.png" alt="Asesoría sociopedagógica" className="rounded-t-lg" />
            <h3 className="text-lg font-bold mt-4">Asesoría sociopedagógica</h3>
            <p className="text-gray-600">Apoyo educativo para mejorar tu rendimiento académico.</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-4 w-80">
            <img src="/assets/images/test.png" alt="Test sociovocacional" className="rounded-t-lg" />
            <h3 className="text-lg font-bold mt-4">Test sociovocacional</h3>
            <p className="text-gray-600">Descubre cuál es tu camino ideal en el mundo laboral.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
 

    </div>
  );
}



