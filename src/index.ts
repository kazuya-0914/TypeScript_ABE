// --- DOM出力 初期値 --- //

let html = '';
const domCode = document.getElementById('dom-code');
const resetBtn = document.getElementById('reset-btn');

// --- 参考書コード --- //
type Animal = {
  tag: "animal";
  species: string;
}
type Robot = {
  tag: "robot";
  name: string;
}
type User = Animal | Human | Robot;

function getUserName(user: User): string {
  switch (user.tag) {
    case "human":
      return user.name;
    case "animal":
      return "名無し";
  }
}

const tama: User = {
  tag: "animal",
  species: "Felis silvestris catus"
};
const uhyo: User = {
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
}
domOutput();