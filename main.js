// Función para iniciar sesión
async function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // Realiza una solicitud POST al endpoint de inicio de sesión del backend
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    });
  
    if (response.ok) {
      const data = await response.json();
      const token = data.token;
  
      // Guarda el token en el almacenamiento local (puedes cambiarlo a tu preferencia)
      localStorage.setItem('token', token);
  
      // Redirige a la página de perfil
      window.location.href = '/profile.html';
    } else {
      const error = await response.json();
      console.error(error);
      // Muestra un mensaje de error en la interfaz de usuario
    }
  }
  
  // Función para modificar el perfil
  async function updateProfile() {
    const token = localStorage.getItem('token');
    const newProfileData = {
      // Aquí puedes obtener los datos actualizados del perfil desde el formulario
    };
  
    // Realiza una solicitud PUT al endpoint de modificación de perfil del backend
    const response = await fetch('/api/profile', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token
      },
      body: JSON.stringify(newProfileData)
    });
  
    if (response.ok) {
      // Muestra un mensaje de éxito en la interfaz de usuario
    } else {
      const error = await response.json();
      console.error(error);
      // Muestra un mensaje de error en la interfaz de usuario
    }
  }
  