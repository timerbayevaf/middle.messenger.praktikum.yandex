/*
rangeRight(4); // => [0,1,2,3]
rangeRight(-4); // => [0,-1,-2,-3]
rangeRight(1, 5); // => [1,2,3,4]
rangeRight(0, 20, 5); // => [0,5,10,15]
rangeRight(0); // => []
*/

function range(start, end, step, isRight) {
  if (end === undefined) {
    end = start;
    start = 0;
  }

  step = step === undefined ? (start < end ? 1 : -1) : step;
  return baseRange(start, end, step, isRight);
}

function baseRange(start, end, step, isRight) {
  let index = -1;
  let length = Math.max(Math.ceil((end - start) / (step || 1)), 0);
  const array = new Array(length);

  while (length--) {
    array[isRight ? length : ++index] = start;
    start += step;
  }

  return array;
}

export { range };
