'use client';

import HeaderMenu from "./header";
import MagicRings from "./component/MagicRings";
import Image from "next/image";
import LogoLoop from "./component/LogoLoop";
import {
  FaHackerNews,
  FaShieldAlt,
  FaKey,
  FaLock,
} from "react-icons/fa";
import {
  MdSecurity,
  MdDeveloperMode,
} from "react-icons/md";
import {
  GiBrain,
  GiCyberEye,
} from "react-icons/gi";

const techLogos = [
  { node: <FaHackerNews className="text-orange-500" size={40} />, title: "Hacker News", href: "#" },
  { node: <FaShieldAlt className="text-green-500" size={40} />, title: "Security", href: "#" },
  { node: <FaKey className="text-yellow-500" size={40} />, title: "Encryption", href: "#" },
  { node: <FaLock className="text-red-500" size={40} />, title: "Cybersecurity", href: "#" },
  { node: <MdSecurity className="text-blue-500" size={40} />, title: "Security", href: "#" },
  { node: <MdDeveloperMode className="text-purple-500" size={40} />, title: "Dev Mode", href: "#" },
  { node: <GiCyberEye className="text-cyan-500" size={40} />, title: "Cyber Eye", href: "#" },
  { node: <GiBrain className="text-pink-500" size={40} />, title: "AI Brain", href: "#" },
];

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col">

      {/* Fondo animado */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <MagicRings
          color="#A855F7"
          colorTwo="#6366F1"
          ringCount={6}
          speed={1}
          attenuation={10}
          lineThickness={2}
          baseRadius={0.35}
          radiusStep={0.1}
          scaleRate={0.1}
          opacity={1}
          blur={0}
          noiseAmount={0.1}
          rotation={0}
          ringGap={1.5}
          fadeIn={0.7}
          fadeOut={0.5}
          followMouse={false}
          mouseInfluence={0.2}
          hoverScale={1.2}
          parallax={0.05}
          clickBurst={false}
        />
      </div>

      {/* Header SIEMPRE encima */}
      <div className="sticky top-0 z-[9999]">
        <HeaderMenu />
      </div>

      {/* Main */}
      <main className="relative z-10 flex-1 container mx-auto px-4 py-8 flex flex-col justify-between gap-12">

        <div className="max-w-4xl mx-auto w-full">
          <div className="card md:card-side bg-base-200/60 backdrop-blur-md shadow-2xl border border-base-300">

            <figure className="w-full md:w-2/5 min-h-[200px] relative bg-base-300/30 p-6 flex justify-center items-center">
              <Image
                src="/imagen12.png"
                alt="RangersRoot"
                width={250}
                height={150}
                className="object-contain rounded-xl"
                priority
              />
            </figure>

            <div className="card-body md:w-3/5 backdrop-blur-sm bg-base-100/30 rounded-2xl shadow-2xl border border-white/10 p-8">
  {/* Badge decorativo */}
  <div className="flex items-center gap-2 mb-2">
    <span className="badge badge-primary badge-sm gap-1">
      <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
      En desarrollo
    </span>
    <span className="badge badge-secondary badge-sm">v1.0</span>
  </div>

  {/* Título principal */}
  <h1 className="card-title text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
    RangersRoot
  </h1>
  
  <h2 className="text-xl font-semibold text-base-content/80 mt-1">
    🔐 Seguridad Informática · Hacking Ético · Software
  </h2>

  {/* Descripción */}
  <div className="py-4 space-y-3 text-base-content/80">
    <p className="text-lg leading-relaxed">
      <span className="text-primary font-semibold">RangersRoot</span> es un espacio dedicado a la 
      <span className="text-secondary font-medium"> seguridad informática</span>, 
      <span className="text-accent font-medium"> hacking ético</span> y 
      <span className="text-primary font-medium"> desarrollo de software</span>.
    </p>
    
    <p className="text-base leading-relaxed">
      Nuestro objetivo es crear una comunidad donde todos puedan aprender, 
      compartir y crecer en el fascinante mundo de la ciberseguridad.
    </p>

    <div className="flex flex-wrap gap-2 mt-3">
      <span className="badge badge-outline badge-primary">🛡️ Pentesting</span>
      <span className="badge badge-outline badge-secondary">💻 Desarrollo</span>
      <span className="badge badge-outline badge-accent">🔍 OSINT</span>
      <span className="badge badge-outline badge-info">🌐 Redes</span>
      <span className="badge badge-outline badge-success">🐧 Linux</span>
    </div>

    {/* Mensaje de login con Google */}
    <div className="mt-4 p-4 bg-primary/10 border border-primary/20 rounded-xl backdrop-blur-sm">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
          <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24">
            <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"/>
            <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
        </div>
        <div>
          <p className="text-sm font-medium text-primary">
            🚀 Acceso con Google disponible
          </p>
          <p className="text-xs text-base-content/60">
            Inicia sesión con tu cuenta de Google para acceder a contenido exclusivo
          </p>
        </div>
      </div>
    </div>
  </div>




</div>
          </div>
        </div>

        <div className="w-full">
          <LogoLoop
            logos={techLogos}
            speed={100}
            direction="left"
            logoHeight={40}
            gap={60}
            hoverSpeed={0}
            scaleOnHover
            ariaLabel="Technology partners"
          />
        </div>

      </main>

      <footer className="footer footer-center p-10 bg-base-200 rounded-t-xl relative z-10">
        <p>
          Copyright © {new Date().getFullYear()} - RangersRoot
        </p>
      </footer>
    </div>
  );
}
