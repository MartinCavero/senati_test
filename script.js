import express from 'express';
// Importa el módulo 'express' para crear un servidor web fácilmente.

const app = express();
// Crea una instancia de aplicación Express que servirá como el servidor principal.

app.get('/', (req, res) => {
// Define una ruta GET en la raíz ('/'). Cuando alguien accede al servidor, esta función se ejecuta.
    res.send({ body: "Hola SENATI buenas noches" });
    // Envía una respuesta JSON al cliente con el mensaje "Hola SENATI buenas noches".
});

const port = process.env.PORT || 4000;
// Define el puerto del servidor. Usa el puerto de entorno (si existe) o el 4000 por defecto.

app.listen(port, () => {
// Inicia el servidor y lo pone a escuchar en el puerto especificado.
    console.log("Server running on port 4000");
    // Muestra en la consola un mensaje indicando que el servidor está corriendo en el puerto 4000.
});
