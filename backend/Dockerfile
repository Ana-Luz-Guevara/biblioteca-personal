FROM node:18-alpine

WORKDIR /app

# 1. Copia SOLO los archivos de dependencias PRIMERO (para aprovechar caché de Docker)
COPY package.json package-lock.json ./

# 2. Instala dependencias DE PRODUCCIÓN (más ligero)
RUN npm ci --only=production  # Usa 'npm ci' en lugar de 'npm install' para builds confiables

# 3. Copia el resto del código (esto evita reinstalar dependencias si solo cambias el código)
COPY . .

EXPOSE 3500
CMD ["node", "server.js"]