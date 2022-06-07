const emailLogin = document.querySelector('#email-login');
const passwordLogin = document.querySelector('#password-login');
const buttonLogin = document.querySelector('#button-login');

// validation
function returnLogin() {
  const email = emailLogin.value;
  const passVali = passwordLogin.value;
  console.log(email);
  console.log(passVali);

  if (email === 'tryber@teste.com' && passVali === '123456') {
    alert('Olá, Tryber!');
  } else alert('Email ou senha inválidos.');
}
buttonLogin.addEventListener('click', returnLogin);
