# 🛡️ RangersRoot - Plataforma de Seguridad Informática

<div align="center">
  
  ![RangersRoot Banner](https://img.shields.io/badge/RangersRoot-Seguridad%20Informática-purple?style=for-the-badge&logo=security&logoColor=white)
  
  [![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js&logoColor=white)](https://nextjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
  [![NextAuth](https://img.shields.io/badge/NextAuth-4.0-green?style=flat-square&logo=next.js&logoColor=white)](https://next-auth.js.org/)
  [![DaisyUI](https://img.shields.io/badge/DaisyUI-4.0-purple?style=flat-square&logo=daisyui&logoColor=white)](https://daisyui.com/)
  
</div>

## 📋 Tabla de Contenidos

- [🚀 Descripción](#-descripción)
- [✨ Características](#-características)
- [🛠️ Tecnologías](#️-tecnologías)
- [📦 Instalación](#-instalación)
- [⚙️ Configuración](#️-configuración)
- [🎯 Uso](#-uso)
- [📁 Estructura del Proyecto](#-estructura-del-proyecto)
- [🤝 Contribución](#-contribución)
- [📄 Licencia](#-licencia)

---

## 🚀 Descripción

**RangersRoot** es una plataforma web dedicada a la **seguridad informática**, **hacking ético** y **desarrollo de software**. El proyecto ofrece recursos curados, tutoriales y herramientas para la comunidad de ciberseguridad.

### 🎯 Objetivo
Crear un espacio donde los entusiastas de la seguridad informática puedan:
- 🔍 Descubrir recursos de hacking ético
- 📚 Aprender sobre ciberseguridad
- 🛠️ Acceder a herramientas especializadas
- 👥 Conectar con una comunidad de expertos

---

## ✨ Características

### 🔐 Autenticación
- ✅ **Login con Google** usando NextAuth.js
- ✅ **Sesiones JWT** seguras
- ✅ **Protección de rutas** con middleware
- ✅ **Cierre de sesión** seguro

### 🎨 Interfaz de Usuario
- 🎯 **Tour interactivo** con Driver.js
- 🌈 **Temas oscuros** con DaisyUI
- 📱 **Diseño responsive** para todos los dispositivos
- ✨ **Animaciones y transiciones** suaves
- 🎨 **Fondos con MagicRings**

### 📚 Recursos de Seguridad
- 🗂️ **20+ recursos** de hacking y seguridad
- 🏷️ **Categorización** por tipo de recurso
- 🔗 **Enlaces directos** a plataformas externas
- 📊 **Paginación** para mejor navegación
- 🎯 **Cards interactivas** con información detallada

### 🛡️ Dashboard
- 📈 **Estadísticas** de recursos y miembros
- 👤 **Perfil de usuario** con avatar
- 🧭 **Menú lateral** interactivo
- 📄 **Vista paginada** de recursos

---

## 🛠️ Tecnologías

### Frontend
| Tecnología | Versión | Descripción |
|------------|---------|-------------|
| ![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js) | 15 | Framework React con SSR |
| ![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript) | 5.0 | Tipado estático |
| ![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0-38B2AC?style=flat-square&logo=tailwind-css) | 3.0 | Framework CSS |
| ![DaisyUI](https://img.shields.io/badge/DaisyUI-4.0-purple?style=flat-square&logo=daisyui) | 4.0 | Componentes UI |
| ![React Icons](https://img.shields.io/badge/React_Icons-5.0-red?style=flat-square&logo=react) | 5.0 | Biblioteca de iconos |

### Backend & Autenticación
| Tecnología | Versión | Descripción |
|------------|---------|-------------|
| ![NextAuth](https://img.shields.io/badge/NextAuth-4.0-green?style=flat-square&logo=next.js) | 4.0 | Autenticación |
| ![JWT](https://img.shields.io/badge/JWT-8.0-orange?style=flat-square&logo=json-web-tokens) | 8.0 | Tokens seguros |

### Herramientas Adicionales
| Tecnología | Versión | Descripción |
|------------|---------|-------------|
| ![Driver.js](https://img.shields.io/badge/Driver.js-1.0-yellow?style=flat-square) | 1.0 | Tours interactivos |
| ![MagicRings](https://img.shields.io/badge/MagicRings-1.0-pink?style=flat-square) | 1.0 | Fondos animados |

---

## 📦 Instalación

### Prerrequisitos
- Node.js 18+ o Bun 1.0+
- npm, yarn o pnpm
- Cuenta de Google Cloud Platform (para OAuth)

### Pasos de instalación

```bash
# 1. Clonar el repositorio
git clone https://github.com/f5extCorporacion/ragersroot.git

# 2. Entrar al directorio
cd ragersroot

# 3. Instalar dependencias
npm install
# o
yarn install
# o
pnpm install
# o
bun install

# 4. Configurar variables de entorno (ver sección Configuración)
cp .env.example .env.local

# 5. Ejecutar en modo desarrollo
npm run dev
# o
yarn dev
# o
pnpm dev
# o
bun dev
