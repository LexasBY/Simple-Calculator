export class Calculator {
  add(firstValue, secondValue) {
    return firstValue + secondValue;
  }

  subtract(firstValue, secondValue) {
    return firstValue - secondValue;
  }

  multiply(firstValue, secondValue) {
    return firstValue * secondValue;
  }

  divide(firstValue, secondValue) {
    if (secondValue === 0) {
      throw new Error('Cannot divide by zero');
    }
    return firstValue / secondValue;
  }

  reset() {
    this.currentValue = null; // Сброс текущего значения
  }
}
