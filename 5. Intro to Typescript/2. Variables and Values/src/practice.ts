// 👉 Add types for the following variables and values:
const a = 30;
const b = "30";
const c = true;
const d = localStorage.getItem("key");
const e = new Date();

// 👉 Add types for the arguments and return values of the following functions:
function add(a, b) {
  return a + b;
}

function addStrings(a, b) {
  return a + b;
}

function newDate() {
  return new Date();
}

function getFromLocalStorage(key) {
  return localStorage.getItem(key);
}

function getDomElement(id) {
  return document.getElementById(id);
}

function saveToLocalStorage(key, value) {
  localStorage.setItem(key, value);
}

function getTodos() {
  return fetch("/todos").then((res) => res.json());
}

async function getTodosAsync() {
  const res = await fetch("/todos");
  return res.json();
}

function getCoords() {
  return {
    x: 0,
    y: 0,
  };
}

function getCoordsTuple() {
  return [0, 0];
}
