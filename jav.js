const operators = ["+", "-", "*", "/", "%"];

const display = document.getElementById("display");

function number(input) {
  display.value += input;
}
function bura(input) {
  display.value = "";
}
function operator(input) {
  display.value += input;
}
function result(input) {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}
function pahi() {
  display.value = display.value.slice(0, -1);
}
