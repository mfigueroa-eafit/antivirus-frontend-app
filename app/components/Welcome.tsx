export default function Welcome() {
    return (
      <header className="bg-gray-100 py-16 px-16 flex flex-col md:flex-row items-center justify-between max-w-2xl mx-auto">
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
        <img src="/assets/images/banco.png" alt="Banco de Oportunidades" className="h-64 w-auto md:mt-0" />
      </header>
    );
  }
  