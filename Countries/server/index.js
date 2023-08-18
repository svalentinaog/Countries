//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
// Importamos los módulos 'server' necesarios
const server = require("./src/server");
const { conn } = require("./src/db.js");
const fetchDB = require("./src/utils/fetchApiData");

const PORT = 3001;

conn
  .sync({ force: false })
  .then(() => {
    server.listen(PORT, async () => {
      console.log(`🐝 Server listening on port ${PORT} 🐝`);
      fetchDB();
    });
  })
  .catch((error) => console.error(error));

// Sincronizamos la base de datos mediante la función 'sync' de Sequelize.
// La opción 'force: false' indica que no se debe forzar la sincronización, es decir, no se eliminarán tablas existentes ni se recrearán y true lo contrario.
// Esta función devuelve una promesa que resuelve cuando la sincronización se ha completado.
// Una vez que la sincronización de la base de datos se ha completado con éxito, iniciamos el servidor para que escuche en el puerto especificado (3001).
// La función 'listen' de 'server' se utiliza para iniciar el servidor de Express y escuchar en el puerto especificado.
// Luego, se muestra un mensaje en la consola indicando que el servidor está escuchando en el puerto.
// También se llama a la función 'fetchDB' para obtener datos de una API externa y cargarlos en la base de datos.
