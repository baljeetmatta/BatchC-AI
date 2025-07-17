// // console.log(document.forms);
// //getElementById
// //getElementsByClassName
// //getElementsByTagName
// //querySelector
// //querySelectorAll
// //int a=10;
// //int b=a;
// //int *c=&a
// //int &d=a;
// //const elements=document.getElementsByTagName("p");
// //console.log(elements[1].innerText);
// //elements[0].innerHTML="<b>Hi</b>";
// //elements[0].style.backgroundColor="red";
// //elements[0].style.padding="10px";
// //elements[0].classList.add("format");
// //const pContent=document.getElementById("pContent");
// //pContent.innerText="Hi";
// // const pContent=document.querySelector(".x"); //first element with class x

// // const pContents=document.querySelectorAll(".x"); //first element with class x

// //const elements=document.querySelectorAll("p");
// //console.log(elements);



// //pContent=10;
// const bigImage=document.querySelector("#bigImage");

// function clickHandler()
// {
//     alert("Hi");

// }
// function changeImage(img)
// {
//     console.log(this);

//     img.src="images/2.jpg";

// }

// function changeBanner(img)
// {
//     bigImage.src=img.src;
    
// }


// const pContent=document.querySelector("#pContent");
// // pContent.onclick=clickHandler;
// function clickHandler()
// {
//     alert("Clicked...")

// }
// pContent.addEventListener("click",clickHandler)

// const text=document.querySelector("#text");
// const clickBtn=document.querySelector("#clickBtn");
// const printBtn=document.querySelector("#printBtn");

// // clickBtn.addEventListener("click",function(){
// //     alert(text.value)
// // })

// // printBtn.addEventListener("click",function(){
// //     alert("Hello")
// // })
// clickBtn.addEventListener("click",CHandler);
// printBtn.addEventListener("click",CHandler);

// function CHandler(evt)
// {
//     //console.log(evt);
//     if(evt.target==clickBtn)
//     alert("Hello")
// if(evt.target==printBtn)


// }

const number1=document.querySelector("#number1");
const number2=document.querySelector("#number2");
const result=document.querySelector("#result");
const addBtn=document.querySelector("#addBtn");
const resultDiv=document.querySelector("#resultDiv");
addBtn.addEventListener("click",function(){

    let no1=parseInt( number1.value);
    let no2=parseInt(number2.value);
    let add=no1+no2;
    result.value=resultDiv.innerText= add;


})

