const display=document.querySelector("#display");
// const button0=document.querySelector("#button0");
// const button1=document.querySelector("#button1");
// const button2=document.querySelector("#button2");
// const button3=document.querySelector("#button3");
/*
button1.addEventListener("click",function(){
    display.innerText+="1";

})
button2.addEventListener("click",function(){
    display.innerText+="2";

})
button3.addEventListener("click",function(){
    display.innerText+="3";

})
button0.addEventListener("click",function(){
    display.innerText+="0";

})
    */
//    button0.addEventListener("click",digitHandler);
//    button1.addEventListener("click",digitHandler);
//    button2.addEventListener("click",digitHandler);
//    button3.addEventListener("click",digitHandler);
const elements=document.querySelectorAll(".digitsBtn");
const plusBtn=document.querySelector("#plusBtn");
const equalBtn=document.querySelector("#equalBtn");
let operand1=0;
let operator=""
let isOperator=false;
equalBtn.addEventListener("click",function(){
    let operand2=parseInt(display.innerText);
    if(operator=="+")
    {
        let result=operand1+operand2;
        display.innerText=result;

    }
})
plusBtn.addEventListener("click",function()

{
    operand1=parseInt(display.innerText);
    operator="+";
    isOperator=true;


})
elements.forEach(function(item){
    item.addEventListener("click",digitHandler);
})

   function digitHandler(e)
   {
    if(display.innerText=="0" || isOperator==true)
    {
        display.innerText="";
        isOperator=false;
    }


   display.innerText+=  e.target.innerText;

   }

  // const elements=document.querySelectorAll("#btns button")
