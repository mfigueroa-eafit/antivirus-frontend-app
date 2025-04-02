import { tokenCookie } from "~/utils/cookies";
import {jwtDecode} from "jwt-decode";
import {BACKEND_SERVER} from "~/utils/constants";

/**
 * Realiza la solicitud de inicio de sesión a la API.
 * @param {string} correo - Correo del usuario.
 * @param {string} password - Contraseña del usuario.
 * @returns {Promise<Object>} - Datos del usuario autenticado.
 */
export async function login(correo, password) {
  const response = await fetch(`${BACKEND_SERVER}/api/auth/login`, {
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

  if (!token) {
    return null; // Si no hay token, retornar null
  }

  try {
    // Decodificar el token para obtener los datos del usuario
    const decodedToken = jwtDecode(token);

    // Extraer el rol del token decodificado
    const rol = decodedToken["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];
    
    // Extraer el nombre del token decodificado
    const nombre = decodedToken["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"];


    // Retornar un objeto con el token y el rol
    return { token, rol, nombre };
  } catch (error) {
    console.error("Error al decodificar el token:", error);
    return null; // Si hay un error al decodificar el token, retornar null
  }
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


/**
 * Registra un nuevo usuario en el sistema.
 * 
 * @param {Object} userData - Datos del usuario a registrar.
 * @param {string} userData.nombre - Nombre del usuario.
 * @param {string} userData.apellido - Apellido del usuario.
 * @param {string} userData.fechaNacimiento - Fecha de nacimiento del usuario en formato DD/MM/YYYY.
 * @param {string} userData.correo - Correo electrónico del usuario.
 * @param {string} userData.password - Contraseña del usuario.
 * @returns {Promise<Object>} - Respuesta del servidor con el resultado del registro.
 * @throws {Error} - Lanza un error si la solicitud falla.
 */
export async function registerUser({ nombre, apellido, fechaNacimiento, correo, password }) {
  try {
    const response = await fetch(`${BACKEND_SERVER}/api/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nombre, apellido, fechaNacimiento, correo, password }),
    });

    if (!response.ok) {
      throw new Error("Error en el registro service");
    }

    return await response.json();
  } catch (error) {
    console.error("Error al registrar usuario:", error);
    throw error;
  }
}

