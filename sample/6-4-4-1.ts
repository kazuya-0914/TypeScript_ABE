// --- DOM出力 初期値 --- //

let html = '';
const domCode = document.getElementById('dom-code');
const resetBtn = document.getElementById('reset-btn');

// --- 参考書コード --- //

type Obj = {
  0: string;
  1: number;
}

const obj: Obj = {
  0: "uhyo",
  "1": 26
};

obj["0"] = "john";
obj[1] = 15;

// ObjKeys は 0 | 1 型
type ObjKeys = keyof Obj;

html += `<p>obj[0] = ${obj[0]}</p>`;
html += `<p>obj[1] = ${obj[1]}</p>`;

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