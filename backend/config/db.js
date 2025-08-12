// Configuración de la base de datos
// Conexión con la base de datos
// Este es un ejemplo

const mysql = require('mysql2/promise'); // Usamos pool para mejor manejo de conexiones
require('dotenv').config();

// Esto permite reutilizar conexiones en lugar de crear una nueva cada vez que se necesita acceder a la base de datos.
const pool = mysql.createPool({
    host: process.env.DB_HOST,       // Dirección del servidor de la base de datos
    user: process.env.DB_USER,       // Usuario de la base de datos
    password: process.env.DB_PASSWORD, // Contraseña del usuario
    database: process.env.DB_NAME,   // Nombre de la base de datos
    port: process.env.DB_PORT,       // Puerto de conexión a la base de datos
    waitForConnections: true,        // Espera conexiones en cola si el pool está lleno
    connectionLimit: 10,             // Máximo número de conexiones simultáneas
    queueLimit: 0                    // Número máximo de solicitudes en cola (0 = ilimitado)
});
// Función asincrónica para probar la conexión a la base de datos
const testConnection = async () => {
    try {
        // Intenta obtener una conexión del pool de conexiones
        const connection = await pool.getConnection();
        
        // Si la conexión es exitosa, imprime un mensaje en la consola
        console.log('✅ Conectado a la base de datos');
        
        // Libera la conexión para que pueda ser reutilizada en el pool
        connection.release();
    } catch (error) {
        // Captura y muestra cualquier error que ocurra al intentar conectarse
        console.error('❌ Error en la conexión a la base de datos:', error);
    }
};

testConnection();

module.exports = pool;
