// //DAY 2
// //type of variables
// //data type
// // let a=10;
// // console.log(typeof a);

// // a="Data";
// // console.log(typeof a);
// //var data='This is a string';
// //console.log(typeof data);
// // let a=10;
// // let b=20;
// // let c=a+b;//number+string=concat,string+string=concat
// // console.log(c);
// // let result=10;
// // let name="Code"
// // //let message="The "+result+ " of "+name+" is correct";//string+number+string=concat
// // //let message="The "+result+" of "+name+" is correct"
// // //let message=`The ${result} of ${name} is correct`;

// // console.log(message);
// //String s=new String("Demo");
// //s="New Data";
// //int a=10;
// //a=20;


// //STRING FUNCTIONS
// let data="This is a string";
// //data=data.toLowerCase();
// //console.log(data);
// //data.toUpperCase();
// //console.log(data.length);
// // let pos=data.indexOf("s");//0 based , -1 if not founded

// // console.log(pos);
// // pos=data.indexOf("s",4);
// // console.log(pos);

// // pos=data.indexOf("X");
// // console.log(pos);
// // pos=data.lastIndexOf("s");
// // console.log(pos);

// // console.log(data.substring(3,6));

// // console.log(data.endsWith("ing"));
// /*
//     CONTROL STRUCTURES
//     1. SEQUENCE CONTROL
//     2. decision /transfer /selection control
//     if, if else, else if, switch , ?:
//     3. Loop/iteration logic/repetitive logic
//      do-while, while, for, break, continue

// */
// /*
// Operators
// Airthmetic, Relational, Logical, Comparison,
// Assignment, Modulo

// if(7)
// cout<<"Hello";

// if(7)
// System.out.println("Hello");
// Impilcit 
// 1. Target Type > Source Type
// 2. Type must be compatible
// */

// // let a=10;
// // let b="10";
// // console.log(a===b);
// /*
// float f=3.7;
// int a=f;

// */
// /*
// let f=3.7;
// let a=f;//Math.floor(f);
// console.log(a);
// returntype functionname(arguments)
// signature/prototype
// */
// function display()
// {
//     console.log("Function called...");
// }
// //let result=display();
// //console.log(result);



// // display();
// // display();
// /* int sum(int x,int y)*/
// function sum(x,y)
// {
//     //console.log(arguments[2]);
// return x+y;
//     //console.log(x,y)
// }
// console.log(sum(3,4));

// //sum(10,20,30);
// /*

// fact,reverse of any digit number 12345->54321
// Email valid
// let data="";

// 1. @
// 2. @ must not be the first character
// 3. last 3/4 .    .com, .net, .in

// Palindrome ->
// 1. Temp string;
// 2. strx

// */


// //arrays, group of homogenous(similar type)
// //C,C++,Java -> int 
// //group of variables (hetrogenous)
// //int a=10;
// //int arr[5];//compiler
// //int arr=new int[5];
// //int arr[]={344,4,5,6,5}
// // let arr=[3,23,45,"Data",32.5];
// // //0-4,5,6
// // arr[60]=20;
// // //*(arr+6)
// // //*(arr+0)
// // console.log(arr);
// //console.log(arr);
// //let arr1=new Array(10);

// //let arr=[34,4,5,6,7,5];
// let arr1=[100,200,300];
// let arr2=[400,500,500];
// ///1. Traverse
// // print(arr1);
// // print(arr);



// // function print(array)
// // {
// //     for(i=0;i<array.length;i++)
// //       console.log(array[i]);
// // }
// //2.Custom Function
// /*
// function mylogic(item,index,array)
// {
// console.log("My Logic",item,index,array[index-1])
// }
// print(arr,mylogic);
// print(arr1,mylogic);
// function print(array,callback)
// {
//     for(i=0;i<array.length;i++)
//         callback(array[i],i,array);


// }
// */
// //1. for
// //2. 3 iterators forEach,map,filter
// //arr.forEach(iterate)
// // arr.forEach(function(item,index,array){

// //     console.log('Data ',item);

// // })

// // function iterate(item,index,array)
// // {
// //     console.log(item);


// // }

// let arr=[34,4,5,6,7,5];
// /*let result=[];
// for(i=0;i<arr.length;i++)
// {
//     if(arr[i]%2==0)
//         result.push(arr[i]);

// }*/
// /*
// let result=arr.filter(function(item){
//     if(item%2==0)
//         return true;

// })
// console.log(result);
// */
// // let result=[];
// // for(i=0;i<arr.length;i++)
// //     result.push(arr[i]*2);
// // console.log(result);

// let result=arr.map(function(item){
//     if(item%2==0)
//     return item*2;
//     else
//     return 0;
// })
// console.log(result);



// //push,pop,shift,unshift, splice
// /*
// console.log(arr);
// arr.push(100);
// console.log(arr);
// let item=arr.pop();
// console.log(arr);
// console.log(item);

// console.log(arr);
// arr.unshift(100);
// console.log(arr);
// arr.shift();*/
// //console.log(arr);
// //arr.splice(arr.length-1,1);
// //arr.splice(2,2,20,30,40,50)

// console.log(arr);
// //for(i=0;i<arr.length;i++)


// //1. Traverse
// //  for(i=0;i<arr.length;i++)
// //      console.log(arr[i]);
// // //callback
// //  for(i=0;i<arr1.length;i++)
// //      console.log(arr1[i]);

// /*
// function bikeService(x)
// {
//     //background
//     x();

// }
// function bikeWash()
// {

// }

// bikeService(bikeWash);

// */
//OBJECTS
//KEY-VALUE PAIR
//let a=10;
//let arr=[];
//let obj={}//object
//let obj={"name":"Code","age":20,years:3.5,"name":"ABC"}//JSON
//console.log(obj);
let obj={
    "name":"Test name",
    "total students":1000,
    "isActive":false,
    marks:[12,23,34],
    address:{"home":"abc","office":"xyz"},
    getName:getFullName


};
//obj.age=20;
delete obj.isActive;
console.log(obj);

let obj1={
    "name":"Another name",
    "total students":1000,
    "isActive":false,
    marks:[12,23,34],
    address:{"home":"abc","office":"xyz"},
    getName:getFullName


};

function getFullName()
{
    console.log(this.name);
    //console.log("full nae")
    

}
obj.getName();//
obj1.getName();
console.log(obj.address.home);


//obj.name="Test";
//console.log(obj);c
//console.log(obj.name);
console.log(obj.name);
//Array Notation
console.log(obj["name"]);
//1.Keyname variable
let key="name";
console.log(obj[key]);
//2.
console.log(obj["total students"]);
//obj.marks.forEach


function test()
{
    console.log("Test called..");
}
let fun=test;
console.log(typeof fun);
test();
fun();
let fun1=function(){

}


//for(i=0;i<=Array.len)
for(var key1 in obj)
{
    console.log(key1);
    console.log(obj[key1]);

}