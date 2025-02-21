// BUTTONS
const newbtn = document.querySelector(".btn--new");
const rollbtn = document.querySelector(".btn--roll");
const holdbtn = document.querySelector(".btn--hold");

const dice = document.querySelector(".dice");

const count1 = document.querySelector("#score--0");
const count2 = document.querySelector("#score--1");

const player1 = document.querySelector("#name--0");
const player2 = document.querySelector("#name--1");

const current1 = document.querySelector("#current--0");
const current2 = document.querySelector("#current--1");
let gameover = true;
rollbtn.addEventListener("click", (roll) => {
  if (gameover) {
    roll.preventDefault();
    rolls();
  }
});
let sum = 0;
let active = 0;
let nums = 0;
let score = [0, 0];

const switchplayer = () => {
  sum = 0;
  document.getElementById(`current--${active}`).textContent = sum;
  active = active === 0 ? 1 : 0;
  document.querySelector(".player--0").classList.toggle("player--active");
  document.querySelector(".player--1").classList.toggle("player--active");
};

function rolls() {
  const randomNum = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
  switch (randomNum) {
    case 1:
      //   console.log("bir");
      dice.setAttribute("src", "dice-1.png");
      break;

    case 2:
      //   console.log("ikki");
      dice.setAttribute("src", "dice-2.png");
      break;
    case 3:
      //   console.log("uch");
      dice.setAttribute("src", "dice-3.png");
      break;

    case 4:
      //   console.log("tort");
      dice.setAttribute("src", "dice-4.png");
      break;
    case 5:
      //   console.log("besh");
      dice.setAttribute("src", "dice-5.png");
      break;
    case 6:
      //   console.log("olti");
      dice.setAttribute("src", "dice-6.png");
      break;
  }
  if (randomNum != 1) {
    sum += randomNum;
    document.getElementById(`current--${active}`).textContent = sum;
  } else {
    switchplayer();
  }
}

holdbtn.addEventListener("click", () => {
  if (gameover) {
    score[active] += sum;
    document.getElementById(`score--${active}`).textContent = score[active];
    if (score[active] >= 20) {
      document
        .querySelector(`.player--${active}`)
        .classList.add("player--winner");
      gameover = false;
    } else {
      switchplayer();
    }
  }
});

newbtn.addEventListener("click", () => {
  sum = 0;
  active = 0;
  nums = 0;
  score = [0, 0];
  gameover = true;
  document.getElementById("current--0").textContent = sum;
  document.getElementById("current--1").textContent = sum;
  document.getElementById("score--0").textContent = sum;
  document.getElementById("score--1").textContent = sum;
  document.querySelector(".player--0").classList.remove("player--winner");
  document.querySelector(".player--1").classList.remove("player--winner");
});
// function hold() {
//   hold();
// // }

// if (`current--${active}`) {
//   nums >= 100;
//   alert(`player--${active}`, "galaba qozondi");
// }
