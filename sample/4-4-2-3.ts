// --- DOM初期値 --- //

let html = '';
const domCode = document.getElementById('dom-code');
const resetBtn = document.getElementById('reset-btn');

// --- 参考書コード --- //

const untils = {
  repeat<T>(element: T, length: number): T[] {
    const result: T[] = [];
    for (let i = 0; i < length; i++) {
      result.push(element);
    }
    return result;
  }
}

html = `
  ${untils.repeat<string>("a", 5).join(', ')}<br>
  ${untils.repeat<number>(123, 3).join(', ')}<br>
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