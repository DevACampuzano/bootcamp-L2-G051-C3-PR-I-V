# Crear un Servidor con node y express

## Requisistos

- tener instalado node o bun

## Configuración

crearemos una carpeta donde contendermo toda le extrucutra del proyecto.

1. abrir carpeta en el visual studio code o su editor de preferencia

2. abrir carpeta desde la terminal

3. para iniciarl el proyecto de node debe ejecutar el siguiente comando en la terminal

```sh
    npm init -y
```

4. instalamos las dependecias requeridas

- [cors]("https://www.npmjs.com/package/cors")

```sh
    npm i cors
```

- [express]("https://www.npmjs.com/package/express")

```sh
    npm i express
```

5. Creamos un archivo `index.js` en la carpeta del proyecto

6. Importamos librerias requeridas

```js
const express = require("express");
const cors = require("cors");
```

7. instanciamos una variable para gestionar una instancia de express

```js
const app = express();
```

8. Configuramos las politicas de los cors

```js
app.use(
  cors({
    // origin: ["http://localhost:5173"],
    // methods: ["GET"],
  })
);
```

9. Creamos nuestras rutas o endpoint

```js
app.get("/", (req, res) => {
  res.json({ msg: "Hello get" });
});

app.post("/", (req, res) => {
  res.json({ msg: "Hello the post" });
});

app.put("/", (req, res) => {
  res.json({ msg: "Hello the put" });
});

app.delete("/", (req, res) => {
  res.json({ msg: "Hello the delete" });
});

app.get("/:name", (req, res) => {
  const name = req.params.name;
  res.send("Hello " + name);
});
```

10. configuramos unra respuesta para las rutas no existentes

```js
app.use((req, res) => {
  res.send("<h1>404 Not Found</h1>");
});
```

11. lanzamos el servidor en el puerto 3000

```js
app.listen(3000, () => {
  console.log("El servidor está corriendo en el http://localhost:3000");
});
```
