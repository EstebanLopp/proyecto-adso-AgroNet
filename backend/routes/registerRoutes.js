// Importa Express para manejar las rutas
const express = require('express');

// Crea un enrutador de Express para definir las rutas
const router = express.Router();

// Importa las funciones del controlador de usuarios
const { registerUser, getUsers } = require('../controllers/registerController');

// 📌 Ruta para registrar un nuevo usuario (Método HTTP: POST)
// Cuando un cliente envía una solicitud POST a la raíz ('/'), se ejecuta registerUser
router.post('/', registerUser);

// 📌 Ruta para obtener todos los usuarios (Método HTTP: GET)
// Cuando un cliente envía una solicitud GET a la raíz ('/'), se ejecuta getUsers
router.get('/', getUsers);

// Exporta el enrutador para que pueda ser utilizado en otros archivos
module.exports = router;
