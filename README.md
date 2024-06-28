# Countries

Bienvenido a Countries, una aplicación web que te permite explorar información detallada sobre todos los países.

## Características Principales

- **Exploración de Países**: Explora datos detallados sobre cada país, incluyendo información crucial como su ubicación geográfica, capital y subregión (si aplica), entre otros.

- **Sistema de Filtros Avanzado**: Filtra la lista de países según diferentes criterios, como región, continente y más.

- **Búsqueda Rápida**: Encuentra países específicos de manera rápida y eficiente a través de la barra de búsqueda integrada.

- **Creación de Actividades Turísticas**: Personaliza tu experiencia al crear actividades turísticas para cada país. Por ejemplo, podrías planificar un itinerario detallado para tu próximo viaje.

## Requerimientos

Asegúrate de tener Node.js y npm instalados en tu máquina antes de comenzar. Estos son necesarios para ejecutar tanto el servidor como el cliente de la aplicación.

## Configuración del Proyecto

- **Descarga del Repositorio**: Clona o descarga el repositorio desde [aquí](https://github.com/svalentinaog/Countries.git).

- **Instalación de Dependencias**:

    - Navega a la carpeta `/client` del proyecto y ejecuta `npm install` para instalar las dependencias del cliente (Frontend).

    - Luego, navega a la carpeta `/server/api` y ejecuta `npm install` para instalar las dependencias de la API.

    - Finalmente, ve a la carpeta `/server` y ejecuta `npm install` para instalar las dependencias del servidor (Backend).

- **Configuración del Archivo `.env`**:

    - Crea un archivo `.env` en la ruta `/server/.env` y configura tus credenciales de la base de datos de la siguiente manera:

    ```bash
    DB_USER=usuarioDePostgres
    DB_PASSWORD=passwordDePostgres
    DB_HOST=localhost
    DB_PORT=puertoPostgres
    ```

### 📌 Realizados estos pasos, ya podremos levantar nuestro proyecto

- **Para iniciar el Servidor API**:

    - En la línea de comandos, navega a la carpeta `/server/api`. Una vez allí, ejecuta `npm run api` para correr el API. Deberías ver algo como esto:

    ```
    > server@1.0.0 api
    > echo 'Local API listening on PORT 5000' & json-server --watch api/db.json -p 5000 -q

    'Local API listening on PORT 5000'
    ```

- **Para iniciar el Servidor**:

    - En la línea de comandos, navega a la carpeta `/server`. Una vez allí, ejecuta `npm run server` para correr el servidor. Deberías ver algo como esto:
    
    ```
    > server@1.0.0 server
    > nodemon index.js

    [nodemon] 2.0.22
    [nodemon] to restart at any time, enter `rs`
    [nodemon] watching path(s): *.*
    [nodemon] watching extensions: js,mjs,json
    [nodemon] starting `node index.js`
    🐝 Server listening on port 3001 🐝
    ```

- **Para iniciar el Cliente**:

    - En la línea de comandos, navega a la carpeta `/client`. Una vez allí, ejecuta `npm run dev` para correr el cliente. Deberías ver algo como esto:

    ```
    > client@0.0.0 dev
    > vite


    VITE v4.3.5  ready in 862 ms

    ➜  Local:   http://localhost:5173/
    ➜  Network: use --host to expose
    ➜  press h to show help
    ```

- **Explora la Aplicación**: Abre tu navegador y visita la URL local donde se está ejecutando la aplicación (por ejemplo: `http://localhost:5173/`). Si no estás seguro de la URL exacta, verifica la consola o la configuración local.

---

### Esperamos que disfrutes explorando el mundo a través de Countries. ¡Feliz viaje! 🌍✈️
