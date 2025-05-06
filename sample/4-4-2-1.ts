// --- DOM初期値

let html = '';
const domCode = document.getElementById('dom-code');
const resetBtn = document.getElementById('reset-btn');

// --- 参考書コード --- //

const repeat = function<T>(element: T, length: number): T[] {
  const result: T[] = [];
  for (let i = 0; i < length; i++) {
    result.push(element);
  }
  return result;
}

html = `
  ${repeat<string>("a", 5)}<br>
  ${repeat<number>(123, 3)}<br>
`;

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