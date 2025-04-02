import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration, 
  useLoaderData
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";
import "./tailwind.css";
import { json } from "@remix-run/node";
import Navbar from "~/components/Navbar";
import Footer from "~/components/Footer";
import { checkAuth } from "~/services/authService"; 

export const loader = async ({ request }) => {
  // Verificar si el usuario está autenticado y obtener el rol
  const authData = await checkAuth(request);

  // Si no hay token, no hay autenticación
  if (!authData) {
    return json({ isAuthenticated: false });
  }

  // Si hay token, devolver la autenticación y el rol
  const { rol } = authData;
  const { nombre } = authData;
  return json({ isAuthenticated: true, rol, nombre });
};

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  const { isAuthenticated, rol, nombre } = useLoaderData() || { isAuthenticated: false, rol: null, nombre: null };
 
  return (
    <>
      <Navbar isAuthenticated={isAuthenticated} rol={rol} nombre={nombre} suppressHydrationWarning/>
      <Outlet />
      <Footer />
      <ScrollRestoration />
      <Scripts />
    </>
  );
}
