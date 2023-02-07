const input = document.querySelector('input');
const p = document.querySelector('p');

const total = window.localStorage.getItem('bonus');
input.value = total;
calcularBonus(input.value)

function calcularBonus(value) {
  return (p.innerText = `Ganho total: ${
    value + 100 - value * 0.2
  }`);
}

function bonus20() {
  value = Number(input.value)
  window.localStorage.setItem('bonus', input.value);
  calcularBonus(value)
}

input.addEventListener('keyup', bonus20);
