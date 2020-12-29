import './styles.scss';

// import $ from 'jquery';
// import 'bootstrap';
// $('body').append('jquery + bootstrap works!');
const app = document.getElementById('app');

// every files in "static" folder can be used directly like that
// app.innerHTML += '<img src="images/kitten.jpg" style="width:100px;" />';

const inputTxt = document.getElementById('inputTxt');
const billard = document.body.querySelector('.billard');
const arrow = document.body.querySelector('.arrow');
const cliquez = document.body.querySelector('.cliquez');
const listeReponses = ["Vous pouvez compter dessus.", "OUI, sans aucune hésitation !", "Les astres disent que oui.", "Cela demande réflexion.", "Mais oui, c'est clair.", "Peut-être que oui, peut-être que non.", "Ca m'étonnerait.", "Alors là, absolument pas!", "Ne comptez pas dessus...", "Un jour peut-être."];
const reponse = document.body.querySelector('.reponse');
const reset = document.body.querySelector('.reset');

function toRamdom(liste) {
  const randomMots = liste[Math.floor(Math.random() * liste.length)];
  return randomMots;
}

inputTxt.addEventListener('keyup', () => {
  const txtValue = inputTxt.value;
  if (txtValue.length > 10) {
    billard.style.opacity = '1';
    billard.style.cursor = 'pointer';
    arrow.classList.remove('d-none');
    cliquez.classList.remove('d-none');
  } else {
    billard.style.opacity = '0.5';
    billard.style.cursor = 'default';
    arrow.classList.add('d-none');
    cliquez.classList.add('d-none');
  }
});

billard.addEventListener('click', () => {
  if (billard.style.opacity === '1') {
    reponse.classList.remove('d-none');
    reponse.innerHTML = "La divination est en cours...";
    setTimeout(() => {
      reponse.innerHTML = toRamdom(listeReponses);
    }, 3000);
    billard.style.opacity = '0.5';
    billard.style.cursor = 'default';
    arrow.classList.add('d-none');
    cliquez.classList.add('d-none');
    reset.classList.remove('d-none');
    inputTxt.disabled = 'true';
  }
});

reset.addEventListener('click', () => {
  console.log('hi');
  inputTxt.removeAttribute('disabled');
  inputTxt.value = "";
  reponse.classList.add('d-none');
  reset.classList.add('d-none');
});
