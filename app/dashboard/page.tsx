"use client";

import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import Image from "next/image";

export default function Dashboard() {
  const { user, logout } = useAuth();
  const [isHovered, setIsHovered] = useState(false);

  if (!user) return null;

  return (
    <div className="flex h-screen bg-base-200" data-theme="forest">
      {/* Menú lateral con hover */}
      <div 
        className="relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Ícono flotante que siempre se ve */}
        <div className={`
          fixed left-4 top-20 z-50 cursor-pointer
          transition-all duration-300
          ${isHovered ? 'opacity-0 pointer-events-none' : 'opacity-100'}
        `}>
          <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center shadow-lg hover:bg-primary-focus transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-content" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
            </svg>
          </div>
        </div>

        {/* Menú que aparece al hover */}
        <aside className={`
          fixed left-0 top-0 h-full bg-base-100 shadow-xl z-40
          transition-all duration-300 ease-in-out overflow-hidden
          ${isHovered ? 'w-auto min-w-[200px]' : 'w-0'}
        `}>
          <div className="p-4 w-[200px]">
            {/* Logo o título del menú */}
            <div className="mb-8 flex items-center gap-2 px-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-content font-bold">D</span>
              </div>
              <span className="text-xl font-bold">Dashboard</span>
            </div>

            {/* Opciones del menú */}
            <ul className="menu gap-2">
              <li>
                <a className="hover:bg-primary hover:text-primary-content transition-colors rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  Inicio
                </a>
              </li>
              <li>
                <a className="hover:bg-primary hover:text-primary-content transition-colors rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  Estadísticas
                </a>
              </li>
            </ul>
          </div>
        </aside>
      </div>

      {/* Contenido principal */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="navbar bg-base-100 shadow-lg px-4 lg:px-6">
          <div className="flex-1">
            <a className="btn btn-ghost text-xl">Mi Dashboard</a>
          </div>
          
          {/* Perfil de usuario */}
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full ring ring-primary ring-offset-2">
                {user?.image ? (
                  <Image 
                    src={user.image} 
                    alt={user.name || "Avatar"} 
                    width={40} 
                    height={40}
                    className="rounded-full"
                  />
                ) : (
                  <div className="bg-primary text-primary-content flex items-center justify-center w-full h-full rounded-full">
                    {user?.name?.charAt(0) || "U"}
                  </div>
                )}
              </div>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li className="menu-title">
                <span>{user?.name || "Usuario"}</span>
              </li>
              <li>
                <span className="text-sm opacity-70">{user?.email}</span>
              </li>
              <div className="divider my-1"></div>
              <li onClick={logout}>
                <a className="text-error">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                  </svg>
                  Cerrar sesión
                </a>
              </li>
            </ul>
          </div>
        </header>

        {/* Contenido principal */}
        <main className="flex-1 p-6 bg-base-200">
          <div className="hero min-h-[calc(100vh-80px)] bg-base-100 rounded-xl shadow-lg">
            <div className="hero-content text-center">
              <div className="max-w-md">
                <h1 className="text-4xl font-bold text-primary mb-4">
                  ¡Hola bienvenido! 👋
                </h1>
                <p className="text-lg text-base-content/70">
                  {user?.name}, estamos felices de tenerte aquí.
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
