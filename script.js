
let myCars = ['Mercedes-Benz', 'Jeep', 'Ferrari', 'Lamborghini', 'Mercedes-Benz', 'BMW', 'Ferrari', 'Lamborghini'];
let indCars = ['Fiat', 'Mehindra', 'Tata', 'Ferrari'];

function removeDuplicates(myCars, indCars) {

    return myCars.concat(indCars).reduce((e, c) => {
        if (!(e.includes(c))) {
            e.push(c);
        }
        return e;
    }, []);
}

var uniqueCars = removeDuplicates(myCars, indCars);

console.log(uniqueCars);



// var userList = [
//     { "intId": 1, "userName": "Sunil", "dept": "PHP" },
//     { "intId": 2, "userName": "Bikash", "dept": "UI" },
//     { "intId": 3, "userName": "Rohit", "dept": "PHP" },
//     { "intId": 4, "userName": "Manas", "dept": "UI" },
//     { "intId": 5, "userName": "Sabyasachi", "dept": "UI" },
//     { "intId": 6, "userName": "Pramod", "dept": "UI" },
//     { "intId": 7, "userName": "Priyadarshini", "dept": "PHP" },
//     { "intId": 8, "userName": "Ritesh", "dept": "Java" },
//     { "intId": 9, "userName": "Banoj", "dept": "Java" },
//     { "intId": 10, "userName": "Prakash", "dept": "Java" }
// ];

// var deptWiseUser = userList.reduce(function (a, c) {
//     if (!(c.dept in a))
//         a[c.dept] = [];
//     a[c.dept].push(c);

//     return a;
// }, {})

// console.log(Object.values(deptWiseUser));













// let myCars = ['Mercedes-Benz', 'Jeep', 'Ferrari', 'Lamborghini', 'Mercedes-Benz', 'BMW', 'Ferrari', 'Lamborghini']


// var myCarCount = myCars.reduce(function (a, c) {
//     if (c in a) {
//         a[c]++;
//     }
//     else {
//         a[c] = 1;
//     }

//     return a;
// }, {});

// console.log(myCarCount);


// var ll = [[1, 2], [4, 5]];

// var fl = ll.reduce((acc, curr) => {
//     acc.push(...curr);
//     return acc;
// }, []);

// console.log(fl);



// var userList = [
//     { "intId": 1, "userName": "Sunil", "dept": "PHP" },
//     { "intId": 2, "userName": "Bikash", "dept": "UI" },
//     { "intId": 3, "userName": "Rohit", "dept": "PHP" },
//     { "intId": 4, "userName": "Manas", "dept": "UI" },
//     { "intId": 5, "userName": "Sabyasachi", "dept": "UI" },
//     { "intId": 6, "userName": "Pramod", "dept": "UI" },
//     { "intId": 7, "userName": "Priyadarshini", "dept": "PHP" },
//     { "intId": 8, "userName": "Ritesh", "dept": "Java" },
//     { "intId": 9, "userName": "Banoj", "dept": "Java" },
//     { "intId": 10, "userName": "Prakash", "dept": "Java" }
// ]
// var z = [];
// var x = 20000;
// var z = userList.filter(function (e) {


//     return e.dept === "UI";

// });
// console.log(z);

// var php = userList.reduce(function (acc, curr) {
//     acc[curr.dept] = acc[curr.dept] || [];
//     acc[curr.dept].push(curr);
//     return acc;

// }, {});
// console.log(php);


















// var userList = [
//     { "intId": 1, "userName": "Sunil", "dept": "PHP" },
//     { "intId": 2, "userName": "Bikash", "dept": "UI" },
//     { "intId": 3, "userName": "Rohit", "dept": "PHP" },
//     { "intId": 4, "userName": "Manas", "dept": "UI" },
//     { "intId": 5, "userName": "Sabyasachi", "dept": "UI" },
//     { "intId": 6, "userName": "Pramod", "dept": "UI" },
//     { "intId": 7, "userName": "Priyadarshini", "dept": "PHP" },
//     { "intId": 8, "userName": "Ritesh", "dept": "Java" },
//     { "intId": 9, "userName": "Banoj", "dept": "Java" },
//     { "intId": 10, "userName": "Prakash", "dept": "Java" }
// ]

// var group_to_values = userList.reduce(function (obj, item) {

//     obj[item.dept] = obj[item.dept] || [];
//     obj[item.dept].push({ 'intId': item.intId, 'userName': item.userName });
//     return obj;
// }, {});

// console.log(group_to_values)

// var userListNew = Object.keys(group_to_values).map(function (key) {
//     return { "Department": key, "Userlist": group_to_values[key], };
// });


// console.log(userListNew)


























// var x = document.documentElement;
// console.log(document.body.children[0].children);




// var address = [
//     {
//         lane1: 'badagada',
//         houseNo: 'EB773',
//         city: 'Bhubaneswar',
//         pin: '765454'

//     },
//     {
//         lane1: 'laxmi sagar',
//         houseNo: 'EA343',
//         city: 'Bhubaneswar',
//         pin: '765456'
//     },
//     {
//         lane1: 'old town',
//         houseNo: 'LB998',
//         city: 'Bhubaneswar',
//         pin: '765452'
//     }
// ];

// var lanes = address.map((add) => ({ lane: add.lane1 }));
// console.log(lanes);











// var numList = [2, 5, 1, 8, 7];



// numList.forEach(x => console.log(x));
// // var z = numList.map(x => x * 2);
// var z = numList.map(function (x) {
//     return x * 2;
// });
// console.log("*" + z);







//numList.filter(x => x > 5).filter(x => x % 2 != 0).forEach(x => console.log(x));



// function forEach1(arr, printArr) {
//     for (let i = 0; i < arr.length; i++)
//         printArr(arr[i]);
// }
// function callBack(x) {
//     console.log(x);
// }


// forEach1([2, 3, 4, 5], callBack);





// function fun(x, y) {
//     console.log(z);
//     var z = 5;
//     console.log(z);
// }

// fun(3, 4);



/*scope(accessablity) and execution context(the eneveronment created on memory)
 
there are two execution context
global(window)
function
 
two thing being done by execution context
1.proving memory
2.exction of each line being present inside that 
exicution context.
note:=function decation both happanes at once
 
 
*/

// function first() {
//     console.log("im in first funciotn");
//     second();
// }
// function second() {
//     console.log("im in second function");
//     third();

// }
// function third() {
//     console.log("im in third function");
// }

// first();

















//var xx=undefined;
// console.log(xx);

// var xx = 12;

// console.log(xx);


//var fx=undefined;



// var fx = function () {
//     console.log("hello all");
// }
// console.log(window);
// fx();











/*
 
//function declaration
function fx() {
    console.log("hello all");
}
 
fx();
 
 
//function literal or functin expression
var f = function () {
    console.log('function expression');
}
 
f();
 
//arrow function
var add = (a, b) => a + b;
 
console.log(add(4, 5));
 
 
//iife (immideiately invocable function expression)
 
(
    function (name1) {
        console.log('hello ' + name1);
    }
 
)("Amit");
 
 
//nested function
 
function outer() {
    console.log("im inside outer function");
    function inner() {
        console.log("im inside inner function");
    }
    inner();
}
 
outer();
 
*/




















// const fruit = ['apple', 'pears', 'mangoe', 'banana', 'orange'];

// // var bigfurit = fruit.filter(f => f.length > 5);

// var bigfurit = fruit.filter(fun);
// console.log(bigfurit);

// function fun(f) {
//     if (f.length > 5)
//         return f;
// }
















// function greetc(name, callback1) {
//     return "hello " + callback1(name);
// }

// function greet(name) {
//     return name;
// }

// console.log(greetc("amit", greet));






// let x = 12;
// function f() {
//     let x = 23;
//     console.log(x + " inside function");
//     sec();
// }
// f();
// console.log(x + "outside function");
// function sec() {
//     console.log('im in sec()');
// }


// try {
//     let x = 3;
//     console.log(x + " in local scope");
//     x = 5
// } catch (error) {
//     console.log(error);
// }

// console.log(x);




// var v = [];
// for (let i = 0; i < 3; i++) {
//     let t = new Array();
//     for (let j = 0; j < 3; j++) {
//         t[j] = Math.floor(Math.random() * 50);
//     }
//     v.push(t);
// }
// console.log(v);


// var arr = new Array(2, 3, 4, 5, 6);
// var narr = Array.of(...arr, 22, 33, 55);
// console.log(narr);

//var v = [2, 3, 4, 5, 6, 7, 8, 9];
//var x = [12, 32, 43];
//v.unshift(x);
//var z = [v, x];
//console.log(z[1][1]);

// var z = v.splice(2, 2);
// console.log(z);
// console.log(v);




// class Parent {
//     f1() {
//         return "parent";
//     }

// }
// class Child extends Parent {

// }

// var c = new Child();
// console.log(Parent instanceof Object);


// var st = "abc";
// var st1 = new String("def");
// console.log(st.__proto__, st1.__proto__);;


// var cd = new Date(2023, 0, 28, 13, 32);
// console.log(cd);


// var st = "Hello World";

// console.log(st.slice("dsdf"));


// class Test {
//     age = 12;
//     #name = "amit";
//     getName() {
//         return this.#name;

//     }

// }

// var t = new Test();
// console.log(t.#name);


// var sal = true;
// console.log(Number(sal));



// var v = Number('0b101');
// console.log(v);


// var v = 123n;
// console.log(v, typeof v);


// console.log(v);

// console.log('next line');

// var emp = {
//     name: 'amit',
//     salry: 2345.87
// }
// var emp2 = {
//     name: 'sumit',
//     salry: 3487.87
// }

// console.table([emp, emp2]);

// var st = 'margin-left:30px;padding:20px; background-color:red; color:white';

// console.log('%chello', st);

// console.error("hey");
// console.warn("ohoo");
// console.table(['abc', 'def', 'ghi'], ['data']);





// let cyr = new Date();

// let odt = cyr.__proto__;
// console.log(odt);

// odt.lastYear = function () {
//     return this.getFullYear() - 1;
// }
// console.log(odt);
// console.log(new Date().lastYear());



// let cyr = new Date(Date.now());


// // let cyrc = cyr.__proto__;

// cyr.lastYear = function () {
//     return this.getFullYear() - 1;
// }

// console.log(cyr.lastYear());



// function fun(x) {
//     return x * x;
// }

// console.log(fun.__proto__);


// var st = "anil";
// console.log(st.__proto__.__proto__);



// var arr = [3, 3, 4, 5];
// console.log(arr.__proto__.__proto__);




// var emp = {
//     name: 'Anil Sahoo',
//     hireDate: new Date('12/03/1999'),
//     salry: 23454.00
// };

// console.log(emp.__proto__);








// function fun() {
//     const arr = new Array(700);
//     for (let i = 0; i < arr.length; i++) {
//         arr[i] = Math.floor(Math.random() * 1000);
//     }
//     console.log(arr);
//     return function (i) {
//         return arr[i];
//     };
// }
// var fx = fun();
// console.log(fx(12));
// console.log(fx(23));
// console.log("*********************");

// var fx1 = fun1;
// console.log(fx1(12));
// console.log(fx1(23));

// function fun1(i) {
//     const arr = new Array(700);
//     for (let i = 0; i < arr.length; i++) {
//         arr[i] = Math.floor(Math.random() * 1000);
//     }
//     console.log(arr);
//     return arr[i];
// }




// var multiplyBy = function (num1) {
//     return function (num2) {
//         return num1 * num2;
//     }
// }


// console.log(multiplyBy());


// var multiplyByTwo = multiplyBy(2);
// console.log(multiplyByTwo(2));




// function f1() {
//     let par = 45;
//     return par;

// }
// console.log(f1());





// function f1(f) {
//     f();
// }


// f1(function () { console.log("hello"); })


// function f1() {
//     return function () {
//         return 5;
//     }
// }

// console.log(f1()());





// var arr = [2, 3, 4];
// console.log(arr);

// var orr = {
//     0: 2,
//     1: 3,
//     2: 4
// };
// console.log(orr);

// var oar = new Array(2, 3, 4);
// console.log(oar);

// console.log(Array.isArray(arr));
// console.log(Array.isArray(orr));
// console.log(Array.isArray(oar));




// var x;
// console.log(x);

// var x = function () {
//     return 20;
// }
// console.log(x.apply());





// function m1(p1, p2) {
//console.log(arguments);
// for (a of arguments) {
//     console.log(a);
// }

//     console.log(Array.from(arguments));

// }
// m1('tom', 'july');




//XHR style
// let xhr = new XMLHttpRequest()
// xhr.open('GET', './data.json');
// xhr.onreadystatechange = function () {
//     console.log(this.responseText);
// };







// xhr.send();

//JQuery Ajax Style
// $.ajax({
//     url: 'https://api.apis.guru/v2/metrics.json',
//     type: 'GET',
//     success: function (data) {

//         let x = JSON.stringify(data);
//         console.log(x);

//     },
//     error: function (request, error) {
//         alert("Request: " + JSON.stringify(request));
//     }
// });






//Fetch API style
// fetch("https://jsonplaceholder.typicode.com/users").then(response => response.json())
//     .then(data => console.dir(data));








// fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',
//     body: JSON.stringify({
//         title: 'xyz',
//         body: 'bar',
//         userId: 1,
//     }),
//     headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//     },
// })
//     .then((response) => response.json())
//     .then((json) => console.log(json));



$(document).ready((e) => {
    fetch("./country.json").then(r => r.json()).then(d => {
        for (x in d) {
            $('#countryId').append(`<option value='${x}'>${x}</option>`);
        }
    });
});



$('#stateId').on("focus", (e) => {
    if ($('#countryId').val() != 0) {
    } else {
        swal("Please select a country!!");
        $('#countryId').focus();

    }
});

$('#countryId').on('change', (e) => {

    for (x of $('#stateId').children()) {
        if (x.value != 0)
            x.remove();
    }
    fetch("./country.json").then(r => r.json()).then(d => {
        let cop = $('#countryId').val();
        if (cop != 0) {
            let opList = "";
            for (x of d[cop])
                opList += `<option value='${x}'>${x}</option>`;
            $('#stateId').append(opList);
        }
    });

});

$('#sbtn').click((e) => {
    e.preventDefault();
    swal("Good job!", "File Saved!", "success");
})