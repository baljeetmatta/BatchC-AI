//DAY 2
//type of variables
//data type
// let a=10;
// console.log(typeof a);

// a="Data";
// console.log(typeof a);
//var data='This is a string';
//console.log(typeof data);
// let a=10;
// let b=20;
// let c=a+b;//number+string=concat,string+string=concat
// console.log(c);
// let result=10;
// let name="Code"
// //let message="The "+result+ " of "+name+" is correct";//string+number+string=concat
// //let message="The "+result+" of "+name+" is correct"
// //let message=`The ${result} of ${name} is correct`;

// console.log(message);
//String s=new String("Demo");
//s="New Data";
//int a=10;
//a=20;


//STRING FUNCTIONS
let data="This is a string";
//data=data.toLowerCase();
//console.log(data);
//data.toUpperCase();
//console.log(data.length);
// let pos=data.indexOf("s");//0 based , -1 if not founded

// console.log(pos);
// pos=data.indexOf("s",4);
// console.log(pos);

// pos=data.indexOf("X");
// console.log(pos);
// pos=data.lastIndexOf("s");
// console.log(pos);

// console.log(data.substring(3,6));

// console.log(data.endsWith("ing"));
/*
    CONTROL STRUCTURES
    1. SEQUENCE CONTROL
    2. decision /transfer /selection control
    if, if else, else if, switch , ?:
    3. Loop/iteration logic/repetitive logic
     do-while, while, for, break, continue

*/
/*
Operators
Airthmetic, Relational, Logical, Comparison,
Assignment, Modulo

if(7)
cout<<"Hello";

if(7)
System.out.println("Hello");
Impilcit 
1. Target Type > Source Type
2. Type must be compatible
*/

// let a=10;
// let b="10";
// console.log(a===b);
/*
float f=3.7;
int a=f;

*/
/*
let f=3.7;
let a=f;//Math.floor(f);
console.log(a);
returntype functionname(arguments)
signature/prototype
*/
function display()
{
    console.log("Function called...");
}
//let result=display();
//console.log(result);



// display();
// display();
/* int sum(int x,int y)*/
function sum(x,y)
{
    //console.log(arguments[2]);
return x+y;
    //console.log(x,y)
}
console.log(sum(3,4));

//sum(10,20,30);
/*

fact,reverse of any digit number 12345->54321
Email valid
let data="";

1. @
2. @ must not be the first character
3. last 3/4 .    .com, .net, .in

Palindrome ->
1. Temp string;
2. strx

*/
