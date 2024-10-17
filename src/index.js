import './style.css';
import { Calculator } from './calculator.js';

const calculator = new Calculator();
const display = document.querySelector('.display');
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const clearButtons = document.querySelectorAll('.clear_btn');
const resultButton = document.getElementById('result');
const decimalButton = document.getElementById('decimal');

let currentExpression = ''; // Для хранения всего выражения
let firstValue = null; // Для первого числа
let currentOperator = null; // Для текущего оператора
let result = null; // Для хранения результата последней операции
let shouldResetDisplay = false; // Флаг для сброса дисплея после ввода оператора

const operatorMap = {
  '+': 'add',
  '-': 'subtract',
  '*': 'multiply',
  '/': 'divide',
};

// Обновляем дисплей
const updateDisplay = () => {
  display.value = currentExpression || '0'; // Если выражение пустое, показываем '0'
};

// Сбрасываем калькулятор
const resetCalculator = () => {
  currentExpression = ''; // Сбрасываем выражение
  firstValue = null; // Сбрасываем первое значение
  currentOperator = null; // Сбрасываем текущий оператор
  result = null; // Сбрасываем результат
};

// Обработка нажатий на цифры
numberButtons.forEach((button) => {
  button.addEventListener('click', () => {
    // Если результат уже есть и мы нажали на число, начинаем новое выражение
    if (shouldResetDisplay) {
      currentExpression = ''; // Очищаем предыдущее выражение
      shouldResetDisplay = false; // Сбрасываем флаг
    }
    // Добавляем цифру к выражению
    currentExpression += button.textContent;
    updateDisplay(); // Обновляем дисплей
  });
});

// Обработка нажатия на оператор
operatorButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const secondValue = parseFloat(currentExpression.split(' ').pop()); // Получаем второе значение

    // Если уже есть первое значение и оператор, выполняем операцию
    if (firstValue !== null && currentOperator) {
      // Проверяем, существует ли функция для текущего оператора
      if (
        operatorMap[currentOperator] &&
        typeof calculator[operatorMap[currentOperator]] === 'function'
      ) {
        result = calculator[operatorMap[currentOperator]](
          firstValue,
          secondValue,
        ); // Выполняем операцию
        currentExpression = `${result} `; // Обновляем выражение только результатом
        firstValue = result; // Запоминаем результат для дальнейших вычислений
      } else {
        console.error(`Оператор ${currentOperator} не найден.`);
      }
    } else {
      // Сохраняем первое значение, если его ещё нет
      firstValue = parseFloat(currentExpression);
      currentExpression += ` ${button.textContent} `; // Добавляем оператор к выражению
    }

    updateDisplay(); // Обновляем дисплей
    currentOperator = button.textContent; // Сохраняем текущий оператор
    shouldResetDisplay = false; // Устанавливаем флаг для сброса дисплея
  });
});

// Обработка нажатия на кнопку результата
resultButton.addEventListener('click', () => {
  const secondValue = parseFloat(currentExpression.split(' ').pop()); // Получаем второе значение

  // Если есть первое значение и оператор
  if (firstValue !== null && currentOperator) {
    if (!isNaN(secondValue)) {
      // Проверяем, существует ли функция для текущего оператора
      if (
        operatorMap[currentOperator] &&
        typeof calculator[operatorMap[currentOperator]] === 'function'
      ) {
        result = calculator[operatorMap[currentOperator]](
          firstValue,
          secondValue,
        ); // Выполняем операцию
        currentExpression = `${result}`; // Обновляем выражение только результатом
        firstValue = result; // Сохраняем результат для дальнейших вычислений
        updateDisplay(); // Обновляем дисплей
        currentOperator = null; // Сбрасываем текущий оператор
      } else {
        console.error(`Оператор ${currentOperator} не найден.`);
      }
    }
  }
});

// Обработка нажатия на кнопку точки
decimalButton.addEventListener('click', () => {
  // Добавляем точку, если она ещё не введена в текущее число
  const currentNumber = currentExpression.split(' ').pop();
  if (!currentNumber.includes('.')) {
    currentExpression += '.';
    updateDisplay();
  }
});

// Обработка кнопок очистки
clearButtons.forEach((button) => {
  button.addEventListener('click', () => {
    if (button.id === 'c') {
      resetCalculator(); // Сбрасываем все значения
    } else if (button.id === 'ce') {
      currentExpression = ''; // Очищаем текущее значение
    }
    updateDisplay(); // Обновляем дисплей
  });
});
