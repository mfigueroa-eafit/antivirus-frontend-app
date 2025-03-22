/**
 * Obtiene la lista de oportunidades desde la API.
 * @param {string} token - Token de autenticación del usuario.
 * @returns {Promise<Array>} - Lista de oportunidades.
 */
export async function getOportunidades(token) {
    try {
      const response = await fetch("http://localhost:5050/api/oportunidades", {
        method: "GET",
        headers: {
          accept: "text/plain",
          Authorization: `Bearer ${token}`,
        },
      });
  
      if (!response.ok) {
        throw new Error("Error al obtener las oportunidades");
      }
  
      return await response.json();
    } catch (error) {
      console.error("Error fetching oportunidades:", error);
      return [];
    }
  }

/**
 * Extrae la lista de logos de las oportunidades.
 * @param {Array} oportunidades - Lista de oportunidades.
 * @returns {Array} - Lista de URLs de logos.
 */
export function getLogos(oportunidades) {
    return oportunidades.map(oportunidad => oportunidad.logo).filter(logo => logo);
  }
  
  