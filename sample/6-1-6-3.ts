// --- DOM出力 初期値 --- //
let html = '';
const domCode = document.getElementById('dom-code');
const resetBtn = document.getElementById('reset-btn');

// --- 参考書コード --- //

type User = {
  isAdult(): boolean;
}

function checkForAdultUser(user: User | null) {
  if (user?.isAdult()) {
    return showSpecialContents(user);
  }
  return "特別コンテンツはありません";
}

function showSpecialContents(user: User) {
  return "特別コンテンツを表示します！";
}

// ダミーユーザー1（成人）
const adultUser: User = {
  isAdult() {
    return true;
  }
};

// ダミーユーザー2（未成年）
const childUser: User = {
  isAdult() {
    return false;
  }
};

html += `
  ${checkForAdultUser(adultUser)}<br>
  ${checkForAdultUser(childUser)}<br>
  ${checkForAdultUser(null)}<br>
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