let display = document.getElementById("display");

function append(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function backspace() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    let expression = display.value.replace("^", "**"); // handle power
    display.value = eval(expression);
  } catch (e) {
    display.value = "Error";
  }
}

function scientific(func) {
  let val = parseFloat(display.value);

  switch (func) {
    case "sin": display.value = Math.sin(val * Math.PI / 180); break; // degree
    case "cos": display.value = Math.cos(val * Math.PI / 180); break;
    case "tan": display.value = Math.tan(val * Math.PI / 180); break;
    case "sqrt": display.value = Math.sqrt(val); break;
    case "log": display.value = Math.log10(val); break;
    case "pi": display.value = Math.PI; break;
    case "exp": display.value = Math.exp(val); break;
    case "pow2": display.value = Math.pow(val, 2); break;
    case "pow3": display.value = Math.pow(val, 3); break;
    case "abs": display.value = Math.abs(val); break;
    default: display.value = "Error";
  }
}
