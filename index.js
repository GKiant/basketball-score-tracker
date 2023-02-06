let scoreHome = document.getElementById('score-home');
let scoreGuest = document.getElementById('score-guest');

let resultHome = 0;
let resultGuest = 0;

const isLeading = () => {
  if (resultHome > resultGuest) {
    scoreGuest.classList.remove('winning-team');
    scoreHome.classList.add('winning-team');
  } else if (resultHome < resultGuest) {
    scoreHome.classList.remove('winning-team');
    scoreGuest.classList.add('winning-team');
  } else {
    scoreGuest.classList.remove('winning-team');
    scoreHome.classList.remove('winning-team');
  }
};

const add1Point = (team) => {
  team === 'home' ? (resultHome += 1) : (resultGuest += 1);
  scoreHome.textContent = resultHome;
  scoreGuest.textContent = resultGuest;
  isLeading();
};

const add2Point = (team) => {
  team === 'home' ? (resultHome += 2) : (resultGuest += 2);
  scoreHome.textContent = resultHome;
  scoreGuest.textContent = resultGuest;
  isLeading();
};

const add3Point = (team) => {
  team === 'home' ? (resultHome += 3) : (resultGuest += 3);
  scoreHome.textContent = resultHome;
  scoreGuest.textContent = resultGuest;
  isLeading();
};

const newGame = () => {
  resultHome = 0;
  resultGuest = 0;
  scoreHome.textContent = resultHome;
  scoreGuest.textContent = resultGuest;
  isLeading();
};
