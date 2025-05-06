let html = '';
const domCode = document.getElementById('dom-code');

// --- repeat関数の実装 --- //
function repeat<T>(element: T, length: number): T[] {
  return Array.from({ length }, () => element);
}

// --- 関数を使用して結果をHTMLに追加 --- //
const result = repeat("TypeScript", 3); // ["TypeScript", "TypeScript", "TypeScript"]
html += result.join('<br>'); // 各行に1つずつ表示

// --- DOM出力 --- //
const domOutput = () => {
  if (domCode) {
    domCode.innerHTML = html;
  }
};
domOutput();