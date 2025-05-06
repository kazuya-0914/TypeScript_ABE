// --- DOM出力 初期値 --- //

let html = '';
const domCode = document.getElementById('dom-code');
const resetBtn = document.getElementById('reset-btn');

// --- 参考書コード --- //

type Human = { name: string };
type Animal = { species: string };
function getName(human: Human) {
  return human.name;
}
function getSpecies(animal: Animal) {
  return animal.species;
}

const mysteryFunc = Math.random() < 0.5 ? getName : getSpecies;

if (mysteryFunc === getName) {
  html += mysteryFunc({ name: "uhyo" });
} else {
  html += mysteryFunc({ species: "dog" });
}

// --- DOM出力 --- //

const domOutput = () => {
  if (domCode) {
    domCode.innerHTML = html;
  }
  
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      location.reload();
    });
  }
}
domOutput();