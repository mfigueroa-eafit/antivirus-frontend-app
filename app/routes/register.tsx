import RegisterForm from "~/components/RegisterForm";
import { json, redirect } from "@remix-run/node";
import { useActionData } from "@remix-run/react";
import { registerUser } from "~/services/authService";


export async function action({ request }) {

  const formData = await request.formData(); 

  const nombre = formData.get("nombre");
  const apellido = formData.get("apellido");
  const fechaNacimiento = formData.get("fechaNacimiento");
  const correo = formData.get("correo");
  const password = formData.get("password");

  try {
    await registerUser({ nombre, apellido, fechaNacimiento, correo, password });
    return redirect("/"); 
  } catch (error) {
    return json({ success: false, message: "Error en el registro" }, { status: 400 });
  }
}

export default function RegisterPage() {
  const actionData = useActionData();

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <RegisterForm actionData={actionData} />
    </div>
  );
}
