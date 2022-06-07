const emailLogin = document.querySelector('#email-login');
const passwordLogin = document.querySelector('#password-login');
const buttonLogin = document.querySelector('#button-login');

function validadeEmail() {
  const email = emailLogin.input;
  console.log(email);
  if (email === 'tryber%40teste.com') {
    console.log('passou email');
    return true;
  } console.log('não passou email');
}

function validadePassord() {
  if (passwordLogin.input === '123456') {
    console.log('passou senha');
    return true;
  } console.log('não passou senha');
}

function returnLogin() {
  if (validadeEmail() && validadePassord()) {
    return alert('Olá Tryber!');
  } return alert('Email ou senha inválidos');
}

buttonLogin.addEventListener('click', returnLogin());
