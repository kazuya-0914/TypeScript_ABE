// --- DOM出力 初期値 --- //
let html = '';
const domCode = document.getElementById('dom-code');
const resetBtn = document.getElementById('reset-btn');

// --- 参考書コード --- //

type GetTimeFunc = () => Date;

function useTime(getTimeFunc: GetTimeFunc | undefined) {
  const timeStringOrUndefined = getTimeFunc?.().toString();
  return timeStringOrUndefined;
}

html += `
  ${useTime(() => new Date())}<br>
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