// console.log(document.forms);
//getElementById
//getElementsByClassName
//getElementsByTagName
//querySelector
//querySelectorAll
//int a=10;
//int b=a;
//int *c=&a
//int &d=a;
//const elements=document.getElementsByTagName("p");
//console.log(elements[1].innerText);
//elements[0].innerHTML="<b>Hi</b>";
//elements[0].style.backgroundColor="red";
//elements[0].style.padding="10px";
//elements[0].classList.add("format");
//const pContent=document.getElementById("pContent");
//pContent.innerText="Hi";
// const pContent=document.querySelector(".x"); //first element with class x

// const pContents=document.querySelectorAll(".x"); //first element with class x

//const elements=document.querySelectorAll("p");
//console.log(elements);



//pContent=10;
const bigImage=document.querySelector("#bigImage");

function clickHandler()
{
    alert("Hi");

}
function changeImage(img)
{
    console.log(this);

    img.src="images/2.jpg";

}

function changeBanner(img)
{
    bigImage.src=img.src;
    

}


