// 1. Переменные разных типов
const num = 10;
const str = "Text";
const bool = true;
const arr = [1, 2];
const obj = { key: "value" };

console.log(num + 5);
console.log(str);
console.log(!bool);
// alert(arr.length);

// 2. Массив и перебор
const numbers = [3, 7, 2, 9, 4, 1, 8, 5, 6, 10];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

for (const index in numbers) {
  console.log(numbers[index]);
}

numbers.forEach((n) => console.log(n));

// 3. Функция проверки числа
function checkNumber(array, number) {
  if (array.includes(number)) {
    return true;
  } else {
    array.push(number);
    return false;
  }
}

console.log(checkNumber(numbers, 5));
console.log(checkNumber(numbers, 11));

// 4. Объект
const person = {
  name: "Anna",
  age: 25,
  isStudent: true,
  skills: ["JS", "HTML"],
};

// 5. Стрелочная функция
const printValue = (object, property) => {
  console.log(object[property]);
};

printValue(person, "name");
printValue(person, "age");
