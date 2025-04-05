"use strict";
// --- DOM初期値
let html = '';
const domCode = document.getElementById('dom-code');
const resetBtn = document.getElementById('reset-btn');
const nested1 = {
    obj: { foo: 123 }
};
const nested2 = {};
// 変数foo1には123が代入される
const { obj: { foo: foo1 } = { foo: 500 } } = nested1;
html += `${JSON.stringify(nested1)}<br>`;
// 変数foo2には500が代入される
const { obj: { foo: foo2 } = { foo: 500 } } = nested2;
//html += `<pre>${JSON.stringify(arr , null, 2)}</pre>`;
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
};
domOutput();
// --- ReadLine --- //
/*
import { createInterface } from 'readline';

const rl = createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('パスワードを入力してください:', (password) => {
  if(password === 'hogehoge') {
    console.log('ようこそ！');
  } else {
    console.log('誰？');
  }
    rl.close;
});
*/ 
