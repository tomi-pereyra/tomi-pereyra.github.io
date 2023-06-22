const express = require('express');
const app = express();
const port = 3000;

// Configuración de Express.js
app.use(express.static('public'));
app.use(express.json());

// Ruta para el inicio de sesión
app.post('/login', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  // Lógica de verificación de credenciales de inicio de sesión
  // Aquí debes implementar tu lógica de autenticación

  if (username === 'tu_usuario' && password === 'tu_contraseña') {
    res.json({ success: true, message: 'Inicio de sesión exitoso' });
  } else {
    res.status(401).json({ success: false, message: 'Credenciales incorrectas' });
  }
});

// Ruta para la edición de contenido
app.post('/editar', (req, res) => {
  const perfilDesc = req.body.perfilDesc;
  const proyectos = req.body.proyectos;

  // Lógica de actualización de contenido
  // Aquí debes implementar tu lógica para guardar los datos recibidos en una base de datos u otro medio de almacenamiento

  res.json({ success: true, message: 'Contenido actualizado' });
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
