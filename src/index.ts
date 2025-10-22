// Importa la librería (módulo) 'express'.
// Esto hace que todas las funcionalidades del framework Express estén disponibles.
import express from 'express';

// Crea una instancia de la aplicación Express.
// Esta instancia (app) será el corazón de nuestro servidor web.
// La anotación ': any' se usa típicamente para indicar que el tipo de la variable es dinámico o desconocido.
const app : any = express(); // Crear una instancia Express

// Define una ruta HTTP GET para la URL raíz ('/').
// Cuando un cliente (navegador) accede a la dirección raíz del servidor, se ejecuta esta función.
// (req, res) son los objetos de petición y respuesta, respectivamente.
app.get('/', (req : any, res : any) : void => { // @aldosenati es una anotación de comentario o autor

    // Envía una respuesta al cliente. En este caso, un simple mensaje de texto.
    res.send("Hola SENATI buenas noches");

}); // Cierra la definición de la ruta

// Define el puerto en el que se ejecutará el servidor.
// Intenta usar la variable de entorno 'process.env.PORT' (común en entornos de producción como Netlify o Heroku).
// Si 'process.env.PORT' no está definida, usa el puerto 4000 por defecto (esto es el operador OR lógico '||').
const port : string | 4000 = process.env.PORT || 4000;

// Inicia el servidor para que escuche (listen) las peticiones en el puerto definido.
app.listen(port, () : void => { // La función de callback se ejecuta una vez que el servidor se inicia correctamente

    // Imprime un mensaje en la consola del servidor (no en el navegador del cliente)
    // para confirmar que el servidor está corriendo y en qué puerto.
    console.log(message: "Server running on port", port);

}); // Cierra la función de escucha (listen)

