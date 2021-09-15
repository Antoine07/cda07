
// deux scopes pour protéger vos variables 

// 1
(function () {
  let a = 1,
    b = 2;
  [a, b] = [b, a];
  console.log(`A  :${a}, B : ${b}`);
})();

/*

const exp = function(){};

exp();

*/

// 2
(function () {
  let a = 1,
    b = 2,
    c = 3;
  [a, b, c] = [b, c, a];
  console.log(`A  :${a}, B : ${b} C : ${c}`);
})();
