
document.addEventListener('DOMContentLoaded', function() {
  loadSession();
}, false);

function login() {
  var user = document.getElementById('user');
  var password = document.getElementById('password');
  var loginError = document.getElementById('login-error');
  loginError.innerHTML = '';
  
  /*
    Aclaración:
    Los usuarios y contraseñas no deben implementarse de esta forma,
    sino que deben alojarse en una base de datos dentro de un servidor.
    Este uso es pura y exclusivamente para fines educativos.
  */
  if (user.value === 'crehana' && password.value === 'crehana123') {
    localStorage.setItem('loggedUser', user.value);
    location.reload();
  } else {
    loginError.innerHTML = 'Usuario o contraseña incorrecta.'
  }
}

function isLogged() {
  return localStorage.getItem('loggedUser') !== null;
}

function loadSession() {
  var loginBtn = document.getElementById('login-btn');
  var logoutBtn = document.getElementById('logout-btn');
  var favoritesBtn = document.getElementById('favorites-btn');
  var listTitle = document.getElementById('list-title');
  if (isLogged()) {
    loginBtn.innerHTML = '';
    logoutBtn.innerHTML = 'Cerrar Sesión';
    favoritesBtn.innerHTML = 'Ver Favoritos';
    listTitle.innerHTML = 'Listado Completo';
  } else {
    loginBtn.innerHTML = 'Iniciar Sesión';
    logoutBtn.innerHTML = '';
    favoritesBtn.innerHTML = '';
  }
}

function logout() {
  localStorage.removeItem('loggedUser');
  location.reload();
}
