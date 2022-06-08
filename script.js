const emailLogin = document.querySelector('#email-login');
const passwordLogin = document.querySelector('#password-login');
const buttonLogin = document.querySelector('#button-login');
const idAgreement = document.querySelector('#agreement');
const textArea = document.querySelector('#textarea');
const submitBtn = document.querySelector('#submit-btn');
const evaluationForm = document.querySelector('#evaluation-form');

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

// submit Q21
const formData = document.querySelector('#form-data');

// Function Get-name (Name & surname);
function gettingName() {
  const inputName = document.querySelector('#input-name');
  const inputLastname = document.querySelector('#input-lastname');
  const getName = document.querySelector('#get-name');
  getName.innerHTML = `${inputName.value} ${inputLastname.value}`;
}
// function get-email
function gettingMail() {
  const inputEmail = document.querySelector('#input-email');
  const getMail = document.querySelector('#get-email');
  getMail.innerHTML = inputEmail.value;
}
// function selectHouse
function selecHouses() {
  const inputHouse = document.querySelector('#get-house');
  const getHouse = document.querySelector('#house');
  inputHouse.innerHTML = getHouse.value;
}

// function getFamily
function selectFamily() {
  const inputFamily = document.getElementsByName('family');
  const getFamily = document.querySelector('#get-family');
  for (let i = 0; i < inputFamily.length; i += 1) {
    if (inputFamily[i].checked) {
      getFamily.innerHTML = inputFamily[i].value;
    } else;
  }
}

// function selectSubject
function selectSubject() {
  const inputSubject = document.getElementsByName('HoFs');
  const getSubject = document.querySelector('#get-subject');
  const allSubjects = [];
  for (let i = 0; i < inputSubject.length; i += 1) {
    if (inputSubject[i].checked) {
      allSubjects.push(` ${inputSubject[i].value}`);
    } else;
  }
  getSubject.innerHTML = allSubjects;
}

// function selectEvaluation
function selectEvaluation() {
  const inputRate = document.getElementsByName('rate');
  const getEvaluation = document.querySelector('#get-evaluation');
  for (let i = 0; i < inputRate.length; i += 1) {
    if (inputRate[i].checked) {
      getEvaluation.innerHTML = inputRate[i].value;
    } else;
  }
}

// function textAreaInformation
function textAreaInformation() {
  const inputTextArea = document.querySelector('#textarea');
  const getTextArea = document.querySelector('#get-textarea');
  getTextArea.innerHTML = inputTextArea.value;
}
/*
<strong>Observações: </strong><span id="get-textarea"></span> */
submitBtn.addEventListener('click', (event) => {
  evaluationForm.style.display = 'none';
  formData.style.display = 'flex';
  formData.style.flexFlow = 'column nowrap';
  event.preventDefault();
  gettingName();
  gettingMail();
  selecHouses();
  selectFamily();
  selectSubject();
  selectEvaluation();
  textAreaInformation();
});

