//callback
//callback hell
//Promise->
/*
PENDING
fullfilled
rejected
Promise->Task-function
references to functions
*/
let number=4;
let evenProm=new Promise((resolve,reject)=>{

    setTimeout(()=>{
    if(number%2==0)
        resolve({msg:"Even",no:number});
    else
        reject("Not an Even");
},4000);

});
//evenProm;

//console.log(evenProm);
/*
evenProm.then((data)=>{//resolve
    console.log(data.msg,data.no);

}).catch((data)=>{//reject

    console.log(data)
})*/

Promise.race([
    Promise.resolve("Resolved 1"),
      Promise.resolve("Reject 2"),
     Promise.resolve("Resolved 3"),
    


]).then((data)=>{
    console.log(data);
})  .catch((data)=>{
    console.log(data);
})

