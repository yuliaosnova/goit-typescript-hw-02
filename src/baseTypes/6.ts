/*
  Як ви вкажете типи для аргументів і значень цих функцій, що повертаються?
*/

function showMessage(message: string): void {
  console.log(message);
}

function calc(num1: number, num2: number): number {
  return num1 + num2;
}

//Це коли функція ніколи не закінчується та нічого не повертає. Часто тип never використовується для функцій, які завжди викидають вийняток або у нескінченних циклах. 
function customError():never {
  throw new Error('Error');
}

export {};