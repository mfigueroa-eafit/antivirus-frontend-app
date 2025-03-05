import { Link } from "@remix-run/react";

export default function Navbar() {
  return (
    <nav className="bg-blue-900 text-white flex justify-between items-center px-6 py-3">
      <div className="flex space-x-6">
        <Link to="/" className="hover:underline">Inicio</Link>
        <Link to="/servicios" className="hover:underline">Servicios</Link>
        <Link to="/oportunidades" className="hover:underline">Oportunidades</Link>
      </div>
      <div className="flex space-x-4">
        <Link to="/login" className="bg-white text-blue-900 px-4 py-1 rounded-full">
          Ingresa
        </Link>
        <button className="bg-pink-500 px-4 py-1 rounded-full">Regístrate</button>
      </div>
    </nav>
  );
}
