// 1.	Find Largest number in an Array? 
let first = (b) => {
    let myData = 0;
    b.map(val => {
        if (val > myData) {
            myData = val
        }
    })
    console.log(myData);

}
let l = [2, 3, 8, 0, 5, 10, 11, 6, 87]
first(l)


//*Second Largest number in  an array?


let sec = (b) => {
    for (let i = 0; i < b.length; i++) {
        for (let j = 0; j < b.length; j++) {
            if (b[i] < b[j]) {
                var c = b[i];
                b[i] = b[j];
                b[j] = c;
            }
        }
    }
    console.log(b[b.length - 2]);
}
let k = [2, 3, 8, 0, 5, 10, 11, 6, 87]
sec(k)
// ===============================================================================

// 2.	Separate Even and Odd in array? 
let y = [2, 3, 8, 15, 13, 12]
let eve = y.filter((val, ind) => {
    if (val % 2 === 0) {
        return val;
    }
})
console.log(eve);
let odd = y.filter(val => val % 2 === 1)
console.log(odd);
// *Even and odd should be in other Arrays?
console.log([...eve, ...odd]);
// ===========================================================================================

// 3.	Find the Factorial of a Number?
let num = 5
let sum = 1
for (i = 1; i <= num; i++) {
    sum = i * sum
}
console.log(sum);

// 4.	Give me Random number using a Function?

console.log(Math.floor(Math.random() * 100));


// 5.	Find the Prime numbers in an given array?
// let num1=66
// {
//     if(num1%2!==0  && num1%3!==0){
//         console.log("its  a prime");
//     }else console.log("its not a prime");
// }

// let val=[1,2,4,3,3,3,3,3,3]
// let x=[...new Set(val)]
//     console.log(x)
// 5.	Find the Prime numbers in an given array? And Check whether the given number is prime or not?
function inPre(a) {
    for (let i = 0; i < a.length; i++) {
        let count = 0;
        let num = a[i];
        for (let j = 1; j <= num; j++) {
            if (num % j === 0) {
                count++;
            }
        }
        if (count === 2) {
            console.log(num);
        }
    }
}
let d = [1, 4, 6, 12, 15, 14, 17, 18, 20]
inPre(d)

// 6.	Find the fibonocci series of the given number?
function fabinocii(a) {
    let num1 = 0;
    let num2 = 1;
    let sum = 0;
    console.log(num1);
    console.log(num2);
    for (let i = 1; i <= a; i++) {
        sum = 0;
        sum = num1 + num2;
        console.log(sum);
        num1 = num2;
        num2 = sum;
    }
}
fabinocii(5)

// 7.	Bubble sort programme?
function sort(b) {
    for (let i = 0; i < b.length; i++) {
        for (let j = 0; j < b.length; j++) {
            if (b[i] < b[j]) {
                var c = b[i];
                b[i] = b[j];
                b[j] = c;
            }
        }
    }
    console.log(b);
}
let x = [2, 3, 8, 0, 5, 10, 11, 6, 87]
sort(x)

// 8.	Find whether the given number is Palindrome or not?

let paliNum = 1221;
let newer = Number(paliNum.toString().split("").reverse().join(""))
if (newer === paliNum) {
    console.log(paliNum + " is a palindrom number");
}
else console.log(paliNum + " is not a palindrom number");

// 9.	Give me a output like this

let star = 9;

let count = ""
for (i = 0; i < star; i++) {
    count = count + "*"
    console.log(count);
}

// 13.	Generate Id by using a button. Id Should change everytime When we click the button.

let randomId = () => {
    let para = document.getElementById("id")
    let myId = Math.floor(Math.random() * 100000);
    para.innerText = myId;
}

// 14.	Fetch the Data from Json Placeholder and print it.

let fetched = () => {
    let datatable = []
    let tabledata = document.getElementById("tablebody")
    fetch("https://jsonplaceholder.typicode.com/posts").then((res) => {
        return res.json();
    }).then((data) => {
        console.log(data)
        let td = data.map((item) => {
            tabledata.innerHTML+=  `<tr>
<td>${item.userId}</td>
<td>${item.id}</td>
<td>${item.title}</td>
<td>${item.body}</td>
</tr>
`

        })
    }).catch((err) => {
        console.log(err)
    })



}

// 15. 17.	Form Validation programme.
const email = document.getElementById('email')
console.log(email);

const pass = document.getElementById('pass')
console.log(pass);

const spa = document.getElementsByTagName('span')

console.log(spa);

const mail = /^([a-zA-z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,3})$/
const password = /^([a-zA-Z0-9]){8,10}$/

email.onkeyup = function () {
    if (mail.test(email.value)) {
        spa[0].innerHTML = 'Valid Email'
        spa[0].style.color = 'green'
    }
    else {
        spa[0].innerHTML = "Invalid Email"
        spa[0].style.color = 'red'
    }
}

pass.onkeyup = function () {
    if (password.test(pass.value)) {
        spa[1].innerHTML = 'Valid Password'
        spa[1].style.color = 'green'
    }
    else {
        spa[1].innerHTML = "Invalid PAssword"
        spa[1].style.color = 'red'
    }
}

function addlocal(){
localStorage.setItem("email",email.value)
localStorage.setItem("password",pass.value)


}

function getlocal()
{
let e=localStorage.getItem("email")
let p=localStorage.getItem("password")

document.getElementById("e").innerText=e
document.getElementById("p").innerText=p

}

function clearlocal(){
    localStorage.clear()
}

// 16.	Background colour change based on the dropdown
let backgroundChange=()=>{
    var select = document.getElementById("color").value
    console.log(select);
    if (select === "blue") {
        document.body.style.backgroundColor = select
    }
    else if (select==='green'){
        document.body.style.backgroundColor = select

    }else if(select==="red"){
        document.body.style.backgroundColor = select

    }
}



// 10.	Object Iteration Programs.
const object = {
    a: 1,
    b: 2,
    c: 3
  };
  for (const property in object) {
    console.log(`${property}: ${object[property]}`);
  }
  

//   11.	2 Examples on each loop like for loop, for in, etc…

//for of loop
var numbers=[10,20,30,40]
for (var number of numbers){
console.log(number);
}

// example 2
var fruits=['Apple','pineApple','Green Apple','Mango']
for (var fruit of fruits){
    console.log(fruit);
}

// for in loop
var person={
    fisrtName:'manju',
    lastName:'m',
    age:25,
    gender:'male'   
}
for (var key in person){
    console.log(`${key}-${person[key]}`);
    console.log();
}

// 12.	Programmes on Array Destructuring and Object Destructuring.

//Array destructing
const mobiles=["Apple",'sumsung',"realme",'xiaomi']
const [mobile1,mobile2]=mobiles
console.log(mobile1);
console.log(mobile2);

// //objectDestructure
const person1={
    firstName:'manju',
    lastName:'m',
    age:25,
    hobbies:['cricket','gamming'],
    address:{
        state:'Karnataka',
        city:'Banglore',
    }
}
const {firstName,lastName}=person1
console.log('fisrtName',firstName);
console.log('LastName',lastName);
//multi level destructure
const {hobbies,address:{state,city}}=person1
console.log('hobbies',hobbies);
console.log('state',state)
console.log('city',city);

