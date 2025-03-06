export default function Oportunidades() {
    return (
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
            <img src="/assets/images/comfama-logo.png" alt="Comfama" className="mx-auto" />
            <h3 className="text-lg font-bold mt-4">Comfama</h3>
            <p className="text-gray-600">
              Accede a programas educativos y recreativos con Comfama.
            </p>
          </div>
        </div>
      </section>
    );
  }
  