# Etapa 1: Dependencias
FROM node:20-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN apk update && apk upgrade && apk add --no-cache git openssh && npm install

# Etapa 2: Construcción
FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Etapa 3: Producción
FROM node:20-alpine
WORKDIR /app
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules

# Cambiar permisos y propietario de los archivos y directorios
RUN chown -R node:node /app
RUN chmod -R 755 /app

# Cambiar al usuario node
USER node

# Verificar los permisos
RUN whoami && ls -l /app

RUN npm install --production && npm cache clean --force

# Exponer el puerto 3000
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["npm", "start"]