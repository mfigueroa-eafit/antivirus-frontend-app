import { Link, Form } from "@remix-run/react";
import { ROLE_ADMIN, ROUTES } from "~/utils/constants"; 


export default function Navbar({ isAuthenticated, rol, nombre }) {

  return (
    <nav className="bg-blue-900 text-white flex justify-between items-center px-6 py-3">
      <div className="flex space-x-6">
        <Link to="/" className="hover:underline">Inicio</Link>
        <Link to="/servicios" className="hover:underline">Servicios</Link>
        <Link to="/oportunidades" className="hover:underline">Oportunidades</Link>
        
        {isAuthenticated ? (
        <div>
         
          <ul>
            {rol === ROLE_ADMIN ? (
             <Link to={ROUTES.ADMIN} className="hover:underline">Administrador</Link>
            ) : (
              <Link to={ROUTES.DEFAULT} className="hover:underline">Novedades</Link>
        
            )}
          </ul>
        </div>
      ) : (<span></span>)}
      </div>
      <div className="flex space-x-4">
      {isAuthenticated ? (
        <>
        <div><span>Bienvenido, {nombre}</span></div>
         
              <Form method="post" action="/logout">
                <button type="submit" className="bg-red-500 px-3 py-1 rounded">Cerrar sesión</button>
              </Form>
              </>
          ) : (
            <>
            <Link to="/login">Iniciar sesión</Link>

            <Link to="/register">
              Regístrate
          </Link>
            </>
          )}
        
      </div>
    </nav>
  );
}
