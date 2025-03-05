export default function Servicios() {
    return (
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
    );
  }
  