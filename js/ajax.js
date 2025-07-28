//AJAX 
//Flat File,
/*
Name
Age
City
Name
Age
City


*/
//csv file 
//Name,age,city
//Name,age,city
/*
XML
<Students>
    <Student>
        <Name></Name>
        <Age></Age>
        <City></City>
    </Student>
</Students>

*/
/*

XMLHttpRequest
fetch
axios

*/
/*
1. Object
2. Prepare
    URL,method
3. Event Handle
4. Send


*/
const container=document.querySelector("#container");

//1. Object
let xmlHttpRequest=new XMLHttpRequest();
//2. Prepare
xmlHttpRequest.open("GET","https://jsonplaceholder.typicode.com/posts");
//3. Event Handle
/*xmlHttpRequest.onload=function(){

}*/

xmlHttpRequest.addEventListener("load",()=>{
//console.log(xmlHttpRequest.responseText);
let obj=JSON.parse(xmlHttpRequest.responseText);
obj.forEach((item)=>{
    addBlog(item)
})
//console.log(obj);


});
let addBlog=(item)=>{
    let mainDiv=document.createElement("div");
    let titleDiv=document.createElement("div");
    let bodyDiv=document.createElement("div");
    titleDiv.innerText=item.title;
    bodyDiv.innerText=item.body;
    let hr=document.createElement("hr");

    mainDiv.append(titleDiv,bodyDiv,hr);
    container.append(mainDiv);

    
    


}
//xmlHttpRequest.onreadystatechange
// xmlHttpRequest.addEventListener("readystatechange",()=>{
//     if(xmlHttpRequest.readyState==4)
//     console.log(xmlHttpRequest.responseText);

// })
//4.Send
xmlHttpRequest.send();

