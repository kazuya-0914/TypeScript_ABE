// --- DOM出力 初期値 --- //
let html = '';
const domCode = document.getElementById('dom-code');
const resetBtn = document.getElementById('reset-btn');

// --- 参考書コード --- //

type Human = {
  type: "human";
  name: string;
  age: bigint; // ←ここをbigintに変更
};

function setAge(human: Human, age: Human["age"]) {
  return {
    ...human,
    age
  };
}

const uhyo: Human = {
  type: "human",
  name: "uhyo",
  age: 26n, // ←ここをBigIntリテラルに変更
};

const uhyo2 = setAge(uhyo, 27n);

html += JSON.stringify(uhyo2, (_, value) =>
  typeof value === "bigint"
    ? value.toString()
    : value
)

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