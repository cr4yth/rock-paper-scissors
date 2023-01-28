const display = document.getElementById("display");
const comparison = document.getElementById("comp");
const my_score = document.getElementById("player-score");
const ai_score = document.getElementById("machine-score");

const scores = { ai: 0, me: 0 };

const rock = () => {
  const ai = Math.ceil(Math.random() * 3);
  if (ai == 1) {
    display.innerText = "draw!";
    scores.ai += 1;
    scores.me += 1;
    comparison.innerText = "rock vs rock";
  }
  if (ai == 2) {
    display.innerText = "AI won!";
    scores.ai += 1;
    comparison.innerText = "rock vs paper";
  }
  if (ai == 3) {
    display.innerText = "you won!";
    scores.me += 1;
    comparison.innerText = "rock vs scissors";
  }
  update();
};

const paper = () => {
  const ai = Math.ceil(Math.random() * 3);
  if (ai == 1) {
    display.innerText = "you won!";
    scores.me += 1;
    comparison.innerText = "paper vs rock";
  }
  if (ai == 2) {
    display.innerText = "draw!";
    scores.ai += 1;
    scores.me += 1;
    comparison.innerText = "paper vs paper";
  }
  if (ai == 3) {
    display.innerText = "AI won!";
    scores.ai += 1;
    comparison.innerText = "paper vs scissors";
  }
  update();
};

const scissor = () => {
  const ai = Math.ceil(Math.random() * 3);
  if (ai == 1) {
    display.innerText = "AI won!";
    scores.ai += 1;
    comparison.innerText = "scissors vs rock";
  }
  if (ai == 2) {
    display.innerText = "you won!";
    scores.me += 1;
    comparison.innerText = "scissors vs paper";
  }
  if (ai == 3) {
    display.innerText = "draw!";
    scores.ai += 1;
    scores.me += 1;
    comparison.innerText = "scissors vs scissors";
  }
  update();
};

const update = () => {
  my_score.innerText = scores.me;
  ai_score.innerText = scores.ai;
};

const reset = () => {
  scores.me = 0;
  scores.ai = 0;
  comparison.innerText = "";
  display.innerText = "";
  update();
};
