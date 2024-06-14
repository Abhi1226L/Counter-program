let num = document.querySelector(".num");
let decrease = document.querySelector("#decrease");
let increase = document.querySelector("#increase");
let reset = document.querySelector("#reset");
let num1 = 0;

decrease.addEventListener("click",function(){
      num.innerText = --num1;
})

increase.addEventListener("click",function(){
    num.innerText = ++num1;
})

reset.addEventListener("click",function(){
    num1 = 0;
    num.innerText = num1;
})