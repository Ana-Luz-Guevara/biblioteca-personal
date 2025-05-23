# Base con un servidor HTTP liviano
FROM node:18

# Crear directorio de trabajo
WORKDIR /app

COPY . .

# Instalar un servidor estático para servir HTML (por ejemplo, `serve`)
RUN npm install -g serve

# Exponer el puerto en el que serviremos el frontend
EXPOSE 5000

# Servir el HTML
CMD ["serve", ".", "-l", "5000"]
