let html = '';
const domCode = document.getElementById('dom-code');

type HasName = {
  name: string;
}
type HasNameAndAge = {
  name: string;
  age: number;
}

// showName 関数はコンソール出力 → DOM用にhtmlに追加するよう変更
const showName = (obj: HasName) => {
  html += `名前: ${obj.name}<br>`;
};

// 関数gはHasNameAndAgeを受け取り、showNameに渡す
const g: (obj: HasNameAndAge) => void = showName;

// 実行
g({
  name: "uhyo",
  age: 26,
});

const domOutput = () => {
  if (domCode) {
    domCode.innerHTML = html;
  }
};
domOutput();