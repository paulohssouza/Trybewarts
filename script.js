const inputEmail = document.getElementById('email');
const inputPassword = document.getElementById('password');
const btnLogin = document.getElementById('btn-login');
const checkAgreement = document.getElementById('agreement');
const btnSubmit = document.getElementById('submit-btn');
const textArea = document.getElementById('textarea');
const labelCounter = document.getElementById('counter');
labelCounter.innerHTML = 500;
btnLogin.onclick = () => {
  if (inputEmail.value === 'tryber@teste.com' && inputPassword.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
};
btnSubmit.disabled = true;
checkAgreement.addEventListener('change', () => {
  if (checkAgreement.checked) {
    btnSubmit.disabled = false;
  } else {
    btnSubmit.disabled = true;
  }
});
textArea.addEventListener('keyup', () => {
  const text = textArea.value;
  labelCounter.innerHTML = (500 - text.length);
});
function nameText() {
  const firstName = document.getElementById('input-name').value;
  const lastName = document.getElementById('input-lastname').value;
  const firstLastName = `Nome: ${firstName} ${lastName}`;
  return firstLastName;
}

function emailText() {
  const email = document.getElementById('input-email').value;
  const textEmail = `Email: ${email}`;
  return textEmail;
}
function houseText() {
  const house = document.getElementsByName('option-house');
  let houseSelected;
  for (let index = 0; index < house.length; index += 1) {
    if (house[index].selected) {
      houseSelected = `Casa: ${house[index].value}`;
    }
  }
  return houseSelected;
}
function familyText() {
  const family = document.getElementsByName('family');
  let familySelected;
  for (let index = 0; index < family.length; index += 1) {
    if (family[index].checked) {
      familySelected = `Família: ${family[index].value}`;
    }
  }
  return familySelected;
}
function contentText() {
  const content = document.getElementsByName('content');
  const contentArray = [];
  let contentSelected = 'Matérias:';
  for (let index = 0; index < content.length; index += 1) {
    if (content[index].checked) {
      contentArray.push(` ${content[index].value}`);
    }
  }
  contentSelected += contentArray;
  return contentSelected;
}
function avaliationText() {
  const rate = document.getElementsByName('rate');
  let rateSelected;
  for (let index = 0; index < rate.length; index += 1) {
    if (rate[index].checked) {
      rateSelected = `Avaliação: ${rate[index].value}`;
    }
  }
  return rateSelected;
}
function comentText() {
  const coment = document.getElementById('textarea').value;
  const textComent = `Observações: ${coment}`;
  return textComent;
}
btnSubmit.addEventListener('click', () => {
  const name = nameText();
  const email = emailText();
  const house = houseText();
  const family = familyText();
  const content = contentText();
  const avaliation = avaliationText();
  const coment = comentText();
  const quebra = '<br>';
  const form = document.getElementById('evaluation-form');
  form.innerHTML = name + quebra + email + quebra;
  form.innerHTML += house + quebra + family + quebra;
  form.innerHTML += content + quebra + avaliation + quebra + coment;
});
