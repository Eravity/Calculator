number = () => {
  const input = event.target.value;
  const result = document.querySelector("#result");
  result.innerHTML += input;
};

function clearDisplay() {
  const display = document.getElementById("result");
  const previousOp = document.getElementById("previous-op");
  display.textContent = "";
  previousOp.textContent = "";
}

function deleteNumber() {
  const display = document.getElementById("result");
  const currentVal = display.textContent;
  display.textContent = currentVal.slice(0, -1);
}

equalButton = () => {
  const display = document.getElementById("result");
  const previousOp = document.getElementById("previous-op");
  const expression = display.textContent;
  const result = eval(expression);
  display.textContent = result;
  previousOp.textContent = expression;
};


