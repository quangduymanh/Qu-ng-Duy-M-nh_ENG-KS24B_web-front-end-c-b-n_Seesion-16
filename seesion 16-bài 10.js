let number1 = +prompt("Nhập số đầu:");
let number2 = +prompt("Nhập số cuối:");
let min = Math.min(number1, number2);
let max = Math.max(number1, number2);
let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
document.write(`Số ngẫu nhiên trong khoảng ${min} đến ${max} là ${randomNumber}`);