# Usa la imagen oficial de Node.js
FROM node:14

# Crea un directorio de trabajo
WORKDIR /usr/src/app

# Copia los archivos package.json y package-lock.json
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de los archivos de mi proyecto
COPY . .

# Expone el puerto en el que mi app estara corriendo
EXPOSE 8086

# Define el comando para ejecutar mi app
CMD ["node", "index.js"]
