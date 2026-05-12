import restaurantHero from "../assets/projects/restaurant/hero.png";
import restaurantGallery1 from "../assets/projects/restaurant/ingredientes.png";
import restaurantGallery2 from "../assets/projects/restaurant/ordenes.png";
import restaurantGallery3 from "../assets/projects/restaurant/docker.png";
import rafflesHero from "../assets/projects/raffles/hero.png";
import rafflesGallery1 from "../assets/projects/raffles/inicio.png";
import rafflesGallery2 from "../assets/projects/raffles/privado.png";
import rafflesGallery3 from "../assets/projects/raffles/publica.png";
import cemeteryHero from "../assets/projects/cemetery/hero.png";
import cemetery1 from "../assets/projects/cemetery/cuerpos.png";
import cemetery2 from "../assets/projects/cemetery/distribucion.png";
import cemetery3 from "../assets/projects/cemetery/eventos-cuerpo.png";
import cemetery4 from "../assets/projects/cemetery/reporte.png";

interface Repository {
  name: string;
  url: string;
}

interface Documentation {
  technicalManual?: string;
  demoVideo?: string;
}

export interface Project {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  features: string[];
  stack: string[];
  academic?: boolean;
  role?: string;
  learnings?: string[];
  github?: string;
  repositories?: Repository[];
  architecture?: string;
  documentation?: Documentation;
  image?: string;
  gallery?: string[];
  date?: string;
  url?: string;
}

export const projects: Project[] = [
  {
    slug: "restaurant-management",
    title: "Restaurant Management System",
    role: "Desarrollador Full Stack · Proyecto académico individual",
    shortDescription:
      "Sistema de gestión para restaurantes con control de stock, recetas, empleados y órdenes.",
    description: `Proyecto académico full stack desarrollado para administrar un restaurante, permitiendo gestionar ingredientes, recetas, empleados y órdenes. Incluye lógica de negocio en backend para validación y descuento automático de stock al crear órdenes.`,
    features: [
      "CRUD de ingredientes con control de stock",
      "Recetas con múltiples ingredientes y cantidades",
      "Órdenes asociadas a empleados",
      "Descuento automático de stock al crear órdenes",
      "Validación de stock antes de guardar órdenes",
      "Uso de transacciones en MongoDB",
    ],
    learnings: [
      "Diseño de lógica de negocio real",
      "Relaciones entre colecciones en MongoDB",
      "Uso de Mongoose con NestJS",
      "Manejo de entornos con Docker",
    ],
    stack: [
      "NestJS",
      "MongoDB",
      "Mongoose",
      "React",
      "Vite",
      "Tailwind CSS",
      "Docker",
    ],
    github: "https://github.com/juanmz1606/restaurant_project_docker.git",
    image: restaurantHero,
    gallery: [restaurantGallery1, restaurantGallery2, restaurantGallery3],
    date: "2026-01",
  },
  {
    slug: "rifas-echeverry",
    title: "Rifas Echeverry Distribuidora",
    role: "Desarrollador Full Stack · Freelance para Echeverry Distribuidora",
    shortDescription:
      "Plataforma completa de rifas con panel de administración, gestión de tickets y flujo de reserva pública integrado con WhatsApp.",
    description: `Sistema full stack desarrollado para Echeverry Distribuidora, permitiendo gestionar rifas, tickets y clientes desde un panel de administración, mientras los clientes pueden reservar números públicamente desde la web. El backend expone una API REST con autenticación JWT, subida de imágenes a Cloudinary y registro de auditoría completo. El frontend público incluye carrusel de rifas destacadas, countdown al sorteo y una grilla interactiva de tickets con actualización automática cada 30 segundos.`,
    architecture:
      "Arquitectura cliente-servidor desacoplada. Backend en Railway expone una API REST con NestJS. Frontend en Vercel consume la API mediante Axios con interceptor JWT. Base de datos PostgreSQL en Supabase con ORM Prisma. Imágenes gestionadas en Cloudinary.",
    features: [
      "Grilla interactiva de selección de tickets con polling cada 30 segundos",
      "Flujo de reserva pública con apertura automática de WhatsApp",
      "Panel de administración con gestión completa de rifas, tickets y clientes",
      "Carrusel de rifas destacadas y countdown al sorteo",
      "Subida y gestión de imágenes por rifa via Cloudinary",
      "Historial de auditoría con estado antes/después de cada cambio",
      "Autenticación JWT con interceptor automático en el cliente",
      "Configuración 3 o 4 cifras por rifa, slugs autogenerados",
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "NestJS",
      "PostgreSQL",
      "Prisma",
      "Supabase",
      "Cloudinary",
      "JWT",
      "TailwindCSS",
      "Vercel",
      "Railway",
    ],
    url: "https://rifasecheverry.com",
    image: rafflesHero,
    gallery: [rafflesGallery1, rafflesGallery2, rafflesGallery3],
    date: "2026-04",
  },
  {
    slug: "cemetery-management",
    title: "Sistema de Gestión Integral de Cementerios",
    role: "Desarrollador Backend · Proyecto académico en equipo",
    academic: true,

    shortDescription:
      "Plataforma académica para la gestión integral de cementerios, con administración de nichos, registro de cuerpos, generación de reportes y control de acceso por roles.",

    description: `Proyecto académico full stack desarrollado en equipo para la gestión integral de cementerios. El sistema centraliza la información relacionada con cuerpos inhumados, nichos de custodia y documentación asociada, facilitando la administración, consulta y generación de reportes. La solución fue diseñada bajo una arquitectura de microservicios, permitiendo separar responsabilidades como la gestión del dominio del cementerio, la autenticación de usuarios y la generación de documentos y estadísticas. El proyecto contempló la integración de módulos de inteligencia artificial para la digitalización de documentos físicos, aunque su implementación quedó en una fase experimental y de investigación académica.`,
    architecture:
      "Arquitectura basada en microservicios independientes que se comunican mediante APIs REST. Cada servicio aborda una responsabilidad específica, garantizando escalabilidad, mantenibilidad y separación clara de responsabilidades.",

    features: [
      "Registro y gestión de cuerpos inhumados",
      "Administración y asignación de nichos de custodia",
      "Visualización del estado del cementerio por ocupación de nichos",
      "Generación de estadísticas relacionadas con ocupación y movimientos",
      "Generación y descarga de reportes en formato PDF",
      "Gestión documental asociada a la actividad del cementerio",
      "Autenticación de usuarios mediante JWT",
      "Gestión de roles y permisos (administrador y empleado)",
    ],

    stack: [
      "React",
      "Spring Boot",
      "Java",
      "MySQL",
      "Docker",
      "JWT",
      "APIs REST",
    ],

    repositories: [
      {
        name: "Frontend – Interfaz Web",
        url: "https://github.com/AlejandroMesaR/frontCemeteryProject-management.git",
      },
      {
        name: "Microservicio – Gestión del Cementerio",
        url: "https://github.com/Magaca78/cemeteryProject-management.git",
      },
      {
        name: "Microservicio – Documentos y Reportes",
        url: "https://github.com/juanmz1606/cemeteryProject-ReportsGeneration.git",
      },
      {
        name: "Microservicio – Autenticación y Roles",
        url: "https://github.com/AlejandroMesaR/cemeteryProject-UserAuth.git",
      },
    ],
    documentation: {
      technicalManual: "https://drive.google.com/file/d/1Z7QryuztpJrSaWkDeHG2HE8UYoA6mVX1/view?usp=sharing",
      demoVideo: "https://drive.google.com/file/d/1xoXVXqdpZ-39WiroHRClgJAneiOnseHT/view?usp=sharing",
    },
    image: cemeteryHero,
    date: "2025-06",
    gallery: [cemetery1, cemetery2, cemetery3, cemetery4],
  },
];
