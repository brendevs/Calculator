const operators = ["+", "-", "*", "/", "%"];

const display = document.getElementById("display");

function number(input) {
  display.value += input;
}
function pahi(input) {
  display.value = "";
}
function addOperator(operators) {
  const current = display.value;
  const lastChar = current.slice(-1);

  if (operators.includes(lastChar)) {
    display.value = current.slice(0, -1) + operators;
  } else if (current !== "") {
    display.value += operators;
  }
}
function result(input) {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}
function bura() {
  display.value = display.value.slice(0, -1);
}
