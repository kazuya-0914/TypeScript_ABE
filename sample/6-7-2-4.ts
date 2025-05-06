// --- DOM出力 初期値 --- //

let html = '';
const domCode = document.getElementById('dom-code');
const resetBtn = document.getElementById('reset-btn');

// --- 参考書コード --- //

type Human = {
  type: "Human";
  name: string;
  age: number;
};

function isHuman(value: any): value is Human {
  // プロパティアクセスできない可能性を排除
  if (value == null) return false;
  // 3つのプロパティの型を判定
  return (
    value.type === "Human" &&
    typeof value.name === "string" &&
    typeof value.age === "number"
  );
}

const dataList: any[] = [
  { type: "Human", name: "Alice", age: 30 },
  { type: "Robot", name: "Robo1", age: 5 },
  { name: "Bob", age: 25 },
  null,
];

for (const data of dataList) {
  if (isHuman(data)) {
    console.log(`Human: ${data.name}, Age: ${data.age}`);
  } else {
    console.log("Not a Human");
  }
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