"use client";

import { useState } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import HeaderMenu from "../header";
import MagicRings from "../component/MagicRings";
import { signIn } from "next-auth/react";
import { useSession } from "next-auth/react";

export default function LoginPage() {
    const { data: session } = useSession();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleEmailLogin = async (e: React.FormEvent) => {
      e.preventDefault();
      setError(null);
      setIsSubmitting(true);

      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      setIsSubmitting(false);

      if (!res || res.error) {
        setError("Email o contraseña incorrectos");
        return;
      }

      // Sesión creada correctamente. El AuthProvider (AuthContext) redirige
      // a /dashboard automáticamente cuando detecta `authenticated === true`.
    };

  if (!session) return (
    <div className="relative min-h-screen bg-base-200">

      {/* Fondo */}
  

      {/* Navbar */}
      <header className="sticky top-0 z-[9999]">
        <HeaderMenu />
      </header>

      {/* Contenido */}
      <main className="relative z-10 flex items-center justify-center p-6 min-h-[calc(100vh-80px)]">
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
        <div className="card lg:card-side bg-base-/50 backdrop-blur-md shadow-2xl w-full max-w-6xl overflow-hidden">

          {/* Left Side */}
          <div className=" bg-base-100/50 text-neutral-content lg:w-1/2 p-10 flex flex-col justify-between">
          
            <div>

              <div className="avatar placeholder mb-6">
                    <div className="fixed inset-0 z-0 pointer-events-none">
       
      </div>
                <div className="bg-primary-100/50 text-primary-content rounded-xl w-14">
            
                  <span className="text-xl font-bold">
                RR
                  </span>
                </div>
              </div>

              <h1 className="text-4xl font-bold leading-tight">
               
      
              </h1>

              <p className="mt-4 opacity-80">
                Connect analytics, monitor events and visualize metrics
                from a single dashboard.
              </p>
            </div>

            <div className="stats bg-base-100 text-base-content shadow mt-8">
              <div className="stat">
                <div className="stat-title">
                  Active Users
                </div>

                <div className="stat-value">
                  1,245
                </div>

                <div className="stat-desc">
                  ↗︎ 12% this month
                </div>
              </div>
            </div>

          </div>

          {/* Right Side */}
          <div className="card-body lg:w-1/2 p-10">
            <div className="max-w-md mx-auto w-full">

              <h2 className="text-3xl font-bold">
                Sign In
              </h2>

              <p className="text-base-content/70 mt-2">
                Welcome back! Please enter your details.
              </p>

              <div className="grid gap-3 mt-8">
                
                <button className="btn btn-outline" 
                onClick={() => signIn("google")}>
                  <FaGoogle />
                  Continue with Google
                </button>
              </div>

              <div className="divider">
                OR CONTINUE WITH EMAIL
              </div>

              <form className="space-y-4" onSubmit={handleEmailLogin}>

                {error && (
                  <div className="alert alert-error text-sm py-2">
                    {error}
                  </div>
                )}

                <div>
                  <label className="label">
                    <span className="label-text">
                      Email
                    </span>
                  </label>

                  <input
                    type="email"
                    placeholder="correo@empresa.com"
                    className="input input-bordered w-full"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div>
                  <label className="label">
                    <span className="label-text">
                      Password
                    </span>
                  </label>

                  <input
                    type="password"
                    placeholder="********"
                    className="input input-bordered w-full"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>

                <div className="flex justify-between items-center">

                  <label className="label cursor-pointer gap-2">
                    <input
                      type="checkbox"
                      className="checkbox checkbox-sm"
                    />
                    <span className="label-text">
                      Remember me
                    </span>
                  </label>

                  <button
                    type="button"
                    className="link link-primary"
                  >
                    Forgot password?
                  </button>

                </div>

                <button
                  type="submit"
                  className="btn btn-primary w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Signing in..." : "Sign In"}
                </button>

              </form>

              <p className="text-center mt-6">
                Don&apos;t have an account?{" "}
                <button
                  type="button"
                  className="link link-primary"
                >
                  Sign Up
                </button>
              </p>

            </div>
          </div>

        </div>
      </main>

    </div>
  );
}
