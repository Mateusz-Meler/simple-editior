import "../scss/main.scss";


const textArea = document.querySelector(".area--js");
const saveButton = document.querySelector(".save--js");
const loadButton = document.querySelector(".load--js");

const currentValue = localStorage.getItem('entry');

if (currentValue) {
  alert(`Masz coś w Storage 😎`);
  document.querySelector('.info--js').innerHTML = 'ℹ️';
};

saveButton.addEventListener("click", (e) => {
  e.preventDefault();
  localStorage.setItem("entry", textArea.value);
  if (textArea.value) {
  document.querySelector('.info--js').innerHTML = "ℹ️"
} else {
  document.querySelector('.info--js').innerHTML = ""
}});

loadButton.addEventListener("click", (e) => {
  e.preventDefault();
textArea.value = localStorage.getItem("entry");
})