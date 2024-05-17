# Etapa 1: Instalar dependencias
FROM node:20.12.1-alpine AS deps
WORKDIR /app
COPY package*.json ./
ARG ENVIRONMENT
ENV ENVIRONMENT $ENVIRONMENT
RUN npm install

# Etapa 2: Construir la aplicación
FROM node:20.12.1-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN if [ "$ENVIRONMENT" = "production" ]; then npm run build; else echo "Skipping build for development"; fi

# Etapa 3: Ejecutar la aplicación
FROM node:20.12.1-alpine
WORKDIR /app
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./
COPY --from=builder /app/next.config.mjs ./
RUN echo "Environment: $ENVIRONMENT"
CMD if [ "$ENVIRONMENT" = "production" ]; then npm run start; else npm run dev; fi
