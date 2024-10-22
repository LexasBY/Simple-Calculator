export class Calculator {
  add(firstValue, secondValue) {
    return (firstValue * 10 + secondValue * 10) / 10;
  }

  subtract(firstValue, secondValue) {
    return firstValue - secondValue;
  }

  multiply(firstValue, secondValue) {
    return firstValue * secondValue;
  }

  divide(firstValue, secondValue) {
    if (secondValue === 0) {
      console.log('Cannot divide by zero');
    }
    return firstValue / secondValue;
  }

  percentage(firstValue, secondValue) {
    return (firstValue * secondValue) / 100;
  }

  reset() {
    this.currentValue = null;
  }
}
