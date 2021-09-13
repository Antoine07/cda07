
let s1 = {
    name : "Alan",
    age : 45
};

let age = 40;

let s2 = { age };

console.log(s2);

function setInfo({ name, age }){

    console.log(name, age);
}

setInfo({age: 46, name : "Alan"})