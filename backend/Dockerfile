# Usa una imagen base de Node.js
FROM node:16

# Establece el directorio de trabajo en el contenedor
WORKDIR /app

# Copia el archivo package.json y package-lock.json
COPY package*.json ./

# Instala las dependencias
RUN npm i

# Copia el resto de los archivos de la aplicación
COPY . .

# Expone el puerto en el que la aplicación se ejecutará
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD ["npm", "start"]