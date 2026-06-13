"use client";

import { useAuth } from "../context/AuthContext";


export default function Dashboard() {
  const {
    user,
    logout,
  } = useAuth();

  return (
    <div className="p-10">
      <h1>
        Bienvenido {user?.name}
      </h1>

      <button
        onClick={logout}
        className="btn btn-error"
      >
        Cerrar sesión
      </button>
    </div>
  );
}