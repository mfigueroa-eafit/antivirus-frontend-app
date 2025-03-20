import { Link, Form } from "@remix-run/react";

export default function Navbar({ isAuthenticated }) {


  return (
    <nav className="bg-blue-900 text-white flex justify-between items-center px-6 py-3">
      <div className="flex space-x-6">
        <Link to="/" className="hover:underline">Inicio</Link>
        <Link to="/servicios" className="hover:underline">Servicios</Link>
        <Link to="/oportunidades" className="hover:underline">Oportunidades</Link>
        {isAuthenticated && <Link to="/novedades">Novedades</Link>}
      </div>
      <div className="flex space-x-4">
      {isAuthenticated ? (
              <Form method="post" action="/logout">
                <button type="submit" className="bg-red-500 px-3 py-1 rounded">Cerrar sesión</button>
              </Form>
          ) : (
            <>
            <Link to="/login">Iniciar sesión</Link>
            <button className="bg-pink-500 px-4 py-1 rounded-full">Regístrate</button>
            </>
          )}
        
      </div>
    </nav>
  );
}
