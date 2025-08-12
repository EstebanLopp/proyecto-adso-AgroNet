// Importa el pool de conexiones desde la configuración de la base de datos
const pool = require('../config/db');

// 📌 Función para registrar un usuario en la base de datos
const registerUser = async (req, res) => {
    // Extrae los datos enviados en el cuerpo de la petición
    const { name, email, phone, password } = req.body;

    try {
        // Ejecuta una consulta SQL para insertar el nuevo usuario en la base de datos
        const [result] = await pool.query(
            'INSERT INTO user (name, email, phone, password) VALUES (?, ?, ?, ?)',
            [name, email, phone, password] // Valores que se insertarán en la consulta
        );

        // Responde con un código 201 (creado) y devuelve el usuario registrado con su nuevo ID
        res.status(201).json({ id: result.insertId, name, email, phone, password });

    } catch (error) {
        // Manejo de errores en caso de fallo en la inserción de datos
        console.error('❌ Error insertando usuario:', error);
        res.status(500).json({ error: 'Error al registrar usuario' });
    }
};

// 📌 Función para obtener todos los usuarios de la base de datos
const getUsers = async (req, res) => {
    try {
        // Ejecuta una consulta SQL para obtener todos los usuarios
        const [results] = await pool.query('SELECT * FROM user');

        // Envía la lista de usuarios como respuesta en formato JSON
        res.json(results);

    } catch (error) {
        // Manejo de errores en caso de fallo en la consulta
        console.error('❌ Error obteniendo usuarios:', error);
        res.status(500).json({ error: 'Error al obtener usuarios' });
    }
};

// Exporta las funciones para que puedan ser usadas en otros archivos
module.exports = { registerUser, getUsers };
