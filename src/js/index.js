import "../scss/main.scss";

const entry = localStorage.getItem("entry");
let result = "";

if (entry) {
  result = entry;
}

const textArea = document.querySelector(".area--js");
textArea.value = result;

const saveButton = document.querySelector(".save--js");

saveButton.addEventListener("click", () => {
  localStorage.setItem("entry", textArea.value);
});

const loadButton = document.querySelector(".load--js");

loadButton.addEventListener("click", () => {
textArea.value = localStorage.getItem("entry", textArea.value);
});
