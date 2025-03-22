import { tokenCookie } from "~/utils/cookies";

/**
 * Realiza la solicitud de inicio de sesión a la API.
 * @param {string} correo - Correo del usuario.
 * @param {string} password - Contraseña del usuario.
 * @returns {Promise<Object>} - Datos del usuario autenticado.
 */
export async function login(correo, password) {
  const response = await fetch("http://localhost:5050/api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ correo, password }),
  });

  if (!response.ok) {
    throw new Error("Credenciales incorrectas");
  }

  return response.json();
}

/**
 * Verifica si hay un token válido en las cookies.
 * @param {Request} request - Petición HTTP.
 * @returns {Promise<boolean>} - `true` si el usuario está autenticado, `false` si no.
 */
export async function checkAuth(request) {
  const cookieHeader = request.headers.get("Cookie");
  const token = await tokenCookie.parse(cookieHeader);
  return !!token; // Retorna true si hay token, false si no
}

/**
 * Cierra la sesión eliminando la cookie del token.
 * @returns {Promise<Object>} - Encabezados para eliminar la cookie.
 */
export async function logout() {
  return {
    headers: {
      "Set-Cookie": await tokenCookie.serialize("", { maxAge: 0 }), // Borra la cookie
    },
  };
}
