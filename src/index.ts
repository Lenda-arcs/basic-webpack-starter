import "./style.css";

const add = (a: number, b: number) => {
  return a + b;
};
const body = document.querySelector("body");
const h2 = document.createElement("h2");

h2.innerHTML = add(2, 5).toString();
h2.className = "text-4xl text-blue-700";
body?.appendChild(h2);
