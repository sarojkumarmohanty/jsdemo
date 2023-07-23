
let myCars = ['Mercedes-Benz', 'Jeep', 'Ferrari', 'Lamborghini', 'Mercedes-Benz', 'BMW', 'Ferrari', 'Lamborghini'];
console.log(myCars.includes('Jeeeep'));


var liList = document.querySelectorAll('li:nth-child(odd)');
console.log(liList);


var bIn = document.querySelector('#bId');
var btn = document.querySelector("#addBtn");


document.querySelector('li:nth-child(2)').addEventListener('click', (e) => {
    console.log('btn clicked');
    e.stopPropagation();
});
document.querySelector("#mUl").addEventListener("click", (e) => {
    console.log("ul clicked");
});

window.addEventListener("load", e => {
    document.querySelector("#msg").innerText = "no data found";
    console.log('window');
})
document.addEventListener("DOMContentLoaded", e => {
    // console.log(document.getElementById("#msg"));
    console.log('dom');
})

// document.querySelector("#f1").addEventListener("submit", e => {
//     var text = bIn.value;
//     if (text.length == 0) {
//         alert("Enter book name !!");
//     }
//     else {
//         document.querySelector("#msg").innerText = "";
//         var li = document.createElement("li");

//         li.className = "list-group-item list-group-item-info";
//         li.innerHTML = text + "<span><a href='' class='float-right'>X</a></span>";

//         document.querySelector("#mUl").appendChild(li);
//         bIn.value = "";
//     }
//     e.preventDefault();
// });

document.querySelector("#mUl").addEventListener("click", e => {
    if (e.target.className == "float-right")
        e.target.parentNode.parentNode.remove();
    if (document.querySelectorAll("li").length == 0)
        document.querySelector("#msg").innerText = "no data found";
    e.preventDefault();
});