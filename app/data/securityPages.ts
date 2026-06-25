// data/securityPages.ts
export interface SecurityPage {
  id: number;
  name: string;
  link: string;
  icon: string; // Nombre del icono de react-icons
  detail: string;
}

export const securityPages: SecurityPage[] = [
  {
    id: 1,
    name: "HackTheBox",
    link: "https://www.hackthebox.com",
    icon: "FaServer",
    detail: "Plataforma de pentesting con máquinas vulnerables para practicar hacking ético y CTF."
  },
  {
    id: 2,
    name: "TryHackMe",
    link: "https://tryhackme.com",
    icon: "FaShieldAlt",
    detail: "Aprendizaje interactivo de ciberseguridad con laboratorios y desafíos guiados."
  },
  {
    id: 3,
    name: "OWASP",
    link: "https://owasp.org",
    icon: "FaGlobe",
    detail: "Fundación internacional para mejorar la seguridad del software con recursos y herramientas."
  },
  {
    id: 4,
    name: "Kali Linux",
    link: "https://www.kali.org",
    icon: "FaLinux",
    detail: "Distribución Linux especializada en pruebas de penetración y seguridad informática."
  },
  {
    id: 5,
    name: "Metasploit",
    link: "https://www.metasploit.com",
    icon: "FaCode",
    detail: "Framework de pruebas de penetración con exploits y herramientas de seguridad."
  },
  {
    id: 6,
    name: "Wireshark",
    link: "https://www.wireshark.org",
    icon: "FaNetworkWired",
    detail: "Analizador de protocolos de red para capturar y examinar tráfico en tiempo real."
  },
  {
    id: 7,
    name: "Burp Suite",
    link: "https://portswigger.net/burp",
    icon: "FaBug",
    detail: "Plataforma de pruebas de seguridad para aplicaciones web con interceptación de peticiones."
  },
  {
    id: 8,
    name: "Nmap",
    link: "https://nmap.org",
    icon: "FaSearch",
    detail: "Herramienta de escaneo de puertos y descubrimiento de redes para auditorías."
  },
  {
    id: 9,
    name: "Security Weekly",
    link: "https://securityweekly.com",
    icon: "FaPodcast",
    detail: "Podcast y noticias sobre seguridad informática, hacking y ciberseguridad."
  },
  {
    id: 10,
    name: "The Hacker News",
    link: "https://thehackernews.com",
    icon: "FaNewspaper",
    detail: "Noticias diarias sobre ciberseguridad, vulnerabilidades y ataques informáticos."
  },
  {
    id: 11,
    name: "Dark Reading",
    link: "https://www.darkreading.com",
    icon: "FaBook",
    detail: "Portal de noticias enfocado en ciberseguridad, riesgos y tecnologías de protección."
  },
  {
    id: 12,
    name: "SecurityTrails",
    link: "https://securitytrails.com",
    icon: "FaMap",
    detail: "Herramienta de inteligencia de amenazas y análisis de dominios y subdominios."
  },
  {
    id: 13,
    name: "Shodan",
    link: "https://www.shodan.io",
    icon: "FaEye",
    detail: "Motor de búsqueda para dispositivos conectados a internet y análisis de superficies."
  },
  {
    id: 14,
    name: "CISO Series",
    link: "https://cisoseries.com",
    icon: "FaUsers",
    detail: "Podcast y recursos para líderes de seguridad y directores de seguridad informática."
  },
  {
    id: 15,
    name: "DefCon",
    link: "https://defcon.org",
    icon: "FaSkull",
    detail: "Conferencia anual de hackers más grande del mundo con charlas y competiciones."
  },
  {
    id: 16,
    name: "Black Hat",
    link: "https://blackhat.com",
    icon: "FaHatCowboy",
    detail: "Conferencia internacional de seguridad con presentaciones de expertos en hacking."
  },
  {
    id: 17,
    name: "SANS Institute",
    link: "https://www.sans.org",
    icon: "FaGraduationCap",
    detail: "Entrenamiento y certificaciones en ciberseguridad con cursos especializados."
  },
  {
    id: 18,
    name: "VulnHub",
    link: "https://www.vulnhub.com",
    icon: "FaDownload",
    detail: "Repositorio de máquinas virtuales vulnerables para practicar pentesting."
  },
  {
    id: 19,
    name: "Exploit Database",
    link: "https://www.exploit-db.com",
    icon: "FaDatabase",
    detail: "Base de datos de exploits y vulnerabilidades para investigación y pruebas."
  },
  {
    id: 20,
    name: "HackerOne",
    link: "https://www.hackerone.com",
    icon: "FaTrophy",
    detail: "Plataforma de bug bounty que conecta empresas con hackers éticos para encontrar vulnerabilidades."
  }
];