//console.log('hello world');

//fat arrow function
function a(){
    let a=2,b=5;
    return ()=>{      // anonymous function it will return anonymous as name to invoke.
        console.log(a*b);
    }
}

//a()();

// student object
let student={
    name:'jani',
    id:302,
    depaartment:'mechanical'

}

let data=()=>{
    console.log(student.name+' id is '+student.id+' and branch is '+student.depaartment);
}

//data();

const arr=['apple', 'oranges' , '', 'mango', '' , 'lemon'];
let arr1=arr.filter((value)=>{
    if(value!==''){
        return value;
    }
});

//console.log(arr1);

//spread operator
let arr2=[...arr1,'graps'];
//console.log(arr2);

//rest operator
function merge(...args){    //here spread operator acts as rest operator
    return args;            //it takes multiple arguments and return it
}

const arr3= merge('jhosh','krish','ram');
//console.log(arr3);

//const obj1 = {'key1': 1 , 'key2' : 2}
//
//const obj2 = { ...obj1, key1: 1000}
//
//
//
//console.log(obj1)
//
//console.log(obj2)

//destructuring
//const obj1 = {'key1': 1, "key2": 2, "key3": 1000}
//
//const { key1, key3}  = { ...obj1}

//console.log(key1, key3)

const obj1 = {'key1': 1, "key2": 2, "key3": 1000}

let { key1, key3}  = obj1

key1 = 20;
key3 = 123
//console.log(obj1.key1, obj1.key3)

//promises
console.log('a');
console.log('b');
function c(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(console.log('c'));
        }, (3000));
    })
}

function d(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(console.log('d'));
        }, (0));
    })
}

async function fun(){
    await c();
    await d();
    console.log('e');
}

fun();
