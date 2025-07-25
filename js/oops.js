// class Data
// {
  
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }
//    // name="Code";
//    read=(name,age)=>{
//     this.name=name;
//     this.age=age;

//    }
//     print(){
//         console.log(this.name,this.age)
//     }
//     printData=()=>{
//         console.log(this.name);
//     }

// }
// let d=new Data("Name",20);//Object/Instance->variable->Instance Variables
// //d.read("Code",10);

// d.print();
// d.printData();


//this -> Instance Variable Hiding
/*
class Data
{
    string name;
    print()
    {
        cout<<name;
    }

}

*/

/*
Object
C++
    Data obj;//Compile Time
    Data *p=new Data();//Run-Time
Java
Data d;//Reference to class called Data ->null
d=new Data();//Object 
*/

// class Student
// {
//     constructor(name,section)
//     {
//         this._name=name;
//         this._section=section;
//     }
//    get name()
//     {
//         return this._name;
//     }
//     set name(value){
//         this._name=value;
//     }
//     // getName=()=>{
//     //     return this.name;
//     // }
//     // setName=(value)=>{
//     //     this.name=value;
//     // }
//     // getSection=()=>{
//     //     return this.section;
//     // }
//     // setSection=(value)=>{
//     //     this.section=value;
//     // }
//     read=(name,section)=>{
//         this._name=name;
//         this._section=section;
//     }
//     print=()=>{
//         console.log(this._name,this._age);

//     }
// }
// let student=new Student("ABC",20);
// //console.log(student);
// //student.print();
// //student.setName("New Name");
// student.name="New Name";

// console.log(student.name);

// function Student(name,age)
// {
//         this._name=name;
//         this._age=age;
//         Object.defineProperty(this,"name",{
//             get:function(){
//                 return this._name;
//             },
//             set:function(value){
//                 this._name=name;
//             }
//         })


// }
// //Student("asdsa",23);
// let student=new Student("Code",10);

// console.log(student._age,student.name);


//inheritence
//1. Single
//2. Multple
//3. Multilevel
//4. Hirerachal
//5 Hybrid
/*
    A


    B


    C

                A

        B           C

    D.    E.  F


*/

/*


*/
/*
DIAMOND PROBLEM

                A

    B extends A         C extends A


                D extends B,C


*/

class Base{
    constructor(name)
    {
        this._name=name;

    }
    print(){
        console.log("Base print called",this._name);
    }
}
class Derived extends Base
{
    constructor()
    {
        super("Code");

    }
    print=()=>{
       // super("Code");

        console.log("Derived show");
        super.print();

    }
}
d=new Derived();
//d.show();
d.print();
