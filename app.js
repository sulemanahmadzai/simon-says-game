let level = 0;
let userSeq = [];
let gameSeq = [];
let allBtns = ["red", "yellow", "green", "blue"];
let h3 = document.querySelector("h3");

document.addEventListener("keypress", function () {
  console.log("key pressed");
  if (level === 0) {
    levelUp();
  }
});

function flash(btn) {
  btn.classList.add("flash");

  setTimeout(function () {
    btn.classList.remove("flash");
  }, 250);
}

function levelUp() {
  level++;
  h3.innerText = `Level ${level}`;
  let randomValue = Math.floor(Math.random() * 4);
  let color = allBtns[randomValue];
  let btn = document.querySelector(`.${color}`);
  gameSeq.push(color);
  console.log(gameSeq);
  flash(btn);
  userSeq = [];
}

function matchSequence() {
  let status = true;
  let i = 0;
  for (; i < userSeq.length; i++) {
    if (userSeq[i] !== gameSeq[i]) {
      status = false;
    }
  }
  if (status === true) {
    if (gameSeq.length === userSeq.length) {
      setTimeout(levelUp, 1000);
    }
  } else if (status === true) {
    console.log("continue");
  } else {
    let score = level;
    h3.innerText = `Game Over, Your score was ${score}`;
    let h4 = document.createElement("h5");
    h4.innerText = "Press any key to restart";
    h3.append(h4);
    level = 0;
    gameSeq = [];
  }
}
function userFlash(btn, color) {
  btn.addEventListener("click", function () {
    if (level > 0) {
      flash(this);
      userSeq.push(color);
      console.log(userSeq);
      matchSequence();
    }
  });
}

for (btn of allBtns) {
  let button = document.querySelector(`.${btn}`);
  userFlash(button, btn);
}
