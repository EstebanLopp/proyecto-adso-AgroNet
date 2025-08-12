const registerUser = async (req, res) => {
    const { name, email, phone, password } = req.body;

    console.log(req.body); // Verifica qué datos se están recibiendo

    if (!password) {
        return res.status(400).json({ error: 'La contraseña es obligatoria' });
    }
}