const numbers = [{a:10}, {a:18},{a:13},{a:9},{a:12},{a:11},{a:18},{a:9},{a:15},{a:14},{a:16}];

// Pensez à définir la première valeur de l'accumulateur
const sum = numbers.reduce((acc, curr) => acc + curr.a, 0);

console.log(sum);

/*
numbers.reduce((acc, curr) => {
    console.log(acc, curr);

    return acc + curr.a
});

{ a: 10 } { a: 18 }   <== pensez à initialiser la première valeur
[object Object]18 { a: 13 }
[object Object]1813 { a: 9 }
[object Object]18139 { a: 12 }
[object Object]1813912 { a: 11 }
[object Object]181391211 { a: 18 }
[object Object]18139121118 { a: 9 }
[object Object]181391211189 { a: 15 }
[object Object]18139121118915 { a: 14 }
*/

const splitSum = numbers.reduce((acc, curr, i) => {
    if(i === 0) return 0;

    return acc + curr.a
}, 0);

console.log(splitSum);