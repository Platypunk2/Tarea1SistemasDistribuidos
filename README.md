<br />
<div align="center">

  <h3 align="center">Sistemas Distribuidos: Tarea 01</h3>

  <p align="center">
    Lucas Almonacid y Benjamín Fernández
  </p>
</div>

## Descripción

En este presente repositorio se almacena la tarea 1 de sistemas distribuidos y se explica la instalacion junto con informacion necesaria para entender el sistema implementado.

### 🛠 Construído con:


* [Node.js](https://nodejs.org/es/)
* [gRPC](https://grpc.io)
* [Redis](https://redis.io)
* [Postgres](https://www.postgresql.org)
* [Docker](https://www.docker.com)

## Instalación

En primer lugar se debe de tener claros los pre-requisitos, estas son:

### Pre-Requisitos

Tener Docker y Docker Compose instalado
* [Installation Guide](https://docs.docker.com/compose/install/)

### Primeros pasos

Después de haber descargado los archivos del git (usar técnica que más le acomode), se debe de ubicar en la terminal de su SO en la carpeta correspondiente a la aplicación y aplicar el comando:
```curl
docker-compose up
```
Aplicando este comando se habrá creado los contenedores correspondientes y la aplicación estará funcional en el puerto 8080.

## 🤝 Uso

En primer lugar, el redis se configuro con:

* maxmemory 2mb
* 
