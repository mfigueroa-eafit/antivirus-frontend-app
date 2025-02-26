import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-900 text-white py-8 px-6">
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      
      {/* Sección Izquierda - Logo y Redes Sociales */}
      <div className="flex flex-col items-center md:items-start">
        <img src="/assets/images/logo-antivirus.png" alt="Fundación Antivirus" className="w-40 h-auto" />
        <p className="mt-4 text-sm">También puedes encontrarnos en:</p>
        <div className="flex space-x-4 mt-2">
        <a  href="https://instagram.com/somosantivirus" className="w-12 h-12 p-2 border-white hover:bg-yellow-500 hover:rounded-full" target="_blank">
            <img src="/assets/icons/instagram.png" alt="Instagram"/></a>
            <a  href="https://wa.me/573217066273" className="w-12 h-12 p-2 border-white hover:bg-yellow-500 hover:rounded-full" target="_blank">
            <img src="/assets/icons/whatsapp.png" alt="Whatsapp"/></a>
            <a  href="https://linkedin.com/in/somosantivirus" className="w-12 h-12 p-2 border-white hover:bg-yellow-500 hover:rounded-full" target="_blank">
            <img src="/assets/icons/linkedin.png" alt="LinkedIn"/></a>
            <a  href="https://www.tiktok.com/@somosantivirus" className="w-12 h-12 p-2 border-white hover:bg-yellow-500 hover:rounded-full" target="_blank">
            <img src="/assets/icons/tik-tok.png" alt="Tik Tok"/></a>
        </div>
      </div>
  
      {/* Sección Derecha - Contacto */}
      <div className="text-center md:text-left">
        <h3 className="text-lg font-bold">¿Quieres saber más de nosotros?</h3>
        <p>Contáctanos hoy mismo.</p>
        <div className="mt-4 space-y-2">
          <p className="flex items-center justify-center md:justify-start space-x-2">
            <span>📧</span> 
            <span>contactenos@fundacionantivirusparaladesercion.org</span>
          </p>
          <p className="flex items-center justify-center md:justify-start space-x-2">
            <span>📱</span> 
            <span>+57 3226367781</span>
          </p>
        </div>
        <p className="mt-6 font-semibold">Banco de Oportunidades</p>
        <p className="text-xs mt-1">Términos y condiciones | Política de privacidad</p>
      </div>
    </div>
  </footer>
  );
};

export default Footer;
