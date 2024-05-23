
---

# Finanzas inclusivas

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

### Opciones para Ejecutar el Proyecto

Tienes varias opciones para ejecutar y desarrollar este proyecto. Puedes elegir la que mejor se adapte a tus necesidades.

#### Opción 1: Instalación y Ejecución Manual

Puedes instalar las dependencias y ejecutar el servidor de desarrollo manualmente. Para esto, necesitas tener [Node.js](https://nodejs.org/) y [npm](https://www.npmjs.com/) instalados en tu máquina.

1. **Instalar Dependencias**:

   ```bash
   npm install
   # o
   yarn install
   # o
   pnpm install
   # o
   bun install
   ```

2. **Ejecutar el Servidor de Desarrollo**:

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

#### Opción 2: Usar Docker

Puedes usar Docker para construir y ejecutar el contenedor de desarrollo. Para esto, necesitas tener [Docker](https://www.docker.com/) instalado en tu máquina.

1. **Construir y Ejecutar el Contenedor Localmente**:

   ```bash
   docker-compose -f docker-compose.dev.yml up --build
   ```

   La aplicación será accesible en [http://localhost:3000](http://localhost:3000).

2. **Configuración para Hot Reloading en Docker en Windows**:

   Si estás utilizando Docker en Windows y deseas habilitar el hot reloading, agrega las siguientes variables de entorno en `docker-compose.dev.yml`:

   ```yaml
   environment:
     - CHOKIDAR_USEPOLLING=true
     - WATCHPACK_POLLING=true
     - CHOKIDAR_INTERVAL=1000
   ```

   Estas configuraciones no son obligatorias, pero se recomiendan si experimentas problemas de detección de cambios de archivos. Esto se debe a cómo Docker maneja las notificaciones de cambio de archivos en los volúmenes montados desde Windows. Usar polling asegura que los cambios en los archivos se detecten de manera confiable, permitiendo que el hot reloading funcione como se espera.

3. **Construir y Ejecutar el Contenedor para Producción**:

   ```bash
   docker-compose -f docker-compose.prod.yml up --build
   ```

   La aplicación será accesible en [http://localhost:3000](http://localhost:3000).

#### Opción 3: Usar Dev Container en VS Code

Puedes usar un Dev Container para desarrollar el proyecto en un entorno Dockerizado dentro de VS Code. Para esto, necesitas tener [Visual Studio Code](https://code.visualstudio.com/) y la extensión de [Remote - Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) instaladas.

1. **Abrir el Proyecto en VS Code**.
2. **Instalar la Extensión de Remote - Containers**.
3. **Abrir la Paleta de Comandos (`Ctrl+Shift+P`) y Seleccionar `Remote-Containers: Open Folder in Container...`**.

Esto creará y abrirá el contenedor de desarrollo según la configuración especificada en `.devcontainer/devcontainer.json`.

## Tecnologías Utilizadas

- ![Next.js](https://img.shields.io/badge/Next.js-black?style=for-the-badge&logo=next.js&logoColor=white) [Next.js](https://nextjs.org/) - Framework de React para aplicaciones web.
- ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) [TypeScript](https://www.typescriptlang.org/) - Lenguaje de programación que se basa en JavaScript.
- ![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white) [Docker](https://www.docker.com/) - Plataforma para desarrollar, enviar y ejecutar aplicaciones dentro de contenedores.
- ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) [React](https://reactjs.org/) - Biblioteca de JavaScript para construir interfaces de usuario.
- ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) [Node.js](https://nodejs.org/) - Entorno de ejecución para JavaScript.
- ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white) [TailwindCSS](https://tailwindcss.com/) - Framework de CSS para un desarrollo rápido de interfaces.
- ![NextUI](https://img.shields.io/badge/NextUI-%233a74df.svg?style=for-the-badge&logo=next.js&logoColor=white) [NextUI](https://nextui.org/) - Biblioteca de componentes UI para aplicaciones Next.js.

---
