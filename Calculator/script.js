let displayValue = '';

function updateDisplay() {
  document.getElementById('display').textContent = displayValue;
}

function appendKey(key) {
  switch (key) {
    case 'Edit':
      editDisplay();
      break;
    case '.':
      appendDecimalPoint();
      break;
    case '00':
      appendNumber('00');
      break;
    case '000':
      appendNumber('000');
      break;
    case '%':
      calculatePercentage();
      break;
    case '+':
    case '-':
    case '*':
    case '/':
      appendOperator(key);
      break;
    case '=':
      calculate();
      break;
    case 'C':
      clearDisplay();
      break;
    default:
      appendNumber(key);
      break;
  }
}

function editDisplay() {
  const editedValue = prompt("Edit the display value:");
  if (editedValue !== null) {
    displayValue = editedValue;
    updateDisplay();
  }
}

function appendDecimalPoint() {
  if (!displayValue.includes('.')) {
    displayValue += '.';
    updateDisplay();
  }
}

function appendNumber(number) {
  displayValue += number;
  updateDisplay();
}

function appendOperator(operator) {
  displayValue += operator;
  updateDisplay();
}

function calculatePercentage() {
  try {
    displayValue = (eval(displayValue) / 100).toString();
    updateDisplay();
  } catch (error) {
    displayValue = 'Error';
    updateDisplay();
  }
}

function calculate() {
  try {
    displayValue = eval(displayValue).toString();
    updateDisplay();
  } catch (error) {
    displayValue = 'Error';
    updateDisplay();
  }
}

function clearDisplay() {
  displayValue = '';
  updateDisplay();
}