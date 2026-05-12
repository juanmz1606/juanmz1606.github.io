# Portafolio — Juan Esteban Meza Buitrago

Portafolio personal desarrollado con React + TypeScript + Vite. Muestra proyectos académicos y profesionales con detalle de stack, arquitectura, funcionalidades e imágenes.

## Stack

- React 18 + TypeScript
- React Router v6
- Vite
- CSS modular con variables compartidas

## Estructura

src/
├── assets/
│   └── projects/        # Imágenes de cada proyecto
├── components/
│   ├── TechTag.tsx      # Tag de tecnología reutilizable
│   └── RepoLinks.tsx    # Links de repositorios (simple o múltiple)
├── data/
│   └── projects.ts      # Datos e interfaz de proyectos
├── pages/
│   ├── Home.tsx         # Listado de proyectos
│   └── ProjectDetail.tsx # Detalle de proyecto con carrusel
└── styles/
├── variables.css    # Tokens de diseño globales
├── home.css
└── projectDetail.css

## Desarrollo local

```bash
npm install
npm run dev
```

## Agregar un proyecto

Edita `src/data/projects.ts` y agrega una entrada al array `projects` siguiendo la interfaz `Project`. Las imágenes van en `src/assets/projects/<slug>/`.

## Deploy

El sitio se despliega automáticamente en GitHub Pages via GitHub Actions al hacer push a `main`. El workflow está en `.github/workflows/deploy.yml`.