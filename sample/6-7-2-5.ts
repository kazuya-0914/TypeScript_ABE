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

function assertHuman(value: any): asserts value is Human {
  // プロパティアクセスできない可能性を排除
  if (value == null) {
    throw new Error('Given value is null or undefined');
  }
  // 3つのプロパティの型を判定
  if (
    value.type !== "Human" ||
    typeof value.name !== "string" ||
    typeof value.age !== "number"
  ) {
    throw new Error('Given value is not a Human');
  }
}

function greet(value: any) {
  assertHuman(value); // value が Human かどうかチェック
  console.log(`Hello, ${value.name}! You are ${value.age} years old.`);
}

const maybeHuman = {
  type: "Human",
  name: "Alice",
  age: 30
};

greet(maybeHuman); // → OK

greet({ type: "Alien", name: "X", age: "?" }); // → エラーを投げる

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