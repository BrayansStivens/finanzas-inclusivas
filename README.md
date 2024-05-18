# Fina Mujer

![Next.js](https://img.shields.io/badge/Next.js-14.2.3-blue.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.4.5-blue.svg)
![Docker](https://img.shields.io/badge/Docker-20.10.7-blue.svg)

Este es un proyecto [Next.js](https://nextjs.org/) iniciado con [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

![Logo de Fina Mujer](./public/assets/logo/fina_mujer_logo.png)  <!-- Asegúrate de reemplazar este comentario con la ruta real de tu logo -->

## Comenzando

### Clonar el Repositorio

Primero, clona el repositorio:

```bash
git clone https://github.com/tu-usuario/fina_mujer.git
cd fina_mujer
```

### Instalación de Dependencias

Para instalar las dependencias, puedes usar npm, yarn, pnpm o bun:

```bash
npm install
# o
yarn install
# o
pnpm install
# o
bun install
```

### Ejecutar el Servidor de Desarrollo

Una vez instaladas las dependencias, ejecuta el servidor de desarrollo:

```bash
npm run dev
# o
yarn dev
# o
pnpm dev
# o
bun dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver el resultado.

Puedes comenzar a editar la página modificando `app/page.tsx`. La página se actualiza automáticamente a medida que editas el archivo.

Este proyecto usa [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) para optimizar y cargar automáticamente Inter, una fuente personalizada de Google.

## Usando Docker

### Construir y Ejecutar el Contenedor Localmente

Para construir y ejecutar el contenedor Docker localmente para desarrollo, utiliza los siguientes comandos:

1. **Construir la imagen Docker:**

```bash
docker-compose -f docker-compose.dev.yml up --build
```

2. **Ejecutar el contenedor Docker:**

El comando anterior también iniciará el contenedor después de construir la imagen. La aplicación será accesible en [http://localhost:3000](http://localhost:3000).

### Construir y Ejecutar el Contenedor para Producción

Para construir y ejecutar el contenedor Docker para producción, utiliza los siguientes comandos:

1. **Construir la imagen Docker:**

```bash
docker-compose -f docker-compose.prod.yml up --build
```

2. **Ejecutar el contenedor Docker:**

El comando anterior también iniciará el contenedor después de construir la imagen. La aplicación será accesible en [http://localhost:3000](http://localhost:3000).

## Tecnologías Utilizadas

- ![Next.js](https://img.shields.io/badge/Next.js-black?style=for-the-badge&logo=next.js&logoColor=white) [Next.js](https://nextjs.org/) - Framework de React para aplicaciones web.
- ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) [TypeScript](https://www.typescriptlang.org/) - Lenguaje de programación que se basa en JavaScript.
- ![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white) [Docker](https://www.docker.com/) - Plataforma para desarrollar, enviar y ejecutar aplicaciones dentro de contenedores.
- ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) [React](https://reactjs.org/) - Biblioteca de JavaScript para construir interfaces de usuario.
- ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) [Node.js](https://nodejs.org/) - Entorno de ejecución para JavaScript.
- ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white) [TailwindCSS](https://tailwindcss.com/) - Framework de CSS para un desarrollo rápido de interfaces.
- ![NextUI](https://img.shields.io/badge/NextUI-%233a74df.svg?style=for-the-badge&logo=next.js&logoColor=white) [NextUI](https://nextui.org/) - Biblioteca de componentes UI para aplicaciones Next.js.
