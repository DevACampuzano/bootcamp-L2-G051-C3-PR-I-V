# Crear un Servidor con node y express

## Requisistos

- tener instalado node o bun.

## Configuración

crearemos una carpeta donde contendermo toda le extrucutra del proyecto.

1. abrir carpeta en el visual studio code o su editor de preferencia.

2. abrir carpeta desde la terminal.

3. para iniciarl el proyecto de node debe ejecutar el siguiente comando en la terminal.

```sh
    npm init -y
```

4. instalamos las dependecias requeridas.

- [cors]("https://www.npmjs.com/package/cors")

```sh
    npm i cors
```

- [express]("https://www.npmjs.com/package/express")

```sh
    npm i express
```

5. Creamos un archivo `index.js` en la carpeta del proyecto.

6. Creamos la siguiente extructura de carpetas y archivos.

```sh
├── README.md
├── index.js
├── package-lock.json
├── package.json
└── src
    ├── controllers
    ├── middlewares
    ├── models
    │   └── Server.js
    └── routers
```

7. en el achivo `Server.js` importamos las librerias.

```js
const express = require("express");
const cors = require("cors");
```

8. tambien definimos una clase llama `Server`.

```js
class Server {}
```

9. A esa clase le definimos un constructor.

```js
constructor() {
    this.app = express(); // definimos la instacia de express
    this.port = 3000; // definimos el puerto donde correra el servidor

    this.middlewares(); // llamamos a una funcion para configurar los middleware en en la instacia del servidor
  }
```

10. Definimos en la clase una funcion `middlewares` que configura los middleware en nuestro servidor.

```js
  middlewares() {
    this.app.use(cors()); // configuracion de politicas de acceso

    this.app.use(express.json()); // configuracion de lectura de estructura tipo JSON
  }

```

11. Definimos en la clase una funcion `router` que configura y inicia las ruta para nuestro proyectos.

```js
  routes() {
    this.app.get("/", (req, res) => {
      res.send("<h1>Hola Mundo</h1>");
    });
    this.app.use((req, res) => {
      res.send("<h1>404 Not Found</h1>");
    });
  }
```

12. Definimos en la clase una funcion `listen` que ejecuta la funcion `router` y inicia el servidor en el puerto anteriormente configurado.

```js
 listen() {
    this.routes();
    this.app.listen(this.port, () => {
      console.log("Servidor corriendo en http://localhost:" + this.port);
    });
  }
```

13. Exportamos la clase `Server` que definimos al final del archivo.

```js
module.exports = Server;
```

14. Nos dirigimos al archivo `index.js` e importamos la clase `Server`.

```js
const Server = require("./src/models/Server");
```

15. Definimos una variable del tipo de la clase `Server`.

```js
const server = new Server();
```

16. Ejecutamos la funcion `listen` para iniciar nuestro servidor.

```js
server.listen();
```

### Resultado en la terminal

```sh
 npm run dev

> 08-server@1.0.0 dev
> node --watch index.js

Servidor corriendo en http://localhost:3000
```
