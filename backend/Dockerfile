FROM node:18-alpine

WORKDIR /app

# Copia los archivos de dependencias
COPY package*.json ./

# Instala todas las dependencias (incluyendo las de desarrollo)
RUN npm install

# Copia el resto del código
COPY . .

EXPOSE 3500
CMD ["node", "server.js"]