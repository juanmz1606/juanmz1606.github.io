export const projects = [
  {
    slug: "restaurant-management",
    title: "Restaurant Management System",
    shortDescription:
      "Sistema de gestión para restaurantes con control de stock, recetas, empleados y órdenes.",
    description: `
Sistema full stack desarrollado para administrar un restaurante,
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
    stack: [
      "NestJS",
      "MongoDB",
      "Mongoose",
      "React",
      "Vite",
      "Tailwind CSS",
      "Docker",
    ],
    github: "https://github.com/juanmz1606/restaurant-management-system",
  },
];
