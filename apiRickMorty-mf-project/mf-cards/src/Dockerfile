# Crear una imagen de docker

# definir una imagen de docker, en este caso usaremos la de node (https://hub.docker.com/_/node) ya que esta será la imagen base sobre la que vamos a contruir todo. (alpine es un sistema linux execivamente reducido y ligero que precisamente es para no agregar mucho peso a las imágenes de docker)
# FROM baseImage
FROM node:18.0.0-alpine

# correr el comando RUN que va a ejecutar ciertas instrucciones:
# RUN command
# crear el directorio /app
RUN mkdir app

# generar un directorio de trabajo donde /app es una carpeta que se va a crear dentro del contenedor de linux (como si tuviera una máquina virtual linux se va a crear esa carpeta app)
WORKDIR /app

# hacer una copia del package.json en la carpeta app
COPY ./package.json .

# para reconstruir los módulos de node
RUN npm i

# el comando COPY (y va de ./ a .) es decir que ./ dice que todo lo que está en este directorio (carpeta del microfrontend), menos lo que está en el .dockerignore, los va a copiar directamente en lo que es el Dockerfile (hacia mi contenedor que es el directorio de trabajo app, es decir que el punto viene a ser ese directorio de tabajo que es app)
COPY ./ .

# para compilar
RUN npm run build

# http-server es para levantar servidores HTTP de forma rápida y con la configuración hecha vamos a exponer esos servidores
RUN npm i http-server

# exponer los módulos que en este caso será el puerto 8083 (porque estamos en el mf-cards)
EXPOSE 8083
# definir el comando que toma el control de mi contenedor (dist viene a ser la carpeta compilada)
CMD ["http-server", "dist", "-p", "8083"]