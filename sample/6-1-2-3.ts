// --- DOM出力 初期値 --- //

let html = '';
const domCode = document.getElementById('dom-code');
const resetBtn = document.getElementById('reset-btn');

// --- 参考書コード --- //

type MysteryFunc =
  | ((str: string) => string)
  | ((str: string) => number);

function useFunc(func: MysteryFunc) {
  const result = func("uhyo");
  return result;
}

html += useFunc((str: string) => str.length);

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