const couples = [
  [11, 12],
  [13, 15],
  [10, 17],
  [17, 19],
  [1, 111],
  [103, 105],
];

const concatCouples = couples.reduce((acc, curr) => {
  return [...acc, ...curr];
});


console.log(concatCouples);