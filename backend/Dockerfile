# Usamos Node.js oficial como base
FROM node:18

# Establecemos el directorio de trabajo
WORKDIR /app

# Copiamos los archivos de configuración
COPY package*.json ./

# Instalamos dependencias
RUN npm install

# Copiamos el resto del código
COPY . .

# Exponemos el puerto del backend (ajústalo si usas otro)
EXPOSE 3000

# Comando para arrancar el servidor
CMD ["node", "server.js"]
