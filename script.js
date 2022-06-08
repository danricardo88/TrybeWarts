const emailLogin = document.querySelector('#email-login');
const passwordLogin = document.querySelector('#password-login');
const buttonLogin = document.querySelector('#button-login');
const idAgreement = document.querySelector('#agreement');
const submitBtn = document.querySelector('#submit-btn');
const textArea = document.querySelector('#textarea');

// validation
function returnLogin() {
  const email = emailLogin.value;
  const passVali = passwordLogin.value;

  if (email === 'tryber@teste.com' && passVali === '123456') {
    alert('Olá, Tryber!');
  } else alert('Email ou senha inválidos.');
}
buttonLogin.addEventListener('click', returnLogin);

// preventDefault function

idAgreement.addEventListener('click', (event) => {
  if (!idAgreement.checked) {
    event.preventDefault();
  } else {
    submitBtn.disabled = false;
  }
});

// counter textArea

const countText = () => {
  const countdown = 500;
  const counter = document.getElementById('counter');
  const totalCharacters = textArea.value.length;
  const counting = countdown - totalCharacters;
  counter.innerHTML = counting;
};

textArea.addEventListener('keyup', countText);
