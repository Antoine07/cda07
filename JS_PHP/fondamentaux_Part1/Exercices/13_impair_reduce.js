const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 10];

const sumNumbEven = numbers.reduce((acc, curr) => {
    if( curr % 2 != 0){

        return curr + acc ; // acc
    }

    return acc; // garder ce que tu avais déjà calculé
}, 0);

console.log(sumNumbEven);

/*

// 1
acc = 0
 1 + 0

// 2
1

// 3
3 + 1 = 4 // acc
*/