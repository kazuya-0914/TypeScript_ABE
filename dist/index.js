"use strict";
// --- DOM出力 初期値 --- //
let html = '';
const domCode = document.getElementById('dom-code');
const resetBtn = document.getElementById('reset-btn');
function getUserName(user) {
    switch (user.tag) {
        case "human":
            return user.name;
        case "animal":
            return "名無し";
    }
}
const tama = {
    tag: "animal",
    species: "Felis silvestris catus"
};
const uhyo = {
    tag: "human",
    name: "uhyo",
};
// userは"uhyo"型
html += `
  ${getUserName(tama)}<br>
  ${getUserName(uhyo)}<br>
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
};
domOutput();
