<br />
<div align="center">

  <h3 align="center">:sparkles:Sistemas Distribuidos: Tarea 01:sparkles:</h3>

  <p align="center">
    :sparkles:Lucas Almonacid y Benjamín Fernández:sparkles:
  </p>
</div>

## :boom: Descripción

En este presente repositorio se almacena la tarea 1 de sistemas distribuidos y se explica la instalacion junto con informacion necesaria para entender el sistema implementado.

### 🛠 Construído con:


* [Node.js](https://nodejs.org/es/)
* [gRPC](https://grpc.io)
* [Redis](https://redis.io)
* [Postgres](https://www.postgresql.org)
* [Docker](https://www.docker.com)

## Instalación

En primer lugar, se debe de tener claros los pre-requisitos, estas son:

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

Para empezar, el redis se configuro en el archivo "redis.conf" aplicando los siguientes comandos:

* maxmemory 2mb
* maxmemory-policy allkeys-lru

Estos implican que el máximo de memoria que tendrá el cache es de 2Mb y que la política de remoción será el Menos Usada Recientemente (Least Recently Used, LRU). Para explicar que es el LRU, se ocupará la siguiente tabla para compararlo con el Más Usada Recientemente (Most Recently Used, MRU).
<br />
<div align="center">

| LRU | MRU |
| ------------- | ------------- |
| Contenido de la celda  | Contenido de la celda  |

 
</div>


