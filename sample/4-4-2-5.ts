// --- DOM初期値 --- //

let html = '';
const domCode = document.getElementById('dom-code');
const resetBtn = document.getElementById('reset-btn');

// --- 参考書コード --- //

const repeat = <T extends {
  name: string;
}>(element: T, length: number): T[] => {
  const result: T[] = [];
  for (let i = 0; i < length; i++) {
    result.push(element);
  }
  return result;
}

type HasNameAndAge = {
  name: string;
  age: number;
}

html += JSON.stringify(repeat<HasNameAndAge>({
  name: "uhyo",
  age: 26,
}, 3));

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