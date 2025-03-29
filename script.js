/*const display = document.getElementById('display');
let input = '0';
let formula = '';
let operatorPressed = false;

const updateDisplay = () => {
  display.textContent = input;
};

const handleInput = (value) => {
  if (value === 'AC') {
    input = '0';
    formula = '';
    operatorPressed = false;
  } else if (value === '=') {
    try {
      input = eval(formula).toString();
      formula = input;
    } catch (err) {
      input = 'Error';
    }
  } else if (value === '.' && input.includes('.')) {
    return; // Prevent multiple decimals
  } else if (['+', '-', '*', '/'].includes(value)) {
    if (operatorPressed) {
      formula = formula.slice(0, -1) + value;
    } else {
      formula += value;
    }
    operatorPressed = true;
    input = value;
  } else {
    if (operatorPressed || input === '0') {
      input = value;
      operatorPressed = false;
    } else {
      input += value;
    }
    formula += value;
  }
  updateDisplay();
};

document.querySelectorAll('button').forEach(button => {
  button.addEventListener('click', () => {
    handleInput(button.textContent);
  });
});*/

let display = document.getElementById('display');
let input = 0;
let formula = '';
let operatorPressed = false;

function updateDisplay() {
    display.textContent = input;
}
const handleInput = (value) => {
  if (value === 'AC') {
    input = '0';
    formula = '';
    operatorPressed = false;
  } else if (value === '=') {
    try {
      input = eval(formula).toString();
      formula = input;
    } catch (err) {
      input = 'Error';
    }
  } else if (value === '.' && input.includes('.')) {
    return; // Prevent multiple decimals
  } else if (['+', '-', '*', '/'].includes(value)) {
    if (operatorPressed) {
      formula = formula.slice(0, -1) + value;
    } else {
      formula += value;
    }
    operatorPressed = true;
    input = value;
  } else {
    if (operatorPressed || input === '0') {
      input = value;
      operatorPressed = false;
    } else {
      input += value;
    }
    formula += value;
  }
  updateDisplay();
};
document.querySelectorAll('button').forEach(button => {
  button.addEventListener('click', () => {
    handleInput(button.textContent);
  });
});