var age = document.getElementById('age');
var height = document.getElementById('height');
var weight = document.getElementById('weight');
var male = document.getElementById('m');
var female = document.getElementById('f');
var resultArea = document.querySelector('.comment');
var modalContent = document.querySelector('.modal-content');
var modalText = document.querySelector('#modalText');
var modal = document.getElementById('myModal');
var span = document.getElementsByClassName('close')[0];

function calculate() {
  if (age.value === '' || height.value === '' || weight.value === '' || (male.checked === false && female.checked === false)) {
    showModal('All fields are required!');
  } else {
    countBmi();
  }
}

function countBmi() {
  var p = [age.value, height.value, weight.value];
  if (male.checked) {
    p.push('male');
  } else if (female.checked) {
    p.push('female');
  }

  var bmi = Number(p[2]) / (Number(p[1]) / 100 * Number(p[1]) / 100);
  var result = '';
  if (bmi < 18.5) {
    result = 'Underweight';
  } else if (18.5 <= bmi && bmi <= 24.9) {
    result = 'Healthy';
  } else if (25 <= bmi && bmi <= 29.9) {
    result = 'Overweight';
  } else if (30 <= bmi && bmi <= 34.9) {
    result = 'Obese';
  } else if (35 <= bmi) {
    result = 'Extremely obese';
  }

  resultArea.style.display = 'block';
  document.querySelector('.comment').innerHTML = `Weight Condition: <span id="comment">${result}</span>`;
  document.querySelector('#result').innerHTML = bmi.toFixed(2);

  // Display modal with BMI category
  const modalTextContent = `Your BMI is ${bmi.toFixed(2)}. This is considered ${result}.`;
  showModal(modalTextContent);
}

function showModal(text) {
  document.getElementById('modalText').textContent = text;
  const modal = document.getElementById('myModal');
  modal.style.display = 'block';

  const span = document.getElementsByClassName('close')[0];
  span.onclick = function () {
    modal.style.display = 'none';
  };

  window.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  };
}
