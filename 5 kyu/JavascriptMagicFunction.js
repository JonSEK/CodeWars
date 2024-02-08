/* 
Create function that:
accepts any number of parameters,
returns sum of every single parameter given,
any parameter that can not be parsed as a number will be counted as 0.
can be called infinitely,
the next function call will do the same thing, but also summing the last returned number.

Examples:
MagicFunction(3) == 3; // should return true
MagicFunction(1, 2) == 3; // should return true
MagicFunction(1, 3)(2) == 6; // should return true
MagicFunction(1, 2)(3, 4, 5)(6)(7, 10) == 38; // should return true 
*/

function MagicFunction(...args) {
  let sum = args.reduce(
    (acc, val) => acc + (isNaN(Number(val)) ? 0 : Number(val)),
    0
  );

  function innerMagic(...innerArgs) {
    sum += innerArgs.reduce(
      (acc, val) => acc + (isNaN(Number(val)) ? 0 : Number(val)),
      0
    );
    return innerMagic;
  }

  innerMagic.valueOf = function () {
    return sum;
  };

  return innerMagic;
}
