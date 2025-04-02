import { useState } from "react";
import { Form } from "@remix-run/react";
import { FaUser, FaEnvelope, FaLock, FaCalendarAlt, FaIdCard } from "react-icons/fa";
import RocketLaunch from "~/components/RocketLaunch";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";


export default function RegisterForm({actionData}) {

  const [date, setDate] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);

  return (
    <div className="flex max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md mt-6 space-x-8">
      <div className="flex flex-col justify-center items-center">
        <RocketLaunch />
      </div>
      <div className="w-full">
        <h2 className="text-xl font-bold text-center mb-6 text-black">
          ¿Preparado para encontrar tu próxima <span className="text-blue-600">oportunidad?</span> 
        </h2>
        <button className="w-full flex items-center justify-center border p-2 rounded-md text-black">
          <img src="/assets/icons/google-icon.png" alt="Google" className="w-5 h-5 mr-2"/>Ingresa con Google
        </button>
        <button className="w-full flex items-center justify-center border p-2 rounded-md text-black">
          <img src="/assets/icons/facebook-icon.png" alt="Facebook" className="w-5 h-5 mr-2" />Ingresa con Facebook
        </button>
        <Form method="post" className="space-y-4">
          <div className="relative">
            <FaUser className="absolute left-3 top-3 text-black" />
            <input type="text" name="nombre" placeholder="Nombre" className="w-full pl-10 p-2 border rounded-md bg-gray-50 text-black" required />
          </div>
          <div className="relative">
            <FaIdCard className="absolute left-3 top-3 text-black" />
            <input type="text" name="apellido" placeholder="Apellido" className="w-full pl-10 p-2 border rounded-md bg-gray-50 text-black" required />
          </div>
          <div className="relative">
  <FaCalendarAlt
    className="absolute left-3 top-3 text-black cursor-pointer"
    onClick={() => setShowCalendar(!showCalendar)}
  />
  <input
    type="text"
    value={date.toLocaleDateString()}
    readOnly
    className="w-full pl-10 p-2 border rounded-md bg-gray-50 text-black cursor-pointer"
    onClick={() => setShowCalendar(!showCalendar)}
  />
  <input type="hidden" name="fechaNacimiento" value={date.toISOString().split("T")[0]} />
</div>

{showCalendar && (
  <div className="absolute top-12 left-0 z-10 bg-white shadow-md p-2 rounded-md">
    <Calendar
      onChange={(newDate) => {
        setDate(newDate);
        setShowCalendar(false);
      }}
      value={date}
    />
  </div>
)}
          <div className="relative">
            <FaEnvelope className="absolute left-3 top-3 text-black" />
            <input type="email" name="correo" placeholder="Correo Electrónico" className="w-full pl-10 p-2 border rounded-md bg-gray-50 text-black" required />
          </div>
          <div className="relative">
            <FaLock className="absolute left-3 top-3 text-black" />
            <input type="password" name="password" placeholder="Contraseña" className="w-full pl-10 p-2 border rounded-md bg-gray-50 text-black" required />
          </div>
          <div className="relative">
            <FaLock className="absolute left-3 top-3 text-black" />
            <input type="password" name="confirmPassword" placeholder="Confirmar Contraseña" className="w-full pl-10 p-2 border rounded-md bg-gray-50 text-black" required />
          </div>
          {actionData?.message && (
            <p className={`text-center ${actionData.success ? "text-green-600" : "text-red-600"}`}>{actionData.message}</p>
          )}
          <button type="submit" className="mt-6 w-full bg-yellow-500 text-white py-2 rounded-md font-bold">
            Crear Cuenta
          </button>
        </Form>
      </div>
    </div>
  );
}
