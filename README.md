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

## :shipit: Instalación

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
| ------------------------------------------------- | ------------------------------------------------- |
| En LRU los elementos que salen del cache son los que menos se repiten en el cache recientemente | En el caso de MRU, los elementos que salen del cache son los que más ocupados recientemente  |

</div>

### :key: Query

La query fue aplicada directa en el navegador el localhost:8080. La query sirve para buscar, dado un string, algún elemento del inventario.
```curl
http://localhost:8080/inventory/search?q=Mens
```
Los elementos de esta query son:
* METODO: GET
* KEY: q
* VALUE: \<palabra a buscar\>

Al aplicar esta query se obtiene el siguiente resultado

![imagen_2022-05-02_220837110](https://user-images.githubusercontent.com/90724923/166394947-ae22fb1e-34aa-41e3-88ae-5136b32acb14.png)
