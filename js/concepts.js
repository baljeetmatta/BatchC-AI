//Hoisting


// console.log(data);
// data=20;
// console.log(data);


// var data=10;
// function test()
// {

// }
// test();

// console.console(data);

// function test()
// {
//     console.log(data);
//     var data=20;

// }
// console.log(data);
//Regular Functions
//Var ->variables
//Arrow, Function as expression (Hoisting not applicable)

// var test=function(){
//     console.log("Test callledd..")
// }

// test();
// test();


// function test()//regular function
// {
//     console.log("Test called...")

// }
// var testing=()=>{
//     console.log("Testing called...")
// }

// function sum(x,y)
// {
//     return x+y;
// }
// let add=(x,y)=>{
//     return x+y;
// }

// let add1=(x,y)=>x+y;
// let add2=(x)=>x;
// let add3=x=>x;

// console.log(add1(3,4))



// testing();

//CLOSURE PROPERTY
// function add(x)
// {
//     // let x=10;
//     // console.log(x);
//     return function(){
//         console.log(x);
//     }

// }


// let result= add(120);

// result();
//CURRYING
//Multiple Arguments ->Single Argument->Chain of functions
// function add(x)
// {
//     return function(y){
//         return x+y;
//     }

// }

// let result=add(20);
// let output=result(30);
// console.log(output);
//overloading

function test(x)
{
    if(x==undefined)
        
    console.log("Single Arguments")
    else
        console.log("Multiple ")
}

test();
test(30);



