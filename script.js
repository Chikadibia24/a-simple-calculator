//Get our html elements
let input1 = document.querySelector("#input-1");
let input2 = document.querySelector("#input-2");
let addBtn = document.querySelectorAll("button")[0];
let minusBtn = document.querySelectorAll("button")[1];
let divideBtn = document.querySelectorAll("button")[2];
let multBtn = document.querySelectorAll("button")[3];
let clearBtn = document.querySelector('#clear');
let outPut = document.querySelector("#para-1");

//Addition function
function addSum(num1, num2) {
  let sum = (num1 + num2).toFixed(10);
  //sum.toFixed(10);
  outPut.innerHTML = sum;
  console.log(sum);
  input1.value = "";
  input2.value = "";
}

//Subtraction Function
function subtractSum(num1, num2) {
  let minus = (num1 - num2).toFixed(10);
  //minus.toFixed(10);
  outPut.innerHTML = minus;
  console.log(minus);
  input1.value = "";
  input2.value = "";

}

//Division Function
function divideSum(num1, num2) {
  let divide = (num1 / num2).toFixed(10);
  //divide.toFixed(10);
  outPut.innerHTML = divide;
  console.log(divide);
  input1.value = "";
  input2.value = "";
}

//Multiplication Function
function multiplySum(num1, num2) {
  let times = (num1 * num2).toFixed(10);
  //times.toFixed(10);
  outPut.innerHTML = times;
  console.log(times);
  input1.value = "";
  input2.value = "";
}

//Clear Output Function
function clearOutput() {
  //location.reload();
  outPut.innerHTML = '';
  input1.value = "";
  input2.value = "";
}

// Add Event Listener to buttons
addBtn.addEventListener("click", () => {
  addSum(Number(input1.value), Number(input2.value));
});

//addBtn.onclick = addSum(Number(input1.value), Number(input2.value));

minusBtn.addEventListener('click',
  () => {
    subtractSum(Number(input1.value), Number(input2.value));
  }
)

divideBtn.addEventListener("click", () => {
  divideSum(Number(input1.value), Number(input2.value));
});

multBtn.addEventListener("click", () => {
  multiplySum(Number(input1.value), Number(input2.value));
});

clearBtn.addEventListener("click", clearOutput);

