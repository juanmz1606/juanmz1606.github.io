export const projects = [
  {
    slug: "restaurant-management",
    title: "Restaurant Management System",
    role: "Desarrollador Full Stack",
    shortDescription:
      "Sistema de gestión para restaurantes con control de stock, recetas, empleados y órdenes.",
    description: `
Proyecto académico full stack desarrollado para administrar un restaurante,
permitiendo gestionar ingredientes, recetas, empleados y órdenes.
Incluye lógica de negocio en backend para validación y descuento
automático de stock al crear órdenes.
    `,
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
  },
  {
  slug: "farm-management-api",
  title: "Sistema de Gestión de Granja",
  shortDescription:
    "API backend para gestionar animales, corrales y registrar un histórico de movimientos.",
  description: `
Proyecto técnico desarrollado como parte de un proceso de selección,
orientado a la construcción de una API backend para la gestión básica
de una granja.

El sistema permite administrar animales y corrales, así como registrar
un histórico de movimientos para auditar las operaciones realizadas.
Se implementó una arquitectura modular con separación de responsabilidades
y persistencia de datos mediante ORM.
  `,
  features: [
    "CRUD de animales",
    "CRUD de corrales",
    "Registro de movimientos para auditoría",
    "Persistencia de datos con SQLite",
    "Arquitectura modular con FastAPI",
    "Documentación automática con Swagger",
  ],
  stack: [
    "Python",
    "FastAPI",
    "SQLAlchemy",
    "SQLite",
    "Pydantic",
  ],
  github: "https://github.com/juanmz1606/granja_befree.git",
},
{
  slug: "cemetery-management",
  title: "Sistema de Gestión Integral de Cementerios",
  academic: true,

  shortDescription:
    "Plataforma académica para la gestión integral de cementerios, con administración de nichos, registro de cuerpos, generación de reportes y control de acceso por roles.",

  description: `
Proyecto académico full stack desarrollado en equipo para la gestión integral
de cementerios. El sistema centraliza la información relacionada con cuerpos
inhumados, nichos de custodia y documentación asociada, facilitando la
administración, consulta y generación de reportes.

La solución fue diseñada bajo una arquitectura de microservicios, permitiendo
separar responsabilidades como la gestión del dominio del cementerio, la
autenticación de usuarios y la generación de documentos y estadísticas.

El proyecto contempló la integración de módulos de inteligencia artificial
para la digitalización de documentos físicos, aunque su implementación quedó
en una fase experimental y de investigación académica.
  `,

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
},
];
