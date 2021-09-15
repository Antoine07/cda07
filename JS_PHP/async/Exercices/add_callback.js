"use strict";
const TIMER = 500;

const add = (number, callback, error) => {
  setTimeout(() => {
    if (parseFloat(number) == number) {
      callback(parseFloat(number));

      return;
    }

    error(new TypeError(`Is not a number ${number}`));
  }, TIMER);
};

const error = (message, code = true) => {
  try {
    if (code === true) {
      throw message;
    } else {
      console.log("Save error...");
    }
  } catch (err) {
    if (err instanceof TypeError) console.log("On a levé une exception", err);
  }
};

add(
  1,
  (number) => {
    let sum = number;
    add(
      "Bonjour",
      (number) => {
        sum += number;

        add(
          3,
          (number) => {
            sum += number;

            console.log(sum);
          },
          error
        );
      },
      error
    );
  },
  error
);
