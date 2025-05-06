// --- DOM出力 初期値 --- //

let html = '';
const domCode = document.getElementById('dom-code');
const resetBtn = document.getElementById('reset-btn');

// --- 参考書コード --- //

type Human = {
  tag: "human";
  name: string;
};

type Alien = {
  tag: "alien";
  planet: string;
};

type User = Human | Alien;

function getNamesIfAllHuman(users: readonly User[]): string[] | undefined {
  if (users.every(user => user.tag === "human")) {
    return (users as Human[]).map(user => user.name);
  }
  return undefined;
}

const users: User[] = [
  { tag: "human", name: "Alice" },
  { tag: "human", name: "Bob" },
];

const alienUsers: User[] = [
  { tag: "human", name: "Alice" },
  { tag: "alien", planet: "Mars" },
];

html += `
  ${getNamesIfAllHuman(users)}<br>
  ${getNamesIfAllHuman(alienUsers)}<br>
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