// Función para enviar una solicitud POST al servidor backend
async function postData(url = '', data = {}) {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
  
    return response.json();
  }
  
  // Evento de envío del formulario de inicio de sesión
  const loginForm = document.getElementById('loginForm');
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    postData('/login', { username, password })
      .then((data) => {
        // Lógica de manejo de respuesta del backend
        console.log(data);
        // Redireccionar a la página de administración (admin.html) si el inicio de sesión es exitoso
      })
      .catch((error) => {
        console.error('Error:', error);
        // Mostrar mensaje de error en el inicio de sesión
      });
  });
  
  // Evento de envío del formulario de edición de contenido
  const editForm = document.getElementById('editForm');
  editForm.addEventListener('submit', (e) => {
    e.preventDefault();
  
    const perfilDesc = document.getElementById('perfilDesc').value;
    const proyecto1 = document.getElementById('proyecto1').value;
    const proyecto1Desc = document.getElementById('proyecto1Desc').value;
    const proyecto2 = document.getElementById('proyecto2').value;
    const proyecto2Desc = document.getElementById('proyecto2Desc').value;
  
    const data = {
      perfilDesc,
      proyectos: [
        { nombre: proyecto1, descripcion: proyecto1Desc },
        { nombre: proyecto2, descripcion: proyecto2Desc }
      ]
    };
  
    postData('/editar', data)
      .then((response) => {
        // Lógica de manejo de respuesta del backend
        console.log(response);
        // Mostrar mensaje de éxito en la edición del contenido
      })
      .catch((error) => {
        console.error('Error:', error);
        // Mostrar mensaje de error en la edición del contenido
      });
  });
  