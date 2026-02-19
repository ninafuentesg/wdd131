// QUICK FACTS
const facts = [
"Capital: Tokyo",
"Population: 125 million",
"Currency: Japanese Yen",
"Government: Constitutional monarchy",
"Major Industries: Technology, Automotive, Electronics"
];

const loadFactsBtn = document.querySelector("#loadFacts");

if (loadFactsBtn) {
loadFactsBtn.addEventListener("click", () => {
const list = document.querySelector("#factsList");
list.innerHTML = "";

facts.forEach(fact => {
list.innerHTML += `<li>${fact}</li>`;
});
});
}

// KANJI
const kanji = [
{ character: "日", meaning: "Sun / Day" },
{ character: "月", meaning: "Moon / Month" },
{ character: "人", meaning: "Person" },
{ character: "山", meaning: "Mountain" }
];

const loadKanjiBtn = document.querySelector("#loadKanji");

if (loadKanjiBtn) {
loadKanjiBtn.addEventListener("click", () => {
const list = document.querySelector("#kanjiList");
list.innerHTML = "";

kanji.forEach(item => {
list.innerHTML += `<li>${item.character} — ${item.meaning}</li>`;
});
});
}

// QUIZ
const checkAnswerBtn = document.querySelector("#checkAnswer");

if (checkAnswerBtn) {
checkAnswerBtn.addEventListener("click", () => {
const answer = document.querySelector("#quizAnswer").value.toLowerCase();
const result = document.querySelector("#quizResult");

if (answer === "thank you") {
result.textContent = "Correct!";
localStorage.setItem("quizPassed", "true");
} else {
result.textContent = "Incorrect. Try again.";
}
});
}

// FORM
const cultureForm = document.querySelector("#cultureForm");

if (cultureForm) {
cultureForm.addEventListener("submit", (e) => {
e.preventDefault();
const name = document.querySelector("#name").value;
document.querySelector("#formMessage").textContent =
`Thank you ${name}! Subscription saved.`;
localStorage.setItem("subscriber", name);
});
}