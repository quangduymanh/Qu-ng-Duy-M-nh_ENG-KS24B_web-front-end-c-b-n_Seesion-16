let number1 = +prompt("mời nhập số thứ nhất");
let number2 = +prompt("mời nhập số thứ hai");
let number3 = +prompt("mời nhập số thứ ba");
let number4 = number1;
if (number4<number2){
    number4=number2;
}
if (number4<number3){
    number4= number3;
}
document.write(`Số lớn nhất ${number4}`);