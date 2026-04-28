let questions = [
  { q: "5 + 1", options: ["6","7","8"], correct: 0 },
  { q: "6 x 2", options: ["10","12","14"], correct: 1 },
  { q: "14 / 2", options: ["5","6","7"], correct: 2 }
];

let current = 0;
let score = 0;

function load() {
  let q = questions[current];
  document.getElementById("question").innerText = q.q;

  let html = "";
  q.options.forEach((opt, i) => {
    html += `<button onclick="answer(${i})">${opt}</button><br>`;
  });

  document.getElementById("answers").innerHTML = html;
}

function answer(i) {
  if (i === questions[current].correct) score++;
  next();
}

function next() {
  current++;
  if (current >= questions.length) {
    document.body.innerHTML = `<h1>Your Score: ${score}</h1>`;
    return;
  }
  load();
}

load();