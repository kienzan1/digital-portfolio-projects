let questions = [
  { q: "What is 5 + 1?", options: ["6", "7", "8", "9"], correct: 0 },
  { q: "What is 6 x 2?", options: ["10", "11", "12", "13"], correct: 2 },
  { q: "What is 14 / 2?", options: ["4", "5", "6", "7"], correct: 3 },
  { q: "What is 24 - 15?", options: ["8", "9", "10", "11"], correct: 1 },
  { q: "What is the square root of 16?", options: ["2", "3", "4", "5"], correct: 2 }
];

let current = 0;
let score = 0;
let selected = null;

function load() {
  let q = questions[current];
  document.getElementById("question").innerText = q.q;

  let html = "";
  q.options.forEach((opt, i) => {
    html += `<button onclick="selectAnswer(${i}, this)">${opt}</button>`;
  });

  document.getElementById("answers").innerHTML = html;
  selected = null;
}

function selectAnswer(i, btn) {
  selected = i;

  // remove previous highlights
  document.querySelectorAll(".answers button").forEach(b => {
    b.style.background = "#38bdf8";
  });

  // highlight selected
  btn.style.background = "#facc15";
}

function next() {
  if (selected === null) return;

  if (selected === questions[current].correct) {
    score++;
  }

  current++;

  if (current >= questions.length) {
    document.body.innerHTML = `
      <div style="text-align:center; margin-top:100px;">
        <h1>Your Score: ${score}/${questions.length}</h1>
      </div>
    `;
    return;
  }

  load();
}

load();