import { Form, useActionData, useFetcher } from "@remix-run/react";
import { json, redirect} from "@remix-run/node";
import { tokenCookie } from "~/utils/cookies"; 


export const action = async ({ request }) => {
  const formData = await request.formData();
  const correo = formData.get("correo");
  const password = formData.get("password");

  const response = await fetch("http://localhost:5050/api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ correo, password }),
  });

  if (!response.ok) {
    return json({ error: "Credenciales incorrectas" }, { status: 401 });
  }

  const data = await response.json();
  let token = data.token.replace(/['"]+/g, ""); 
  const headers = new Headers();
  headers.append("Set-Cookie", await tokenCookie.serialize(token));

  return redirect("/novedades", { headers });
};



export default function Login() {
  const fetcher = useFetcher(); 
  const actionData = useActionData();


  return (

      <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
        <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-4xl flex">
          
          {/* Imagen de Javi */}
          <div className="w-1/2 flex justify-center items-center">
            <img src="/assets/images/javi.png" alt="Javi" className="max-w-full h-auto" />
          </div>

          {/* Formulario */}
          <div className="w-1/2 p-6">
            <h2 className="text-2xl font-bold text-center text-blue-900">
              Banco de oportunidades
            </h2>

            <div className="mt-6 space-y-4">
              <button className="w-full flex items-center justify-center border p-2 rounded-md text-black">
                <img
                  src="/assets/icons/google-icon.png"
                  alt="Google"
                  className="w-5 h-5 mr-2"
                />
                Ingresa con Google
              </button>
              <button className="w-full flex items-center justify-center border p-2 rounded-md text-black">
                <img
                  src="/assets/icons/facebook-icon.png"
                  alt="Facebook"
                  className="w-5 h-5 mr-2"
                />
                Ingresa con Facebook
              </button>
            </div>

            {actionData?.error && (
            <p className="text-red-500 text-center mt-2">{actionData.error}</p>
          )}

            <fetcher.Form method="post" className="mt-6">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                name="correo"
                className="w-full p-2 border rounded-md"
                placeholder="example@gmail.com"
              />

              <label className="block text-gray-700 mt-4 ">Contraseña</label>
              <input
                type="password"
                name="password"
                className="w-full p-2 border rounded-md"
                placeholder="********"
              />

              <div className="mt-4 flex items-center justify-between">
                <label className="flex items-center text-black ">
                  <input type="checkbox" className="mr-2  bg-blend-color" /> Recordarme
                </label>
                <a href="#" className="text-yellow-500">Olvidé mi contraseña</a>
              </div>

              <button
                type="submit"
                className="mt-6 w-full bg-yellow-500 text-white py-2 rounded-md font-bold"
              >
                Login
              </button>
            </fetcher.Form>

            <p className="mt-4 text-center text-gray-700">
              ¿No tienes una cuenta?{" "}
              <a href="#" className="text-blue-900 underline">
                Regístrate
              </a>
            </p>
          </div>
        </div>
      </div>
  );
}
