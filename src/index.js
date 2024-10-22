import './style.css';
import { Calculator } from './calculator.js';

const calculator = new Calculator();
const display = document.querySelector('.display');
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const clearButton = document.querySelector('.clear_btn');
const resultButton = document.getElementById('result');
const commaButton = document.getElementById('comma');
const percentButton = document.getElementById('percent');

const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const toggleSignButton = document.getElementById('toggle-sign');

let firstValue = '';
let secondValue = '';
let currentOperator = '';
let result = null;
let isSecondValueInput = false;
let finish = false;

const updateDisplay = (value) => {
  display.value = value || '0';
};

const resetCalculator = () => {
  firstValue = '';
  secondValue = '';
  currentOperator = '';
  result = null;
  isSecondValueInput = false;
  finish = false;
  updateDisplay();
};

numberButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const key = button.textContent;

    if (finish) {
      resetCalculator();
    }

    if (!isSecondValueInput) {
      firstValue += key;
      updateDisplay(firstValue);
    } else {
      secondValue += key;
      updateDisplay(secondValue);
    }
  });
});

operatorButtons.forEach((button) => {
  const operator = button.textContent;

  button.addEventListener('click', () => {
    if (operator === '-' && firstValue === '' && !isSecondValueInput) {
      firstValue = '-';
      updateDisplay(firstValue);
      return;
    }

    if (operator === '-' && isSecondValueInput && secondValue === '') {
      secondValue = '-';
      updateDisplay(secondValue);
      return;
    }

    if (isSecondValueInput && secondValue !== '') {
      calculate();
    }

    currentOperator = operator;

    if (result !== null && !isSecondValueInput) {
      firstValue = result.toString();
    }

    isSecondValueInput = true;
    finish = false;
    updateDisplay(currentOperator);
  });
});

percentButton.addEventListener('click', () => {
  if (firstValue !== '' && secondValue === '' && currentOperator === '') {
    firstValue = (parseFloat(firstValue) / 100).toString();
    updateDisplay(`${firstValue}`);
  } else if (firstValue !== '' && secondValue !== '') {
    updateDisplay(`${secondValue}%`);

    if (currentOperator === '×' || currentOperator === '÷') {
      secondValue = (parseFloat(secondValue) / 100).toString();
    } else {
      const percentValue = calculator.percentage(
        parseFloat(firstValue),
        parseFloat(secondValue),
      );
      secondValue = percentValue.toString();
    }
  }
});

const calculate = () => {
  const num1 = parseFloat(firstValue);
  const num2 = parseFloat(secondValue);

  switch (currentOperator) {
    case '+':
      result = calculator.add(num1, num2);
      break;
    case '-':
      result = calculator.subtract(num1, num2);
      break;
    case '×':
      result = calculator.multiply(num1, num2);
      break;
    case '÷':
      if (num2 === 0) {
        updateDisplay('Error');
        return;
      }
      result = calculator.divide(num1, num2);
      break;
  }

  firstValue = result.toString();
  secondValue = '';
  currentOperator = '';
  isSecondValueInput = false;
  finish = true;
  updateDisplay(result);
};

commaButton.addEventListener('click', () => {
  const currentNumber = isSecondValueInput ? secondValue : firstValue;
  if (!currentNumber.includes('.')) {
    if (isSecondValueInput) {
      secondValue += '.';
      updateDisplay(secondValue);
    } else {
      firstValue += '.';
      updateDisplay(firstValue);
    }
  }
});

clearButton.addEventListener('click', () => {
  resetCalculator();
  updateDisplay();
});

toggleSignButton.addEventListener('click', () => {
  let currentValue = isSecondValueInput ? secondValue : firstValue;

  if (currentValue !== '') {
    const newValue = (-parseFloat(currentValue)).toString();

    if (isSecondValueInput) {
      secondValue = newValue;
    } else {
      firstValue = newValue;
    }

    updateDisplay(newValue);

    if (finish) {
      result = parseFloat(newValue);
      firstValue = result.toString();
    }
  }
});

resultButton.addEventListener('click', () => {
  if (firstValue !== '' && currentOperator !== '') {
    if (secondValue === '' && result !== null) {
      secondValue = firstValue;
    }

    calculate();
  }
});

if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark-theme');
  themeToggle.checked = true;
}

themeToggle.addEventListener('change', () => {
  if (themeToggle.checked) {
    body.classList.add('dark-theme');
    localStorage.setItem('theme', 'dark');
  } else {
    body.classList.remove('dark-theme');
    localStorage.setItem('theme', 'light');
  }
});
