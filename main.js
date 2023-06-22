  // Comprobación de inicio de sesión
  function checkLogin() {
    var isLoggedIn = sessionStorage.getItem('isLoggedIn');
    if (isLoggedIn === 'true') {
      showEditableContent();
    }
  }

  // Mostrar contenido editable
  function showEditableContent() {
    // Aquí puedes habilitar la edición del contenido
    // por ejemplo, mostrando botones de edición y áreas de texto editables
    console.log('Mostrando contenido editable');
  }

  // Función para iniciar sesión
  function login() {
    var password = prompt('Ingresa tu contraseña:');
    // Aquí puedes realizar la validación de contraseña
    if (password === 'contraseña_secreta') {
      sessionStorage.setItem('isLoggedIn', 'true');
      showEditableContent();
    } else {
      alert('Contraseña incorrecta. Inténtalo nuevamente.');
    }
  }

  // Evento de clic para el botón de inicio de sesión
  document.getElementById('loginBtn').addEventListener('click', login);

  // Comprobar el inicio de sesión al cargar la página
  checkLogin();